import { ref } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";

export interface Board {
	id: number;
	title: string;
	color?: string;
	background_image?: string;
}

export const useBoardStore = defineStore("board", () => {
	const boards = ref<Board[]>([
		{ id: 1, title: "Home business advertising ideas" },
		{ id: 2, title: "Marketing campaign" },
		{ id: 3, title: "Personal projects" },
	]);

	return { boards };
});
