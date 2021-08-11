import { writable } from "svelte/store"

export type TransitionTypes = 'fly' | 'fade';

export const transition = writable<TransitionTypes>('fly');