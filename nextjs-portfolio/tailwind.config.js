module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../src/**/*.{js,ts,jsx,tsx,mdx}", // for monorepo or parent src
    "../components/**/*.{js,ts,jsx,tsx,mdx}",
    "../app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', // Main accent (blue)
        secondary: '#14171A', // Dark background
        accent: '#F5A623', // Orange accent
        background: '#F8F8F8', // Light background
        text: '#18181B', // Main text
        muted: '#71717A', // Muted text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
};