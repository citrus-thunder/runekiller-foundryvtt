import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
	build: {
		outDir: "publish",
		minify: process.env.DEBUG == 'true' ? false : 'esbuild',
		emptyOutDir: false,
		lib: {
			name: "runekiller",
			entry: "src/main.ts",
			formats: ["es"],
			fileName: "main"
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		}
	}
})
