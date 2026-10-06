/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fbf9f6",
        surface: "#fbf9f6",
        "surface-bright": "#fbf9f6",
        "surface-dim": "#dbdad7",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f3f0",
        "surface-container": "#efeeeb",
        "surface-container-high": "#eae8e5",
        "surface-container-highest": "#e4e2df",
        "surface-variant": "#e4e2df",
        
        primary: "#050504",
        "primary-container": "#1f1e1d",
        "on-primary": "#ffffff",
        "on-primary-container": "#888584",
        "primary-fixed": "#e6e2df",
        "primary-fixed-dim": "#cac6c4",
        "on-primary-fixed": "#1c1b1a",
        
        secondary: "#7a5555",
        "secondary-container": "#ffcece",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#7b5556",
        "secondary-fixed": "#ffdad9",
        "secondary-fixed-dim": "#ebbbbb",
        "on-secondary-fixed": "#2e1415",
        
        tertiary: "#090400",
        "tertiary-container": "#2b1b01",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#9c825c",
        "tertiary-fixed": "#fedeb2",
        "tertiary-fixed-dim": "#e0c298",
        
        outline: "#7b766f",
        "outline-variant": "#ccc6bd",
        
        "on-background": "#1b1c1a",
        "on-surface": "#1b1c1a",
        "on-surface-variant": "#4a4640",
        
        // Brand palette tokens
        gold: {
          light: "#E3CEB2",
          DEFAULT: "#C5A880",
          dark: "#9C825C",
        },
        rose: {
          light: "#EAD2D2",
          DEFAULT: "#C89B9B",
          dark: "#7A5555",
        },
        espresso: {
          light: "#353432",
          DEFAULT: "#1F1E1D",
          dark: "#050504",
        },
        ivory: {
          light: "#FFFFFF",
          DEFAULT: "#FAF8F5",
          dark: "#EFE9E0",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        caps: '0.14em',
        subtle: '0.02em',
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
      }
    },
  },
  plugins: [],
}
