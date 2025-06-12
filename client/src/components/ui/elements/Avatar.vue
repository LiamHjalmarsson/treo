<script setup lang="ts">
	import background from "@/assets/images/bg.jpg";
	import { useUserStore } from "@/stores/userStore";

	const userStore = useUserStore();
</script>

<template>
	<div class="relative inline-block">
		<img
			:src="userStore.user?.avatar || background"
			alt=""
			class="w-24 h-24 rounded-full mx-auto"
		/>

		<p class="text-center font-semibold mt-5 capitalize">
			{{ userStore.user?.username || "--" }}
		</p>
	</div>
</template>
