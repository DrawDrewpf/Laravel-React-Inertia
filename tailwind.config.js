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
            colors: {
                orange: {
                    light: '#f8e2c2', // Naranja claro para el tema claro
                    DEFAULT: '#f39c12', // Naranja por defecto (tema claro)
                    dark: '#d35400', // Naranja oscuro para el tema oscuro
                },
                white: {
                    light: '#ffffff', // Blanco para el tema claro
                    dark: '#cccccc', // Blanco grisáceo para el tema oscuro
                },
            },
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
