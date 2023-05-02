export type AppTheme = 'dark' | 'light' | 'os';

export function loadAppTheme() {
    if (localStorage == undefined || document == undefined || window == undefined) return;

    let theme: AppTheme = (localStorage.getItem('theme') as AppTheme) ?? 'os';

    if (theme == 'os') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
        else theme = 'light';
    }

    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export function setAppTheme(theme: AppTheme) {
    if (localStorage == undefined) return;

    if (theme == 'os') localStorage.removeItem('theme');
    else localStorage.setItem('theme', theme);

    loadAppTheme();
}
