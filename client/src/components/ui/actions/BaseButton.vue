<script setup lang="ts">
	import type { ButtonType, Variant } from "@/types/ui";

	interface Button {
		type?: ButtonType;
		variant?: Variant;
		loading?: boolean;
		disabled?: boolean;
	}

	withDefaults(defineProps<Button>(), {
		type: "button",
		variant: "primary",
		loading: false,
		disabled: false,
	});
</script>

<template>
	<button
		:type="type"
		:disabled="disabled || loading"
		:class="[
			'w-full font-bold text-lg cursor-pointer rounded-lg px-5 py-2 bg-indigo-500 text-white duration-200 transition-colors hover:bg-indigo-600',
		]"
	>
		<slot />
	</button>
</template>
