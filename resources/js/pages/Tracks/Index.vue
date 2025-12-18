<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import AddTrackModal from "@/components/Tracks/AddTrackModal.vue";
import EditTrackModal from "@/components/Tracks/EditTrackModal.vue";
import { useAudioPlayer } from "@/composables/useAudioPlayer";
import { Head, router } from "@inertiajs/vue3";
import {
    Clock,
    Play,
    MoreHorizontal,
    Plus,
    Pause,
    Search,
    Trash2,
    X,
    Pencil,
} from "lucide-vue-next";
import { computed, ref, watch, onMounted } from "vue";
import { route } from "ziggy-js";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

interface Track {
    id: number;
    title: string;
    artist: string;
    image: string | null;
    audio: string | null;
    play_count: number;
    created_at: string;
    slug: string;
}

const props = defineProps<{
    tracks: Track[];
}>();

const addTrackModalRef = ref<InstanceType<typeof AddTrackModal> | null>(null);
const editTrackModalRef = ref<InstanceType<typeof EditTrackModal> | null>(null);
const {
    setTrack,
    setTracksList,
    clearTrack,
    currentTrack,
    isPlaying,
    playFirstTrack,
    formatTime,
} = useAudioPlayer();
const searchQuery = ref("");
const isSearchFocused = ref(false);
const trackDurations = ref<Map<number, number>>(new Map());

function loadTrackDuration(track: Track) {
    if (!track.audio || trackDurations.value.has(track.id)) {
        return;
    }

    const audio = new Audio(`/storage/${track.audio}`);
    audio.addEventListener("loadedmetadata", () => {
        trackDurations.value.set(track.id, audio.duration);
    });
    audio.load();
}

function getTrackDuration(track: Track): string {
    if (!track.audio) {
        return "0:00";
    }

    const duration = trackDurations.value.get(track.id);
    if (duration !== undefined) {
        return formatTime(duration);
    }

    // Charger la durée si pas encore chargée
    loadTrackDuration(track);
    return "0:00";
}

const breadcrumbs = [
    {
        title: "Library",
        href: "/tracks",
    },
    {
        title: "Liked Songs",
        href: "/tracks",
    },
];

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date);
};

function handleTrackClick(track: Track) {
    setTracksList(filteredTracks.value);
    setTrack(track);
}

function playPlaylist() {
    setTracksList(filteredTracks.value);
    playFirstTrack();
}

function openAddTrackModal() {
    addTrackModalRef.value?.open();
}

function editTrack(track: Track, event: Event) {
    event.stopPropagation();
    editTrackModalRef.value?.open(track);
}

function deleteTrack(track: Track, event: Event) {
    event.stopPropagation();
    if (
        confirm(
            `Are you sure you want to delete "${track.title}" by ${track.artist}?`,
        )
    ) {
        router.delete(route("tracks.destroy", track.id), {
            preserveScroll: true,
            onSuccess: () => {
                // Si le track supprimé était en cours de lecture, arrêter la lecture
                if (currentTrack.value?.id === track.id) {
                    clearTrack();
                }
            },
        });
    }
}

const filteredTracks = computed(() => {
    if (!searchQuery.value.trim()) {
        return props.tracks;
    }
    const query = searchQuery.value.toLowerCase().trim();
    return props.tracks.filter(
        (track) =>
            track.title.toLowerCase().includes(query) ||
            track.artist.toLowerCase().includes(query),
    );
});

// Mettre à jour la liste de tracks dans le player quand elle change
watch(
    filteredTracks,
    (newTracks) => {
        if (currentTrack.value) {
            setTracksList(newTracks);
        }
        // Charger les durées des tracks visibles
        newTracks.forEach((track) => {
            if (track.audio && !trackDurations.value.has(track.id)) {
                loadTrackDuration(track);
            }
        });
    },
    { immediate: true },
);

