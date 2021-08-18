import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

export interface LayoutContext {
	showLogo: boolean;
}

function createLayoutContextStore() {
	const defaultValue: LayoutContext = { showLogo: true };
	const { subscribe, update, set } = writable<LayoutContext>(defaultValue);

	return {
		subscribe,
		showLogo: (showLogo) => update((context) => ({ ...context, showLogo })),
		reset: () => set(defaultValue)
	};
}

export const setLayoutContext = (): void => setContext('layout', createLayoutContextStore());
export const getLayoutContext = (): ReturnType<typeof createLayoutContextStore> =>
	getContext('layout');
