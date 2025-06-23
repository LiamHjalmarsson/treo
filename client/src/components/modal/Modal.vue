<script setup lang="ts">
	const emit = defineEmits(["close"]);
</script>

<template>
	<Teleport to="body">
		<div
			class="absolut inset-0 h-screen w-screen bg-black/50"
			@keypress.esc="emit('close')"
		></div>
	</Teleport>
</template>
