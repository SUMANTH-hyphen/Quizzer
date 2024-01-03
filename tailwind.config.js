/** @type {import('tailwindcss').Config} */
/*eslint-env node*/

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
  daisyui: {
    themes: [
      "fantasy" ,"halloween",
      // {
      //   dark: {
      //     ...[("daisyui/src/theming/themes")["[data-theme=dark]"]],
      //     // "primary": "red"
      //   },
      //   light: {
      //   }
      // },
    ],
    logs: false,
    darkTheme: "fantasy", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
  },
}

// import { defineConfig } from "vite";

// export default defineConfig({
//   content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui"), require('flowbite/plugin')],
// });
