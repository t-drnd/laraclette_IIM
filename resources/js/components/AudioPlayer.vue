<script setup lang="ts">
import { useAudioPlayer } from "@/composables/useAudioPlayer";
import { Button } from "@/components/ui/button";
import {
    Pause,
    Play,
    SkipBack,
    SkipForward,
    Volume2,
    VolumeX,
    Shuffle,
    List,
} from "lucide-vue-next";
import { computed, onMounted, onUnmounted, ref } from "vue";

const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isShuffle,
    queue,
    togglePlayPause,
    setCurrentTime,
    setVolume,
    formatTime,
    nextTrack,
    previousTrack,
    toggleShuffle,
    setTrack,
} = useAudioPlayer();

const showQueue = ref(false);

const progressBarRef = ref<HTMLDivElement | null>(null);
const volumeBarRef = ref<HTMLDivElement | null>(null);
const isDraggingProgress = ref(false);
const isDraggingVolume = ref(false);
const hoverProgress = ref<number | null>(null);

const progressPercentage = computed(() => {
    if (duration.value === 0) return 0;
    return (currentTime.value / duration.value) * 100;
});

const hoverProgressPercentage = computed(() => {
    if (hoverProgress.value === null || duration.value === 0) return null;
    return (hoverProgress.value / duration.value) * 100;
});

const displayedTime = computed(() => {
    return hoverProgress.value ?? currentTime.value;
});

const volumePercentage = computed(() => volume.value * 100);

function handleProgressClick(event: MouseEvent) {
    if (!progressBarRef.value || duration.value === 0 || !currentTrack.value)
        return;

    const rect = progressBarRef.value.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newTime = percentage * duration.value;

    if (newTime >= 0 && newTime <= duration.value) {
        setCurrentTime(newTime);
    }
}

function handleProgressMouseMove(event: MouseEvent) {
    if (!progressBarRef.value || duration.value === 0) {
        hoverProgress.value = null;
        return;
    }
    const rect = progressBarRef.value.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    hoverProgress.value = percentage * duration.value;
}

function handleProgressMouseLeave() {
    hoverProgress.value = null;
}

function handleVolumeClick(event: MouseEvent) {
    if (!volumeBarRef.value) return;
    const rect = volumeBarRef.value.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    setVolume(percentage);
}

function toggleMute() {
    if (volume.value > 0) {
        setVolume(0);
    } else {
        setVolume(1);
    }
}
</script>

