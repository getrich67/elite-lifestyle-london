import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/elite-lifestyle-london',
  integrations: [
    preact(),
    sitemap({
      canonicalURL: 'https://yourusername.github.io/elite-lifestyle-london'
    })
  ],
});
