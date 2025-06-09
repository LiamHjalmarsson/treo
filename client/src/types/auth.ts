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
	user: UserResponse;
}

export interface UserResponse {
	username: string;
	email: string;
	avatar?: string;
	first_name?: string;
	last_name?: string;
	last_login_at?: string;
	role: string;
}
