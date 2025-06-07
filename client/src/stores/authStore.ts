import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";

interface Login {
  email: string;
  password: string;
}

interface Signup {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);

  const login = async (credentials: Login) => {
    await axios.get("/sanctum/csrf-cookie");

    try {
      const { data } = await axios.post("api/login", credentials);

      router.push({ name: "home" });
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (credentials: Signup) => {
    await axios.get("/sanctum/csrf-cookie");

    try {
      const { data } = await axios.post("api/signup", credentials);

      router.push({ name: "home" });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    await axios.post("api/logout");

    router.push({ name: "login" });
  };

  return { isAuthenticated, login, register, logout };
});
