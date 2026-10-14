import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://uem-wiki.github.io',
  base: '/uem_wiki_Astro',
});
