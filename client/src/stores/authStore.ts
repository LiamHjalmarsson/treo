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
		await api.get("/sanctum/csrf-cookie");

		try {
			await api.post("/api/login", credentials);

			await userStore.fetchUser();

			isAuthenticated.value = true;

			router.push({ name: "home" });
		} catch (error) {
			console.error(error);
		}
	};

	const register = async (credentials: Register) => {
		try {
			await api.post("register", credentials);
			isAuthenticated.value = true;

			router.push({ name: "home" });
		} catch (error) {
			console.error(error);
		}
	};

	const logout = async () => {
		try {
			await api.post("/api/logout");

			isAuthenticated.value = false;

			userStore.clearUser();

			router.push({ name: "login" });
		} catch (error) {
			console.error(error);
		}
	};

	return { isAuthenticated, login, register, logout };
});
