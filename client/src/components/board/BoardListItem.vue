<template>
	<div
		class="p-5 h-36 flex justify-center items-center border border-gray-300 bg-gray-50 shadow-md flex-1 rounded-xl cursor-pointer hover:bg-indigo-50 hover:shadow-xl transition duration-150"
	>
		<h5 class="text-xl font-semibold">{{ board.title }}</h5>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		board: {
			title: string;
		};
	}>();
</script>
