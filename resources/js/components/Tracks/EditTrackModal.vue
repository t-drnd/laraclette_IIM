<script setup lang="ts">
import {
    Dialog,
    DialogContent,
} from '@/components/ui/dialog';
import TrackForm from '@/components/Tracks/TrackForm.vue';
import { ref } from 'vue';

interface Track {
    id: number;
    title: string;
    artist: string;
    image: string | null;
    audio: string | null;
}

const open = ref(false);
const track = ref<Track | null>(null);

function close() {
    open.value = false;
    track.value = null;
}

function openModal(trackToEdit: Track) {
    track.value = trackToEdit;
    open.value = true;
}

defineExpose({
    open: openModal,
});
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent class="bg-neutral-900 border-neutral-800 max-w-2xl text-white">
            <TrackForm :track="track" @close="close" />
        </DialogContent>
    </Dialog>
</template>




