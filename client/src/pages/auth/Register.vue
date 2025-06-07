<script setup lang="ts">
	import AuthForm from "@/components/auth/AuthForm.vue";
	import AuthLayout from "@/components/auth/AuthLayout.vue";
	import BaseButton from "@/components/ui/actions/BaseButton.vue";
	import BaseLink from "@/components/ui/actions/BaseLink.vue";
	import BaseInput from "@/components/ui/form/BaseInput.vue";
	import { useAuthStore, Register } from "@/stores/AuthStore";
	import { ref } from "vue";

	const data = ref<Register>({
		username: "",
		email: "",
		password: "",
		password_confirmation: "",
	});

	const authStore = useAuthStore();

	const submitRegister = () => {
		authStore.register(data.value);
	};
</script>

<template>
	<AuthLayout>
		<AuthForm @submit="submitRegister">
			<BaseInput
				v-model="data.username"
				id="username"
				type="text"
				label="Username"
			/>
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
			<BaseInput
				v-model="data.password_confirmation"
				id="password_confirmation"
				type="password"
				label="Confirm password"
			/>

			<BaseButton type="submit"> Register </BaseButton>

			<div class="text-center text-gray-900">
				<p class="font-semibold">Already have a account ?</p>
				<BaseLink :to="{ name: 'login' }" label="Login!" />
			</div>
		</AuthForm>
	</AuthLayout>
</template>
