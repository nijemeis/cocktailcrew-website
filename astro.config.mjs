// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://cocktailcrew.nl',
  // Pages are prerendered (static); only the Keystatic admin and its API run on demand.
  output: 'static',
  adapter: netlify(),
  integrations: [react(), markdoc(), keystatic()],
  trailingSlash: 'ignore',
});
