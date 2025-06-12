import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useAuthStore } from "@/stores/AuthStore";
import { createRouter, createWebHistory } from "vue-router";

const authenticated = async (to, from, next) => {
	const authStore = useAuthStore();
	try {
		if (authStore.isAuthenticated) {
			next();
		} else {
			next({ name: "login" });
		}
	} catch (error) {
		next({ name: "login" });
	}
};

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: DefaultLayout,
			children: [
				{
					path: "",
					name: "home",
					component: () => import("@/pages/Dashboard.vue"),
				},
			],
			beforeEnter: authenticated,
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/pages/auth/Login.vue"),
		},
		{
			path: "/register",
			name: "register",
			component: () => import("@/pages/auth/Register.vue"),
		},
	],
});

router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();

	const isAuthPage = to.name === "login" || to.name === "register";

	if (authStore.isAuthenticated && isAuthPage) {
		next({ name: "home" });
	} else {
		next();
	}
});

export default router;
