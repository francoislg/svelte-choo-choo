import { writable } from 'svelte/store';
import { goto } from '$app/navigation';

const QuickStart = [
    "SvelteQuickStart/SplashScreen",
    "SvelteQuickStart/StolenBoxes",
    "SvelteQuickStart/KeyConcepts",
];

const TwoWayBinding = [
    "TwoWayBinding/SplashScreen",
    "TwoWayBinding/React",
    "TwoWayBinding/Svelte",
    "TwoWayBinding/Components",
    "TwoWayBinding/IRLExample",
];

const Stores = [
    "Stores/SplashScreen",
    "Stores/SimpleRedux",
    "Stores/React",
    "Stores/ReactPart2",
    "Stores/Svelte",
    "Stores/SvelteExample",
    "Stores/IRLExampleHistory",
    "Stores/IRLExamplePopup",
];

const Await = [
    "Await/SplashScreen",
    "Await/React",
    "Await/Svelte",
];

const Animations = [
    "Animations/SplashScreen",
    "Animations/SveltePlayground",
    "Animations/Svelte",
];

const Slots = [
    "Slots/SplashScreen",
    "Slots/React",
    "Slots/Svelte",
    "Slots/SvelteSlots",
    "Slots/IRLExampleCard",
];

const QOL = [
    "QOL/SplashScreen",
    "QOL/Class",
    "QOL/Context",
    "QOL/SVG",
];

const SvelteKit = [
    "SvelteKit/SplashScreen",
];

const PAGES = [
    "ReactLogo",
    "SvelteLogo",
    "Moi",
    "Subjects",
    ...QuickStart,
    ...TwoWayBinding,
    ...Stores,
    ...Await,
    ...Animations,
    ...Slots,
    ...QOL,
    ...SvelteKit,
    "MissingStuff",
    "NextSteps",
    "Thanks",
];

export const NUMBER_OF_PAGES = PAGES.length - 1;
export const page = createPage();

function createPage() {
    const {subscribe, set, update} = writable(0);

    return {
        subscribe,
        initialize: (init: string) => set(PAGES.indexOf(init)),
        set: (newPage) => {
            goto(`/pages/${PAGES[newPage]}`);
            set(newPage);
        },
        next: () => update(page => {
            const newPage = Math.min(page + 1, NUMBER_OF_PAGES);
            goto(`/pages/${PAGES[newPage]}`);
            return newPage;
        }),
        previous: () => update(page => {
            const newPage = Math.max(page - 1, 0);
            goto(`/pages/${PAGES[newPage]}`);
            return newPage;
        }),
    }
}

export const animationDelay = writable(500);