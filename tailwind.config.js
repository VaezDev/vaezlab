/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#08080F',
        dark:    '#0C0C15',
        card:    '#0F0F1A',
        border:  '#1A1A2E',
        purple:  '#7C3AED',
        purpleL: '#A855F7',
        purpleG: '#C084FC',
        cyan:    '#06B6D4',
        cyanL:   '#22D3EE',
      },
      fontFamily: { sans: ['Inter','sans-serif'] },
      backgroundImage: {
        'grad-purple': 'linear-gradient(135deg,#7C3AED,#A855F7)',
        'grad-brand':  'linear-gradient(90deg,#A855F7,#06B6D4)',
      },
    },
  },
  plugins: [],
}
