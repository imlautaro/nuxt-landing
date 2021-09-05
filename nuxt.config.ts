import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxt/image',
		'nuxt-windicss',
		'@nuxtjs/google-fonts',
		'@nuxtjs/pwa',
	],
	components: true,
	css: ['~/assets/css/main.css'],
	googleFonts: {
		display: 'swap',
		families: {
			Inter: [400, 600, 700],
		},
	},
	publicRuntimeConfig: {
		sitename: process.env.SITENAME || 'Nuxt Landing',
	},
	pwa: {
		manifest: {
			name: 'Nuxt Landing',
			short_name: 'NuxtLanding',
			theme_color: '#000000',
			display: 'browser',
		},
		workbox: false,
	},
	srcDir: 'src',
	target: 'static',
}

export default config
