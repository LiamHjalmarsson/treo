<script setup lang="ts">
	import BaseButton from "../ui/actions/BaseButton.vue";
</script>

<template>
	<header class="flex justify-between items-center">
		<h1 class="text-3xl font-bold">My Boards</h1>
		<div class="flex items-center space-x-5">
			<BaseButton variant="ternary"> Settings </BaseButton>
		</div>
	</header>
</template>
