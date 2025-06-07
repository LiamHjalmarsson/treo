<script setup lang="ts">
import { ref, computed } from 'vue'

interface Input {
  modelValue: string
  label?: string
  id?: string
  type?: string
  placeholder?: string
  error?: string
}

defineProps<Input>()

const isFocused = ref(false)

const model = defineModel<string>()

const emit = defineEmits(['update:modelValue'])

const isLabelMoved = computed(() => isFocused.value || !!model.value)
</script>

<template>
  <div>
    <div class="relative">
      <label
        v-if="label"
        :for="id"
        class="absolute left-6 transition-all duration-300 text-gray-800 z-10 cursor-pointer font-medium"
        :class="{
          'top-1/2 -translate-y-1/2': !isLabelMoved,
          'top-0 -translate-y-6 text-sm': isLabelMoved,
        }"
      >
        {{ label }}
      </label>

      <input
        :id="id"
        :type="type || 'text'"
        :placeholder="placeholder"
        v-model="model"
        @focus="isFocused = true"
        @blur="isFocused = false"
        class="w-full bg-white rounded-lg px-6 py-3 outline-none text-gray-800 pr-12"
      />
    </div>
    <p class="text-red-500 text-sm mt-1" v-if="error">
      {{ error }}
    </p>
  </div>
</template>
