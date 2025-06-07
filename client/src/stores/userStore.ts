import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
	const user = ref(null);

	const setUser = (payload) => {
		user.value = payload;
	};

	return { user, setUser };
});
