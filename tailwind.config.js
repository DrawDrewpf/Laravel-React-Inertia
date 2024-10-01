import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Open_Sans','Figtree', ...defaultTheme.fontFamily.sans],
                montserrat: ['"Montserrat"', 'sans-serif'],
            },
            content: [
                './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
                './storage/framework/views/*.php',
                './resources/views/**/*.blade.php',
                './resources/js/**/*.jsx',
            ],
        },
    },

    plugins: [forms],
};
