import type { Theme } from "./ui";

export interface Login {
	email: string;
	password: string;
}

export interface Register {
	username: string;
	email: string;
	password: string;
	password_confirmation: string;
}

export interface AuthResponse {
	token: string;
	user: UserData;
}

export interface UserData {
	username: string;
	email: string;
	avatar?: string;
	first_name?: string;
	last_name?: string;
	last_login_at?: Date;
	role: Role;
}

export type Role = "guest" | "member" | "admin";

export interface UserSettings {
	theme: Theme,
	lang: string,
	notifications: boolean
}