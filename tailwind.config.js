module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0284c7', // sky-600
        light: '#e0f2fe', // sky-100
        background: '#fff', // white
        'light-shade': '#f1f5f9', // slate-100
        content: '#4b5563', // gray-600 <-text
        emphasized: '#262626', // neutral-800 <- emphasized text
        supporting: '#9ca3af', // gray-400 <- de-emphasized text
      },
    },
  },
  plugins: [],
};
