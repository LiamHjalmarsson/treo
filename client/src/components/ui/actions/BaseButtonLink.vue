<script setup lang="ts">
	import type { Variant } from "@/types/enums";

	interface BaseLink {
		label: string;
		to: string | object;
		variant?: Variant;
		disabled?: boolean;
	}

	defineProps<BaseLink>();
</script>

<template>
	<li>
		<RouterLink
			:to="to"
			class="flex items-center py-2 px-5 rounded-md space-x-5 hover:bg-indigo-400"
		>
			<slot />

			<span class="text-lg">
				{{ label }}
			</span>
		</RouterLink>
	</li>
</template>
