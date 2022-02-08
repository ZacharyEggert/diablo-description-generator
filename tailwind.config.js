const colors = require('tailwindcss/colors.js');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: colors.neutral,
                grey: colors.neutral,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
