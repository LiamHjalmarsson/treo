<script setup lang="ts">
defineProps<{
  to: object
  label: string
}>()
</script>

<template>
  <RouterLink :to="to" class="text-indigo-600 hover:underline font-medium">
    {{ label }}
  </RouterLink>
</template>
