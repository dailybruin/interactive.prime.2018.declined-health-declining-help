import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Noto Serif',
      styles: ['400'],
    },
    {
      name: 'Monda',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Monda', 'sans-serif'],
  bodyFontFamily: ['Noto Serif', 'serif'],
})

export default typography
