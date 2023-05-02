// See https://kit.svelte.dev/docs/types#app

import type { AppLang } from '$lib/app-lang';
import type { AppTheme } from '$lib/app-theme';

// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            lang: AppLang;
            theme: AppTheme;
        }
        // interface PageData {}
        // interface Platform {}
    }
}

export {};
