import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#6D28D9', // More accessible purple
          foreground: '#FFFFFF',
          light: '#A78BFA',
          dark: '#4C1D95'
        },
        secondary: {
          DEFAULT: '#1E40AF', // Improved blue for contrast
          foreground: '#FFFFFF',
          light: '#3B82F6',
          dark: '#1E3A8A'
        },
        background: {
          DEFAULT: '#0F172A', // Dark background for better readability
          light: '#1E293B',
          dark: '#020617'
        },
        text: {
          primary: '#F0F9FF', // Light text for dark background
          secondary: '#CBD5E1',
          muted: '#94A3B8'
        }
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out"
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
