/** @type {import('tailwindcss').Config} */

module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                Poppins_200ExtraLight: 'Poppins_200ExtraLight',
                Poppins_300Light: 'Poppins_300Light',
                Poppins_400Regular: 'Poppins_400Regular',
                Poppins_500Medium: 'Poppins_500Medium',
                Poppins_600SemiBold: 'Poppins_600SemiBold',
                Poppins_700Bold: 'Poppins_700Bold'
            },
            colors: {
                'neutral-100': '#ECEDEF',
                'neutral-200': '#C7C7C7',
                'neutral-300': '#949499',
                'neutral-400': '#6D6D74',
                'neutral-700': '#2D2D36',

                'primary-100': '#E9F4FF',
                'primary-200': '#D1E9FF',
                'primary-500': '#0085FF',
                'primary-600': '#005EB6',
                'primary-800': '#00396C',
                'primary-900': '#001C35',

                'secondary-100': '#DEDEFF',
                'secondary-200': '#C0C0FF',
                'secondary-900': '#000066',
                'secondary-500': '#3B3BF9',

                'cyan-500': '#13A9CA',

                'purple-100': '#F6EBFF',
                'purple-200': '#EAD0FF',
                'purple-500': '#8F00FF',

                'red-500': '#DD3737',

                'green-500': '#11D13B',
                'green-600': '#129E31'
            }
        }
    },
    plugins: []
};
