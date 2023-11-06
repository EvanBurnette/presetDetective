// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import base from '$app/paths';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: `${base}404.html`
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;