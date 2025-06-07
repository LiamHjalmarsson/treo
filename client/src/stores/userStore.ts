import { ref } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";

export const useUserStore = defineStore("user", () => {
	const user = ref(null);

	const fetchUser = async () => {
		try {
			const { data } = await api.get("/api/user");

			user.value = data;
		} catch (error) {}
	};

	return { user, fetchUser };
});
