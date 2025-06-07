<script setup lang="ts">
import background from '@/assets/images/bg.jpg'
</script>

<template>
  <div class="min-h-screen bg-blue-900 flex items-center justify-center p-10 relative">
    <img
      :src="background"
      class="absolute object-cover object-center inset-0 w-full h-full opacity-80"
    />

    <div
      class="max-w-xl w-full p-10 rounded-2xl relative z-10 backdrop-blur-sm bg-white/60 shadow-lg"
    >
      <h2 class="text-4xl font-bold text-center text-gray-900">Good morning and Welcome</h2>
      <slot />
    </div>
  </div>
</template>
