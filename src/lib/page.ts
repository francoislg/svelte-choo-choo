import { writable } from 'svelte/store';
import { goto } from '$app/navigation';


const NUMBER_OF_PAGES = 5;

export const page = createPage();

function createPage() {
    const {subscribe, set, update} = writable(1);

    return {
        subscribe,
        initialize: (init) => set(init),
        set: (newPage) => {
            goto(`/pages/${newPage}`);
            set(newPage);
        },
        next: () => update(page => {
            const newPage = Math.min(page + 1, NUMBER_OF_PAGES);
            goto(`/pages/${newPage}`);
            return newPage;
        }),
        previous: () => update(page => {
            const newPage = Math.max(page - 1, 1);
            goto(`/pages/${newPage}`);
            return newPage;
        }),
    }
}

export const animationDelay = writable(500);