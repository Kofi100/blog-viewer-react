/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				heading: ["EB Garamond", "serif"],
				body: ["Merriweather", "serif"],
			},
		},
	},
	plugins: [],
};
