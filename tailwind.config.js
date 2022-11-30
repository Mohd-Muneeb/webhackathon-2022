/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				// Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
				opensans: ["Open Sans"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: ["cupcake", "dark", "cmyk"],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "cupcake",
	},
};
