<script setup lang="ts">
	import TheNavbar from "@/components/layouts/TheNavbar.vue";
	import TheSidebar from "@/components/layouts/TheSidebar.vue";
</script>

<template>
	<TheNavbar />

	<div class="flex h-[calc(100vh-85px)]">
		<TheSidebar />

		<main class="flex-1 overflow-auto p-20">
			<RouterView />
		</main>
	</div>
</template>
