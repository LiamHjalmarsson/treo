import { ref } from "vue";
import { defineStore } from "pinia";
import type { UserData, UserSettings } from "@/types/auth";
import api from "@/plugins/axios";

export const useUserStore = defineStore("user", () => {
	const user = ref<UserData | null>(null);

	const settings = ref<UserSettings>();

	const fetchUser = async () => {
		try {
			const { data } = await api.get("/api/user");

			user.value = data.data as UserData;
		} catch (error) { }
	};

	const clearUser = () => {
		user.value = null;
	};

	return { user, fetchUser, clearUser };
});
