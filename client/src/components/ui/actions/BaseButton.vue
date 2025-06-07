<script setup lang="ts">
type ButtonType = 'button' | 'submit' | 'reset'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline'

interface Button {
  type?: ButtonType
  variant?: ButtonVariant
  loading?: boolean
  disabled?: boolean
}

withDefaults(defineProps<Button>(), {
  type: 'button',
  variant: 'primary',
  loading: false,
  disabled: false,
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'w-full font-bold text-lg cursor-pointer rounded-lg py-4 bg-indigo-500 text-white duration-200 transition-colors hover:bg-indigo-600',
    ]"
  >
    <slot />
  </button>
</template>
