import { writable } from "svelte/store";

export const tokenStore = writable(null);
export const refreshTokenStore = writable(null);
export const userStore = writable(null);
