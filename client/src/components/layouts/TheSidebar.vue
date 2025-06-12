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
		class="bg-slate-700 text-white w-64 h-full px-10 py-10 flex flex-col"
	>
		<Avatar />
		<nav class="flex flex-col space-y-10 flex-1 mt-10">
			<ul class="space-y-10 flex-1">
				<BaseButtonLink label="Boards" :to="{ name: 'home' }">
					<PhCalendar size="24" />
				</BaseButtonLink>

				<BaseButtonLink label="Members" :to="{ name: 'home' }">
					<PhCalendar size="24" />
				</BaseButtonLink>

				<BaseButtonLink label="Settings" :to="{ name: 'home' }">
					<PhCalendar size="24" />
				</BaseButtonLink>

				<BaseButtonLink label="Table" :to="{ name: 'home' }">
					<PhUserCircle size="24" />
				</BaseButtonLink>

				<BaseButtonLink label="Calendar" :to="{ name: 'home' }">
					<PhListBullets size="24" />
				</BaseButtonLink>
			</ul>

			<BaseButtonIcon label="Logga ut" @onClick="authStore.logout">
				<PhSignOut :size="24" />
			</BaseButtonIcon>
		</nav>
	</aside>
</template>
