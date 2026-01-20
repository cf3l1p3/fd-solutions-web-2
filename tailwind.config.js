/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00A88E', // Cyan tecnológico
                    hover: '#008C7E',
                },
                secondary: {
                    DEFAULT: '#2C3E50', // Gris oscuro / grafito
                },
                accent: {
                    DEFAULT: '#0F766E', // Teal corporativo
                    secondary: '#CCFBF1', // Teal claro para fondos
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
