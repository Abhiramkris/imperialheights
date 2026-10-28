/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          50: '#F4F7F2',
          100: '#E4EDE0',
          200: '#C9DCC2',
          300: '#A4C39B',
          400: '#7FA875',
          500: '#528546',
          600: '#3D6B34',
          700: '#2F5428',
          800: '#24431F',
          900: '#1A3316',
          950: '#0F1F0D',
          DEFAULT: '#274728',
        },
        sage: {
          50: '#F8FAF6',
          100: '#EFF4ED',
          200: '#DDE8DB',
          300: '#C5D8C1',
          400: '#A8C3A3',
          500: '#8DAE87',
          DEFAULT: '#BDD4B4',
        },
        cream: {
          50: '#FCFBF8',
          100: '#FAF7F2',
          200: '#F5EFE4',
          300: '#EFE5D4',
          400: '#E6D7C0',
          DEFAULT: '#FAF7F2',
        },
        brass: {
          400: '#D8B878',
          500: '#C5A059',
          600: '#A6823C',
          DEFAULT: '#C5A059',
        },
        timber: {
          400: '#A96E45',
          500: '#8E5832',
          600: '#724121',
          DEFAULT: '#8E5832',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      }
    },
  },
  plugins: [],
}
