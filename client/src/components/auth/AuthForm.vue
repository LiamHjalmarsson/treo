<script setup lang="ts">
	const emit = defineEmits<{
		(e: 'submit'): void;
	}>();

	const handleSubmit = () => {
		emit('submit');
	};
</script>

<template>
	<form class="mt-15 space-y-10" @submit.prevent="handleSubmit">
		<slot />
	</form>
</template>
