
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    backgroundColor: {
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
      'info': 'var(--color-info)',
      'success': 'var(--color-success)',
      'warning': 'var(--color-warning)',
      'error': 'var(--color-error)',
      'indigo': 'var(--color-indigo)',
      'lightprimary': 'var(--color-lightprimary)',
      'lightinfo': 'var(--color-lightinfo)',
      'lightsecondary': 'var(--color-lightsecondary)',
      'lightsuccess': 'var(--color-lightsuccess)',
      'lighterror': 'var(--color-lighterror)',
      'lightwarning': 'var(--color-lightwarning)',
      'lightindigo': 'var(--color-lightindigo)',
      'textPrimary': 'var(--color-textPrimary)',
      'textSecondary': 'var(--color-textSecondary)',
      'borderColor': 'var(--color-borderColor)',
      'inputBorder': 'var(--color-borderColor)',
      'containerBg': 'var(--color-containerBg)',
      'background': 'var(--color-background)',
      'hoverColor': 'var(--color-hoverColor)',
      'surface': 'var(--color-surface)',
      'grey100': 'var(--color-grey100)',
      'grey200': 'var(--color-grey200)',
      'darkbg': 'var(--color-darkbg)',
      'bglight': 'var(--color-bglight)',
      'white': 'var(--color-white)',
      'gray-900': 'var(--color-gray-900)',
      ...colors
    },
    textColor: {
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
      'info': 'var(--color-info)',
      'success': 'var(--color-success)',
      'warning': 'var(--color-warning)',
      'error': 'var(--color-error)',
      'indigo': 'var(--color-indigo)',
      'lightprimary': 'var(--color-lightprimary)',
      'lightinfo': 'var(--color-lightinfo)',
      'lightsecondary': 'var(--color-lightsecondary)',
      'lightsuccess': 'var(--color-lightsuccess)',
      'lighterror': 'var(--color-lighterror)',
      'lightwarning': 'var(--color-lightwarning)',
      'lightindigo': 'var(--color-lightindigo)',
      'textPrimary': 'var(--color-textPrimary)',
      'textSecondary': 'var(--color-textSecondary)',
      'borderColor': 'var(--color-borderColor)',
      'inputBorder': 'var(--color-borderColor)',
      'containerBg': 'var(--color-containerBg)',
      'background': 'var(--color-background)',
      'hoverColor': 'var(--color-hoverColor)',
      'surface': 'var(--color-surface)',
      'grey100': 'var(--color-grey100)',
      'grey200': 'var(--color-grey200)',
      'darkbg': 'var(--color-darkbg)',
      'bglight': 'var(--color-bglight)',
      'white': 'var(--color-white)',
      'gray-900': 'var(--color-gray-900)',
      ...colors
    },
    borderColor: {
      'borderColor': 'var(--color-borderColor)',
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
      'info': 'var(--color-info)',
      'success': 'var(--color-success)',
      'warning': 'var(--color-warning)',
      'error': 'var(--color-error)',
      'indigo': 'var(--color-indigo)',
      'surface': 'var(--color-surface)',
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans, sans-serif"],
    },
    borderRadius: {
      'sm': '7px',
      'md': '10px',
      'lg': '12px',
      'full': '9999px',
      'large': '18px',
    },
    boxShadow: {
      DEFAULT: '0 2px 6px rgba(37,83,185,.1) ',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],

}