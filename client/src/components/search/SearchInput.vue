<script setup lang="ts">
	import { ref } from "vue";
	import { PhMagnifyingGlass } from "@phosphor-icons/vue";

	const isOpen = ref(false);
	const search = ref("");

	function handleBlur() {
		if (!search.value) {
			isOpen.value = false;
		}
	}
</script>

<template>
	<div class="relative w-fit">
		<label
			for="search"
			class="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center"
		>
			<PhMagnifyingGlass :size="20" class="font-semibold text-gray-700" />
		</label>

		<input
			ref="inputRef"
			id="search"
			@focus="isOpen = true"
			@blur="handleBlur"
			type="text"
			class="transition-all duration-300 ease-in-out border bg-white text-gray-700 h-11 pl-5 rounded-full outline-none"
			:class="isOpen ? 'w-96' : 'w-10'"
		/>
	</div>
</template>
