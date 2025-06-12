<script setup lang="ts">
	import TheSidebar from "@/components/layouts/TheSidebar.vue";
	import BaseButton from "@/components/ui/actions/BaseButton.vue";
</script>

<template>
	<nav
		class="w-full bg-slate-800 px-10 py-5 text-white flex justify-between items-center"
	>
		<p class="font-semibold text-2xl">TRIO</p>

		<div>
			<BaseButton> Create </BaseButton>
		</div>
	</nav>

	<div class="flex h-[calc(100vh-85px)]">
		<TheSidebar />

		<main class="flex-1 overflow-auto p-6">
			<RouterView />
		</main>
	</div>
</template>
