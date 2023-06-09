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
        secondary: {
            '50': '#fdcbb7',
            '100': '#fca380',
            '200': '#fa7c4a',
            '300': '#fa6f38',
            '400': '#fa5514',
            '500': '#fa5514',
            '600': '#f54a06',
            '700': '#e24406',
            '800': '#d13f05',
            '900': '#bf3a05',
        },
        dark: {
            '50': '#eeeeee',
            '100': '#cdcdcd',
            '200': '#8b8b8b',
            '300': '#7a7a7a',
            '400': '#595959',
            '500': '#494949',
            '600': '#383838',
            '700': '#282828',
            '800': '#161616',
            '900': '#000000',
        },
        light: {
            '50': '#ffffff',
            '100': '#f8f8f8',
            '200': '#eeeeee',
            '300': '#e5e5e5',
            '400': '#e0e0e0',
            '500': '#c0c0c0',
            '600': '#909090',
            '700': '#848484',
            '800': '#666666',
            '900': '#4c4c4c',
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
    fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
    },
};
