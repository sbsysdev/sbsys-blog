import styles, {theme} from './configs/styles';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: theme,
    },
    plugins: [styles],
};
