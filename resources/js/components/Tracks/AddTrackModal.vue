<script setup lang="ts">
import {
    Dialog,
    DialogContent,
} from '@/components/ui/dialog';
import TrackForm from '@/components/Tracks/TrackForm.vue';
import { ref } from 'vue';

const open = ref(false);

function close() {
    open.value = false;
}

function openModal() {
    open.value = true;
}

defineExpose({
    open: openModal,
});
</script>

<template>
    <Dialog v-model:open="open">
        <DialogContent class="bg-neutral-900 border-neutral-800 max-w-2xl text-white">
            <TrackForm @close="close" />
        </DialogContent>
    </Dialog>
</template>

