import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

const config = defineConfig({
	darkMode: 'media',
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '2rem',
			},
		},
		extend: {
			colors: {
				primary: colors.indigo,
				secondary: colors.purple,
				gray: colors.gray,
			},
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
	},
})

export default config
