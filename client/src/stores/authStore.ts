import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import type { Login, Register } from "@/types/auth";
import api from "@/plugins/axios";
import { useUserStore } from "./userStore";

export const useAuthStore = defineStore("auth", () => {
	const isAuthenticated = ref(false);

	const userStore = useUserStore();

	const login = async (credentials: Login) => {
		try {
			const { data } = await api.post("api/login", credentials);

			setAuthToken(data.token);

			await userStore.fetchUser();

			// router.push({ name: "home" });
		} catch (error) {
			console.error(error);
		}
	};

	const register = async (credentials: Register) => {
		try {
			const { data } = await api.post("api/register", credentials);

			setAuthToken(data.token);

			await userStore.fetchUser();

			router.push({ name: "home" });
		} catch (error) {
			console.error(error);
		}
	};

	const logout = async () => {
		await api.post("api/logout");

		router.push({ name: "login" });
	};

	const setAuthToken = (token: string | null) => {
		if (token) {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
		} else {
			delete api.defaults.headers.common["Authorization"];
		}
	};

	return { isAuthenticated, login, register, logout };
});
