<script setup lang="ts">
	import {
		PhCalendar,
		PhUserCircle,
		PhListBullets,
		PhSignOut,
	} from "@phosphor-icons/vue";
	import BaseButtonLink from "@/components/ui/actions/BaseButtonLink.vue";
	import BaseButtonIcon from "@/components/ui/actions/BaseButtonIcon.vue";
	import Avatar from "@/components/ui/elements/Avatar.vue";
	import { useAuthStore } from "@/stores/AuthStore";

	const authStore = useAuthStore();
</script>

<template>
	<aside
		class="bg-indigo-500 text-white fixed md:relative h-screen w-64 px-10 py-10 flex flex-col transition-all duration-300 ease-in-out z-50"
	>
		<Avatar />
		<nav class="flex flex-col space-y-10 flex-1 mt-10">
			<ul class="space-y-10 flex-1">
				<BaseButtonLink label="Dashboard" :to="{ name: 'home' }">
					<PhCalendar size="24" />
				</BaseButtonLink>

				<BaseButtonLink label="Användare" :to="{ name: 'home' }">
					<PhUserCircle size="24" />
				</BaseButtonLink>

				<BaseButtonLink label="Överblick" :to="{ name: 'home' }">
					<PhListBullets size="24" />
				</BaseButtonLink>
			</ul>

			<BaseButtonIcon label="Logga ut" @onClick="authStore.logout">
				<PhSignOut :size="24" />
			</BaseButtonIcon>
		</nav>
	</aside>
</template>
