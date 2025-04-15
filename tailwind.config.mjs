import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        dark: 'var(--dark)',
        light: 'var(--light)',
      },
      backgroundColor: {
        body: 'var(--bg-body)',
        nav: 'var(--bg-nav)',
        code: 'var(--bg-code)',
      },
      textColor: {
        body: 'var(--text-body)',
        code: 'var(--text-code)',
        heading: 'var(--text-heading)',
      },
      borderColor: {
        DEFAULT: 'var(--border-color)',
      },
    },
  },
  plugins: [starlightPlugin()],
};
