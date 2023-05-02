import type { Handle } from '@sveltejs/kit';

export const handle = (({ event, resolve }) => {
    event.locals.lang = 'en';
    event.locals.theme = 'light';

    return resolve(event, {
        transformPageChunk: ({ html }) =>
            html
                .replace('%lang%', event.locals.lang)
                .replace('%theme%', event.locals.theme)
                .replace('%theme%', event.locals.theme),
    });
}) satisfies Handle;
