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
		} catch (error) {
			console.error(error);
		}
	};

	const register = async (credentials: Register) => {
		try {
			await api.post("register", credentials);
			isAuthenticated.value = true;
		} catch (error) {
			console.error(error);
		}
	};

	const logout = async () => {
		try {
			await api.post("logout");
			isAuthenticated.value = false;
			router.push({ name: "login" });
		} catch (error) {
			console.error(error);
		}
	};

	return { isAuthenticated, login, register, logout };
});
