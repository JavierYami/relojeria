/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      'display': ['Lora']
    },
    colors: {
      'white':'#FFFFFF',
      'gray': {
        '50': '#f7f7f7',
        '100': '#f0f0f0',
        '200': '#e3e3e3',
        '300': '#d1d1d1',
        '400': '#c0c0c0',
        '500': '#aaaaaa',
        '600': '#969696',
        '700': '#818181',
        '800': '#6a6a6a',
        '900': '#585858',
        '950': '#333333',
    },
      'brown': {
        '50': '#fbf8f1',
        '100': '#f5eedf',
        '200': '#ead9be',
        '300': '#ddbe94',
        '400': '#d1a473',
        '500': '#c3854c',
        '600': '#b57141',
        '700': '#975a37',
        '800': '#7a4932',
        '900': '#633d2b',
        '950': '#351e15',
    },
    'success': {
      '50': '#f5faf3',
      '100': '#e9f4e4',
      '200': '#d2e9c9',
      '300': '#a7d397',
      '400': '#82bb6d',
      '500': '#5f9f48',
      '600': '#4a8237',
      '700': '#3d672e',
      '800': '#345229',
      '900': '#2b4423',
      '950': '#13240f',
  },
      'danger': {
        '50': '#fcf6e6',
        '100': '#faece9',
        '200': '#f5d9d6',
        '300': '#edbab4',
        '400': '#e2908a',
        '500': '#d36660',
        '600': '#b73e3e',
        '700': '#9f3134',
        '800': '#862b30',
        '900': '#73282f',
        '950': '#3f1215',
    },
    },
    extend: {
    },
  },
  plugins: [],
}

