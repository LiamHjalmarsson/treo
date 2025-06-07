<script setup lang="ts">
	import AuthForm from "@/components/auth/AuthForm.vue";
	import AuthLayout from "@/components/auth/AuthLayout.vue";
	import BaseButton from "@/components/ui/actions/BaseButton.vue";
	import BaseLink from "@/components/ui/actions/BaseLink.vue";
	import BaseInput from "@/components/ui/form/BaseInput.vue";
	import { useAuthStore, Login } from "@/stores/AuthStore";
	import { ref } from "vue";

	const data = ref<Login>({
		email: "",
		password: "",
	});

	const authStore = useAuthStore();

	const submitLogin = () => {
		authStore.login(data.value);
	};
</script>

<template>
	<AuthLayout>
		<AuthForm @submit="submitLogin">
			<BaseInput
				v-model="data.email"
				id="email"
				type="email"
				label="Email"
			/>
			<BaseInput
				v-model="data.password"
				id="password"
				type="password"
				label="Password"
			/>

			<div class="flex justify-end px-4">
				<BaseLink :to="{ name: 'login' }" label="Forgot password ?" />
			</div>

			<BaseButton type="submit"> Log in </BaseButton>

			<div class="text-center text-gray-900">
				<p class="font-semibold">Dont have a account ?</p>
				<BaseLink :to="{ name: 'register' }" label="Register!" />
			</div>
		</AuthForm>
	</AuthLayout>
</template>
