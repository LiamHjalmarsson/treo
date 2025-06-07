import { ref } from "vue";
import { defineStore } from "pinia";
import api from "@/plugins/axios";

export const useUserStore = defineStore("user", () => {
	const user = ref(null);

	const fetchUser = async () => {
		try {
			const response = await api.get("/api/user");

			console.log(response);

			user.value = response.data;
		} catch (error) {}
	};

	return { user, fetchUser };
});
