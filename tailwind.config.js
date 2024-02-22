/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        softRed: "hsl( 7, 99%, 70% )",
        yellow: "hsl( 51, 100%, 49% )",
        darkDesaturatedCyan: "hsl( 167, 40%, 24% )", // Graphic design text
        darkBlue: "hsl( 198, 62%, 26% )", // Photography text
        darkModerateCyan: "hsl( 168, 34%, 41% )", //Footer

        // Neutral colors
        veryDarkDesaturatedBlue: "hsl( 212, 27%, 19% )",
        varyDarkGrayishBlue: "hsl( 213, 9%, 39% )",
        darkGrayishBlue: "hsl( 232, 10%, 55% )",
        grayishBlue: "hsl( 210, 4%, 67% )",
        white: "hsl( 0, 0%, 100% )"
      },
      fontFamily: {
        barlow: [ "Barlow", "serif" ],
        fraunces: [ "Fraunces", "serif" ]
      },
      fontWeight: {
        boldFraunces: "700",
        blackFraunces: "900",
        semiBoldBarlow: "600"
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}