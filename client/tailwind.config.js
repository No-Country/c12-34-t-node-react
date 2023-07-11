/** @type {import('tailwindcss').Config} */
// import formsPlugin from '@tailwindcss/forms';
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: { 
      'xxxl': '1580px',
      'xxl': '1400px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'xxs': '480px',
      'xxxs': '320px',
    }
  },
  plugins: [
    daisyui,
    // formsPlugin
  ],
}

