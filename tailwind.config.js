/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				xl: "1604px",
			},
			fontFamily: {
				inter: "'Inter', sans-serif",
			},
			colors: {
				base: {
					400: "#29282c",
					500: "#181718",
				},
				primary: {
					400: "#86c553",
					500: "#5aa938",
					550: "#519832",
					600: "#376921",
				},
			},
		},
	},
	plugins: [],
};
