<script setup lang="ts">
	import type { ButtonType, Variant } from "@/types/enums";

	interface BaseButton {
		label: string;
		variant?: Variant;
		disabled?: boolean;
		type?: ButtonType;
	}

	defineProps<BaseButton>();

	const emit = defineEmits(["onClick"]);
</script>

<template>
	<button
		class="flex items-center py-2 px-5 rounded-md space-x-5 hover:bg-indigo-400 cursor-pointer"
		:type="type || 'button'"
		@click="emit('onClick')"
	>
		<slot />

		<span class="text-lg">
			{{ label }}
		</span>
	</button>
</template>