<template>
    <div
        v-if="currentTrack"
        class="fixed bottom-0 left-0 right-0 h-24 bg-neutral-900 border-t border-neutral-800 z-50 flex items-center px-4 gap-4"
    >
        <!-- Track Info -->
        <div
            class="flex items-center gap-4 min-w-[200px] max-w-[200px] flex-shrink-0"
        >
            <div
                class="h-14 w-14 bg-neutral-800 shrink-0 overflow-hidden rounded"
            >
                <img
                    v-if="currentTrack.image"
                    :src="`/storage/${currentTrack.image}`"
                    :alt="currentTrack.title"
                    class="h-full w-full object-cover"
                />
                <div
                    v-else
                    class="h-full w-full flex items-center justify-center bg-neutral-700 text-2xl"
                >
                    ♫
                </div>
            </div>
            <div class="flex flex-col overflow-hidden min-w-0 flex-1">
                <span class="text-sm font-medium text-white truncate">{{
                    currentTrack.title
                }}</span>
                <span class="text-xs text-neutral-400 truncate">{{
                    currentTrack.artist
                }}</span>
            </div>
        </div>

        <!-- Controls -->
        <div
            class="flex-1 flex flex-col items-center gap-2 min-w-0 flex-shrink"
        >
            <!-- Playback Controls -->
            <div class="flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    class="h-8 w-8 text-neutral-400 hover:text-white"
                    :class="{ 'text-green-500': isShuffle }"
                    @click="toggleShuffle"
                >
                    <Shuffle class="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    class="h-8 w-8 text-neutral-400 hover:text-white"
                    @click="previousTrack"
                >
                    <SkipBack class="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    class="h-10 w-10 text-white hover:scale-110"
                    @click="togglePlayPause"
                >
                    <Play
                        v-if="!isPlaying"
                        class="h-5 w-5 fill-current ml-0.5"
                    />
                    <Pause v-else class="h-5 w-5 fill-current" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    class="h-8 w-8 text-neutral-400 hover:text-white"
                    @click="nextTrack"
                >
                    <SkipForward class="h-4 w-4" />
                </Button>
            </div>

            <!-- Progress Bar -->
            <div class="flex items-center gap-2 w-full max-w-[600px]">
                <span
                    class="text-xs text-neutral-400 tabular-nums min-w-[40px] text-right"
                >
                    {{ formatTime(displayedTime) }}
                </span>
                <div
                    ref="progressBarRef"
                    class="flex-1 h-2 bg-neutral-700 rounded-full cursor-pointer group relative"
                    @click="handleProgressClick"
                    @mousemove="handleProgressMouseMove"
                    @mouseleave="handleProgressMouseLeave"
                >
                    <!-- Background progress -->
                    <div
                        class="h-full bg-white rounded-full transition-all relative"
                        :style="{ width: `${progressPercentage}%` }"
                    >
                        <!-- Progress dot -->
                        <div
                            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-3 w-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                        ></div>
                    </div>
                    <!-- Hover indicator -->
                    <div
                        v-if="hoverProgressPercentage !== null"
                        class="absolute top-0 h-full bg-neutral-500 rounded-full opacity-50 pointer-events-none transition-opacity"
                        :style="{ width: `${hoverProgressPercentage}%` }"
                    >
                        <!-- Hover dot -->
                        <div
                            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-3 w-3 bg-white rounded-full opacity-70 shadow-lg"
                        ></div>
                    </div>
                </div>
                <span
                    class="text-xs text-neutral-400 tabular-nums min-w-[40px]"
                >
                    {{ formatTime(duration) }}
                </span>
            </div>
        </div>

        <!-- Volume Control -->
        <div class="flex items-center gap-2 min-w-[120px]">
            <Button
                variant="ghost"
                size="icon"
                class="h-8 w-8 text-neutral-400 hover:text-white"
                @click="toggleMute"
            >
                <VolumeX v-if="volume === 0" class="h-4 w-4" />
                <Volume2 v-else class="h-4 w-4" />
            </Button>
            <div
                ref="volumeBarRef"
                class="flex-1 h-1 bg-neutral-700 rounded-full cursor-pointer"
                @click="handleVolumeClick"
            >
                <div
                    class="h-full bg-white rounded-full transition-all"
                    :style="{ width: `${volumePercentage}%` }"
                ></div>
            </div>
        </div>

        <!-- Queue Button -->
        <div class="relative">
            <Button
                variant="ghost"
                size="icon"
                class="h-8 w-8 text-neutral-400 hover:text-white"
                @click="showQueue = !showQueue"
            >
                <List class="h-4 w-4" />
            </Button>

            <!-- Queue Panel -->
            <div
                v-if="showQueue"
                class="absolute bottom-full right-0 mb-2 w-80 max-h-96 bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl overflow-hidden z-50"
            >
                <div class="p-4 border-b border-neutral-700">
                    <h3 class="text-white font-semibold text-sm">
                        Next in queue
                    </h3>
                </div>
                <div class="overflow-y-auto max-h-80">
                    <div
                        v-for="(track, index) in queue"
                        :key="track.id"
                        class="flex items-center gap-3 px-4 py-2 hover:bg-neutral-700/50 cursor-pointer transition-colors"
                        @click="
                            setTrack(track);
                            showQueue = false;
                        "
                    >
                        <div
                            class="h-10 w-10 bg-neutral-700 shrink-0 overflow-hidden rounded"
                        >
                            <img
                                v-if="track.image"
                                :src="`/storage/${track.image}`"
                                :alt="track.title"
                                class="h-full w-full object-cover"
                            />
                            <div
                                v-else
                                class="h-full w-full flex items-center justify-center text-lg"
                            >
                                ♫
                            </div>
                        </div>
                        <div
                            class="flex flex-col overflow-hidden min-w-0 flex-1"
                        >
                            <span
                                class="text-sm font-medium text-white truncate"
                                >{{ track.title }}</span
                            >
                            <span class="text-xs text-neutral-400 truncate">{{
                                track.artist
                            }}</span>
                        </div>
                        <span class="text-xs text-neutral-500">{{
                            index + 1
                        }}</span>
                    </div>
                    <div
                        v-if="queue.length === 0"
                        class="px-4 py-8 text-center text-neutral-400 text-sm"
                    >
                        No tracks in queue
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
