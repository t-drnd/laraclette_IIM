<script setup lang="ts">
import InputError from "@/components/InputError.vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useForm } from "@inertiajs/vue3";
import { route } from "ziggy-js";
import { ref, computed, watch } from "vue";

interface Track {
    id: number;
    title: string;
    artist: string;
    image: string | null;
    audio: string | null;
}

const props = defineProps<{
    open?: boolean;
    track?: Track | null;
}>();

const emit = defineEmits<{
    close: [];
}>();

const imagePreview = ref<string | null>(null);
const audioPreview = ref<string | null>(null);

const isEditMode = computed(() => !!props.track);

const form = useForm({
    title: "",
    artist: "",
    image: null as File | null,
    audio: null as File | null,
});

// Pré-remplir le formulaire si en mode édition
watch(
    () => props.track,
    (track) => {
        if (track) {
            form.title = track.title;
            form.artist = track.artist;
            if (track.image) {
                imagePreview.value = `/storage/${track.image}`;
            }
            if (track.audio) {
                audioPreview.value = "Current audio file";
            }
        } else {
            form.reset();
            imagePreview.value = null;
            audioPreview.value = null;
        }
    },
    { immediate: true },
);

function handleImageChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        form.image = target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.value = e.target?.result as string;
        };
        reader.readAsDataURL(target.files[0]);
    }
}

function handleAudioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        const maxSize = 10 * 1024 * 1024; // 10 MB

        if (file.size > maxSize) {
            form.setError(
                "audio",
                `Le fichier audio est trop volumineux. Taille maximale : 10 Mo. Taille actuelle : ${(file.size / 1024 / 1024).toFixed(2)} Mo`,
            );
            target.value = ""; // Reset input
            audioPreview.value = null;
            return;
        }

        form.audio = file;
        audioPreview.value = file.name;
        form.clearErrors("audio");
    }
}

function submit() {
    if (isEditMode.value && props.track) {
        form.put(route("tracks.update", props.track.id), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                form.reset();
                imagePreview.value = null;
                audioPreview.value = null;
                emit("close");
            },
            onError: (errors) => {
                console.error("Erreurs de validation:", errors);
            },
        });
    } else {
        form.post(route("tracks.store"), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                form.reset();
                imagePreview.value = null;
                audioPreview.value = null;
                emit("close");
            },
            onError: (errors) => {
                console.error("Erreurs de validation:", errors);
            },
        });
    }
}

function cancel() {
    form.reset();
    imagePreview.value = null;
    audioPreview.value = null;
    emit("close");
}
</script>

<template>
    <div class="space-y-6">
        <div>
            <h2 class="text-2xl font-bold text-white mb-2">
                {{ isEditMode ? "Edit Track" : "Add New Track" }}
            </h2>
            <p class="text-sm text-neutral-400">All fields are optional</p>
        </div>

        <form @submit.prevent="submit" class="space-y-4">
            <!-- Title -->
            <div class="space-y-2">
                <Label for="title">Title</Label>
                <Input
                    id="title"
                    v-model="form.title"
                    type="text"
                    placeholder="Track title"
                    class="bg-neutral-800 border-neutral-700 text-white"
                />
                <InputError :message="form.errors.title" />
            </div>

            <!-- Artist -->
            <div class="space-y-2">
                <Label for="artist">Artist</Label>
                <Input
                    id="artist"
                    v-model="form.artist"
                    type="text"
                    placeholder="Artist name"
                    class="bg-neutral-800 border-neutral-700 text-white"
                />
                <InputError :message="form.errors.artist" />
            </div>

            <!-- Image -->
            <div class="space-y-2">
                <Label for="image">Cover Image</Label>
                <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    @change="handleImageChange"
                    class="bg-neutral-800 border-neutral-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-400"
                />
                <InputError :message="form.errors.image" />
                <div v-if="imagePreview" class="mt-2">
                    <img
                        :src="imagePreview"
                        alt="Preview"
                        class="h-32 w-32 object-cover rounded"
                    />
                </div>
            </div>

            <!-- Audio -->
            <div class="space-y-2">
                <Label for="audio">Audio File</Label>
                <Input
                    id="audio"
                    type="file"
                    accept="audio/*"
                    @change="handleAudioChange"
                    class="bg-neutral-800 border-neutral-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-400"
                />
                <InputError :message="form.errors.audio" />
                <p
                    v-if="audioPreview && !form.errors.audio"
                    class="text-sm text-neutral-400 mt-1"
                >
                    {{ audioPreview }}
                </p>
                <p
                    v-if="form.audio && !form.errors.audio"
                    class="text-xs text-neutral-500 mt-1"
                >
                    Taille :
                    {{
                        ((form.audio as File).size / 1024 / 1024).toFixed(2)
                    }}
                    Mo
                </p>
            </div>

            <!-- Actions -->
            <div class="flex justify-end gap-3 pt-4">
                <Button
                    type="button"
                    variant="ghost"
                    @click="cancel"
                    class="text-neutral-400 hover:text-white"
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    :disabled="form.processing"
                    class="bg-green-500 hover:bg-green-400 text-black font-semibold"
                >
                    <Spinner v-if="form.processing" class="mr-2" />
                    {{ isEditMode ? "Update Track" : "Add Track" }}
                </Button>
            </div>
        </form>
    </div>
</template>
