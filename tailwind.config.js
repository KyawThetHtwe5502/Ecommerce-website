/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    fontFamily: {
      'sans': ["Inter", 'serif']
    },
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        secondary : "#F5F5F5",
        text: "#FAFAFA",
        Text2:"#000000",
        secondary2: "#DB4444",
        button2: "#00FF66"
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
