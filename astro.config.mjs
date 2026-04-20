// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import edgeoneAdapter from "@edgeone/astro";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: edgeoneAdapter(),
  // Set to your production URL (GitHub Pages, Vercel, Netlify, etc.).
  site: "https://droidmaximus.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-high-contrast",
    },
  },
});
