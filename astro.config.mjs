import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
import astroLLMsGenerator from 'astro-llms-generate';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://digisolutech.netlify.app',
  prefetch: true,
  integrations: [sitemap({
    lastmod: new Date(),
    customPages: [
      'https://digisolutech.netlify.app/llms.txt',
      'https://digisolutech.netlify.app/llms-small.txt',
      'https://digisolutech.netlify.app/llms-full.txt'
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
            content: ['./src/**/*.astro']
          })
        ] : []
      }
    }
  }
});