<script setup lang="ts">
	import BaseButton from "@/components/ui/actions/BaseButton.vue";
	import SearchInput from "@/components/search/SearchInput.vue";
</script>

<template>
	<nav
		class="w-full bg-slate-800 px-10 py-5 text-white flex justify-between items-center"
	>
		<p class="font-semibold text-2xl">TRIO</p>

		<div class="flex space-x-10 items-center">
			<SearchInput />
			<BaseButton> Create </BaseButton>
		</div>
	</nav>
</template>
