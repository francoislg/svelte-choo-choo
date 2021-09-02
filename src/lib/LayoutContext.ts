import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

export interface LayoutContext {
	showLogo: boolean;
	transitionWithTrain: boolean;
}

function createLayoutContextStore() {
	const defaultValue: LayoutContext = { showLogo: true, transitionWithTrain: false };
	const { subscribe, update, set } = writable<LayoutContext>(defaultValue);

	return {
		subscribe,
		showLogo: (showLogo) => update((context) => ({ ...context, showLogo })),
		transitionWithTrain: (transitionWithTrain) => update((context) => ({ ...context, transitionWithTrain })),
		reset: () => set(defaultValue)
	};
}

export const setLayoutContext = (): void => setContext('layout', createLayoutContextStore());
export const getLayoutContext = (): ReturnType<typeof createLayoutContextStore> =>
	getContext('layout');
