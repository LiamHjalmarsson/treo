import { ref } from "vue";
import { defineStore } from "pinia";
import type { UserResponse } from "@/types/auth";
import api from "@/plugins/axios";

export const useUserStore = defineStore("user", () => {
	const user = ref<UserResponse | null>(null);

	const fetchUser = async () => {
		try {
			const { data } = await api.get<UserResponse>("/api/user");

			user.value = data;
		} catch (error) {}
	};

	return { user, fetchUser };
});
