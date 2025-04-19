
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vina-sans': ['Vina Sans', 'sans-serif'],
      },
      colors: {
        'custom-yellow': '#ebff58',
        'border': '#e2e8f0', // Explicitly defining border color
        'background': '#ebff58', // Add background color
      },
      backgroundColor: {
        'page-bg': '#ebff58',
      },
      textColor: {
        'dark-grey': '#333',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
