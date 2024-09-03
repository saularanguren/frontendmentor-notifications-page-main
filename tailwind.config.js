/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'Blue': '#0A327B',
			'Red': '#F65552',
			'VeryDarkGreyBlue': '#1C202B',
			'DarkGreyBlue': '#5E6778',
			'GreyBlue': '#939CAD',
			'LightGreyBlue': '#E5EFFA',
			'VeryLightGreyBlue': '#DDE7EE',
			'Snow': '#F7FAFD',
			'White': '#FFFFFF',
		},
		fontFamily: {
			PlusJakartaSansMedium: ['PlusJakartaSans-Medium'],
			PlusJakartaSansExtraBold: ['PlusJakartaSans-ExtraBold'],
			PlusJakartaSansVariableWght: ['PlusJakartaSans-VariableWght'],
		},
		extend: {},
	},
	plugins: [
	],
}