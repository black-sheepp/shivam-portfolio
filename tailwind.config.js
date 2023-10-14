/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      cyan: "#33D4EB",
      yellow: "#FEDC51",
      pink: "#E621B7",
      white: "#FFFFFF",
      black: "#000000",
      grey: "#adb5bd",
      greyDark: "#343a40",
      green:"#9cfc97",
      redColor: "#ef233c",
      orangeColor: "#ff7b00",
      yellowColor: "#FEDC51",
      lightGreenColor: "#70e000",
      brightGreenColor: "#ccff33",
    },
  },
  plugins: [],
}
