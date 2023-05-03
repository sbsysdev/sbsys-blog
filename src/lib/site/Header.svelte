<script lang="ts">
    import { mdiMoonWaningCrescent, mdiSunAngle } from '@mdi/js';

    import { page } from '$app/stores';

    import { Switch } from '$lib/components';
    import { classNames } from '$lib/utils';

    import Logo from './Logo.svelte';

    let hash = $page.url.hash;

    const navigation: { hash: string; show: string }[] = [
        {
            hash: '#home',
            show: 'Home',
        },
        {
            hash: '#about',
            show: 'About me',
        },
        {
            hash: '#projects',
            show: 'Projects',
        },
        {
            hash: '#skills',
            show: 'Skills',
        },
        {
            hash: '#certificates',
            show: 'Certificates',
        },
    ];

    let selectedLang: string = 'en';
    function selectLang(lang: string) {
        selectedLang = lang;
    }

    let selectedTheme = 'dark';
    function selectTheme(theme: string) {
        selectedTheme = theme;
    }
</script>

<svelte:window
    on:hashchange={() => {
        hash = window.location.hash;
    }}
/>

<header class="flex flex-row p-4 gap-8 items-center absolute top-0 left-0 right-0">
    <div class="flex flex-row items-center gap-2">
        <i class="flex justify-center items-center text-3xl">
            <Logo />
        </i>

        <h2 class="text-2xl font-semibold">Steven</h2>
    </div>

    <nav class="flex-grow flex flex-row justify-center gap-8 lg:gap-12 2xl:gap-16">
        {#each navigation as item}
            <a
                href={item.hash}
                class={classNames(
                    'font-medium',
                    item.hash === hash && 'font-semibold text-secondary-600'
                )}
            >
                {item.show}
            </a>
        {/each}
    </nav>

    <div class="flex flex-col gap-2">
        <Switch
            options={[
                { value: 'en', show: 'EN' },
                { value: 'es', show: 'ES' },
            ]}
            selected={selectedLang}
            selectOption={selectLang}
        />

        <Switch
            options={[
                { value: 'light', show: mdiSunAngle, type: 'icon' },
                { value: 'dark', show: mdiMoonWaningCrescent, type: 'icon' },
            ]}
            selected={selectedTheme}
            selectOption={selectTheme}
        />
    </div>
</header>
