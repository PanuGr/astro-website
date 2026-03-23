import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
import astroLLMsGenerator from 'astro-llms-generate';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'your-domain-name',
  prefetch: true,
  integrations: [sitemap({
    lastmod: new Date(),
    customPages: [
      'your-domain-name/llms.txt',
      'your-domain-name/llms-small.txt',
      'your-domain-name/llms-full.txt'
    ],
  }),
  astroLLMsGenerator(),
],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      },
      postcss: {
        plugins: isProduction ? [
          purgeCSSPlugin({
            //add other type files in use
            content: ['./src/**/*.astro']
          })
        ] : []
      }
    }
  }
});
