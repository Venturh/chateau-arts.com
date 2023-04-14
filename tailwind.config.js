const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media',
	content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
