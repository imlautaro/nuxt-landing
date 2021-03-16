import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: ['@nuxt/typescript-build', '@nuxtjs/tailwindcss'],
	components: true,
	srcDir: 'src',
	target: 'static',
}

export default config
