/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./dist/**/*.{html,js}'],
    theme: {
        fontFamily: {
            roboto: ['roboto', 'sans-serif', 'Arial'],
            'roboto-medium': ['roboto-medium', 'sans-serif', 'Arial'],
            archivo: ['archivo', 'sans-serif', 'Arial'],
        },
        extend: {
            colors: {
                primaryColor: '#E76F51',
                secondaryColor: '#F8E1DB',
                mainGray: '#D2D2D2',
                mainDark: '#3B3735',
            },
            borderRadius: {
                'large':'10rem'
            },
            boxShadow: {
                custom:'0 0 0.75rem'
            }
        },
    },
    plugins: [],
};