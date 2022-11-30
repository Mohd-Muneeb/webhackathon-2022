/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./components/**/*.{js,jsx,ts,tsx}" , "./pages/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
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
		darkTheme: "dark",
	},
};
