<template>
	<div class="mt-5 grid grid-cols-4 gap-6">
		<template v-for="(board, index) in boardStore.boards" :key="board.id">
			<div
				:ref="(el) => (draggables[index] = el)"
				draggable="true"
				@dragstart="(e) => onDragStart(e, index)"
				@dragenter="() => onDragEnter(index)"
				@dragover.prevent
				@dragend="onDragEnd"
				@drop="onDrop"
			>
				<BoardListItem :board="board" />
			</div>
		</template>

		<BoardListAdd />
	</div>
</template>

<script setup lang="ts">
	import { ref, nextTick } from "vue";
	import BoardListItem from "./BoardListItem.vue";
	import BoardListAdd from "./BoardListAdd.vue";
	import { useBoardStore } from "@/stores/boardStore";

	const boardStore = useBoardStore();

	const draggingIndex = ref<number | null>(null);
	const draggables = ref<HTMLElement[]>([]);

	const onDragStart = async (event: DragEvent, index: number) => {
		draggingIndex.value = index;

		await nextTick();

		const el = draggables.value[index];

		if (event.dataTransfer && el) {
			// Clone the element visually for the drag image
			const clone = el.cloneNode(true) as HTMLElement;

			clone.style.position = "absolute";
			clone.style.pointerEvents = "none";
			clone.style.borderRadius = "12px";
			clone.style.zIndex = "1000";

			document.body.appendChild(clone);

			event.dataTransfer.setDragImage(
				clone,
				clone.offsetWidth / 2,
				clone.offsetHeight / 2,
			);

			setTimeout(() => {
				document.body.removeChild(clone);
			}, 0);
		}
	};

	const onDragEnter = (index: number) => {
		if (draggingIndex.value === null || draggingIndex.value === index)
			return;

		const temp = [...boardStore.boards];
		const item = temp.splice(draggingIndex.value, 1)[0];
		temp.splice(index, 0, item);

		boardStore.boards = temp;
		draggingIndex.value = index;
	};

	const onDrop = () => {
		draggingIndex.value = null;
	};

	const onDragEnd = () => {
		draggingIndex.value = null;
	};
</script>
