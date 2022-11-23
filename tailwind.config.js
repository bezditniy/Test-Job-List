/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#E6E9F2",
      "secondary": "#FFFFFF",
      "text-color": "#3A4562",
      "secondary-txt": "#878D9D",
      "employment": "rgba(85, 105, 158, 0.3)",
      "employment-border": "rgba(161, 177, 219, 0.317343)",
      "benefits": "rgba(255, 207, 0, 0.15)",
    },

    listStyleType: {
      "square": 'square',
    },
    
    extend: {
      width: {
        'w-85': '85px',
      },
      flex: {
        "2": "1 0 100%"
      }
    },
  },
  plugins: [],
}
