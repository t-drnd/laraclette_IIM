<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
      <div class="w-full h-1/2">
        <img class="w-full h-full" :src="`/storage/${track.image}`">
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ track.title }}</div>
        <small class="text-gray-700 text-base">
          {{ track.artist }}
        </small>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Track',
        props: {
            track: Object,
        }
    }
</script>