// Charger les durées au montage du composant
onMounted(() => {
    props.tracks.forEach((track) => {
        if (track.audio && !trackDurations.value.has(track.id)) {
            loadTrackDuration(track);
        }
    });
});
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Head title="My Playlist" />

        <div
            class="flex flex-col min-h-screen bg-gradient-to-b from-indigo-900/50 via-neutral-900/50 to-neutral-950 pb-24"
        >
            <!-- Playlist Header -->
            <div
                class="flex items-end gap-6 p-8 bg-gradient-to-b from-indigo-800/80 to-transparent"
            >
                <div
                    class="h-52 w-52 shadow-2xl shadow-black/50 overflow-hidden rounded-md bg-gradient-to-br from-indigo-400 to-purple-700 flex items-center justify-center shrink-0"
                >
                    <span class="text-6xl text-white font-bold">♫</span>
                </div>
                <div class="flex flex-col gap-2 text-white">
                    <span class="uppercase text-xs font-bold tracking-wider"
                        >Playlist</span
                    >
                    <h1 class="text-6xl font-black tracking-tight md:text-8xl">
                        My Tracks
                    </h1>
                    <div
                        class="flex items-center gap-2 text-sm font-medium mt-4 text-neutral-300"
                    >
                        <div
                            class="h-6 w-6 rounded-full bg-neutral-700 overflow-hidden flex items-center justify-center text-[10px]"
                        >
                            T
                        </div>
                        <span class="text-white hover:underline cursor-pointer"
                            >Thomas</span
                        >
                        <span>•</span>
                        <span v-if="!searchQuery"
                            >{{ tracks.length }} songs</span
                        >
                        <span v-else
                            >{{ filteredTracks.length }} of
                            {{ tracks.length }} songs</span
                        >
                    </div>
                </div>
            </div>

            <!-- Search Bar -->
            <div class="px-8 pt-6 pb-4 relative z-20">
                <div
                    class="relative max-w-md rounded-full"
                    :class="{ 'ring-2 ring-white': isSearchFocused }"
                >
                    <Search
                        class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400"
                        :class="{
                            'text-white': isSearchFocused || searchQuery,
                        }"
                    />
                    <Input
                        v-model="searchQuery"
                        @focus="isSearchFocused = true"
                        @blur="isSearchFocused = false"
                        type="text"
                        placeholder="What do you want to play?"
                        class="h-12 pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:bg-white/20 focus:border-white/40 rounded-full"
                    />
                    <button
                        v-if="searchQuery"
                        @click="searchQuery = ''"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors rounded-full"
                    >
                        <X class="h-5 w-5 rounded-full" />
                    </button>
                </div>
            </div>

            <!-- Action Bar -->
            <div
                class="flex items-center gap-8 px-8 py-6 bg-black/20 backdrop-blur-sm"
            >
                <button
                    @click="playPlaylist"
                    class="h-14 w-14 rounded-full bg-green-500 text-black flex items-center justify-center hover:scale-105 hover:bg-green-400 transition-all shadow-lg"
                >
                    <Play class="h-7 w-7 fill-current ml-1" />
                </button>
                <button
                    @click="openAddTrackModal"
                    class="h-10 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium flex items-center gap-2 transition-all"
                >
                    <Plus class="h-5 w-5" />
                    Add Track
                </button>
                <button class="text-neutral-400 hover:text-white">
                    <MoreHorizontal class="h-8 w-8" />
                </button>
            </div>

            <!-- Tracks List -->
            <div class="px-8 pb-8">
                <div
                    class="grid grid-cols-[auto_1fr_1fr_auto_auto] gap-4 px-4 py-2 text-sm font-medium text-neutral-400 border-b border-white/10 sticky top-0 bg-neutral-950/95 z-10"
                >
                    <div class="w-8 text-center">#</div>
                    <div>Title</div>
                    <div class="hidden md:block">Date Added</div>
                    <div class="w-12 text-center">
                        <Clock class="h-4 w-4 mx-auto" />
                    </div>
                    <div class="w-8"></div>
                </div>

                <div class="flex flex-col mt-4">
                    <div
                        v-for="(track, index) in filteredTracks"
                        :key="track.id"
                        @click="handleTrackClick(track)"
                        class="group grid grid-cols-[auto_1fr_1fr_auto_auto] gap-4 px-4 py-2 rounded-md hover:bg-white/10 items-center transition-colors cursor-pointer text-sm text-neutral-300 hover:text-white"
                    >
                        <!-- Index / Play Icon -->
                        <div
                            class="w-8 text-center tabular-nums text-neutral-400 group-hover:text-white relative flex items-center justify-center h-10"
                        >
                            <span
                                v-if="currentTrack?.id !== track.id"
                                class="group-hover:hidden"
                                >{{ index + 1 }}</span
                            >
                            <Play
                                v-if="currentTrack?.id !== track.id"
                                class="h-4 w-4 fill-white text-white hidden group-hover:block absolute"
                            />
                            <Pause
                                v-if="
                                    currentTrack?.id === track.id && isPlaying
                                "
                                class="h-4 w-4 fill-green-500 text-green-500 absolute"
                            />
                            <span
                                v-if="
                                    currentTrack?.id === track.id && !isPlaying
                                "
                                class="text-green-500"
                                >{{ index + 1 }}</span
                            >
                        </div>

                        <!-- Title & Artist -->
                        <div class="flex items-center gap-4 min-w-0">
                            <div
                                class="h-10 w-10 bg-neutral-800 shrink-0 overflow-hidden rounded"
                            >
                                <img
                                    v-if="track.image"
                                    :src="`/storage/${track.image}`"
                                    alt=""
                                    class="h-full w-full object-cover"
                                />
                                <div
                                    v-else
                                    class="h-full w-full flex items-center justify-center bg-neutral-700"
                                >
                                    🎵
                                </div>
                            </div>
                            <div class="flex flex-col overflow-hidden">
                                <span class="font-medium text-white truncate">{{
                                    track.title
                                }}</span>
                                <span
                                    class="text-neutral-400 text-xs truncate group-hover:text-neutral-300"
                                    >{{ track.artist }}</span
                                >
                            </div>
                        </div>

                        <!-- Date Added -->
                        <div
                            class="hidden md:flex items-center text-neutral-400 text-xs"
                        >
                            {{ formatDate(track.created_at) }}
                        </div>

                        <!-- Duration -->
                        <div
                            class="w-12 text-center text-xs tabular-nums text-neutral-400"
                        >
                            {{ getTrackDuration(track) }}
                        </div>

                        <!-- Actions Menu -->
                        <div class="w-8 flex items-center justify-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger as-child>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        class="h-8 w-8 text-neutral-400 hover:text-white opacity-30 group-hover:opacity-100 transition-opacity"
                                        @click.stop
                                    >
                                        <MoreHorizontal class="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    class="bg-neutral-800 border-neutral-700 z-50"
                                >
                                    <DropdownMenuItem
                                        @click.stop="editTrack(track, $event)"
                                        class="text-white hover:text-white hover:bg-white/10 cursor-pointer focus:bg-white/10"
                                    >
                                        <Pencil class="h-4 w-4 mr-2" />
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        @click.stop="deleteTrack(track, $event)"
                                        class="text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer focus:bg-red-500/10"
                                    >
                                        <Trash2 class="h-4 w-4 mr-2" />
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AddTrackModal ref="addTrackModalRef" />
        <EditTrackModal ref="editTrackModalRef" />
    </AppLayout>
</template>
