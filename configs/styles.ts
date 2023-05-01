/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import { ThemeConfig } from 'tailwindcss/types/config';

// Theme
const supportedAppThemeList = ['light', 'dark'];

export default plugin(function ({ addVariant, matchVariant }) {
    // Load app theme as class
    supportedAppThemeList.forEach(appTheme =>
        addVariant(`theme-${appTheme}`, `:is(.theme-${appTheme} &)`)
    );
    matchVariant(`theme`, value => `:is(.theme-${value} &)`);

    // Load app theme as [data-theme='...']
    supportedAppThemeList.forEach(appTheme =>
        addVariant(`data-theme-${appTheme}`, `:is([data-theme='${appTheme}'] &)`)
    );
    matchVariant('data-theme', value => `:is([data-theme='${value}'] &)`);
});

export const theme: Partial<ThemeConfig> = {
    colors: {
        primary: {
            '50': '#b8d9f1',
            '100': '#8dc2e8',
            '200': '#7ebbe6',
            '300': '#70b3e3',
            '400': '#53a4dd',
            '500': '#3895d8',
            '600': '#2681c1',
            '700': '#206ba1',
            '800': '#1d6191',
            '900': '#195681',
        },
    },
    screens: {
        '6xs': '320px',
        '5xs': '384px',
        '4xs': '448px',
        '3xs': '512px',
        '2xs': '576px',
        xs: '640px',
        sm: '704px',
        md: '768px',
        lg: '896px',
        xl: '1024px',
        '2xl': '1152px',
        '3xl': '1280px',
        '4xl': '1408px',
        '5xl': '1536px',
        '6xl': '1664px',
    },
};
