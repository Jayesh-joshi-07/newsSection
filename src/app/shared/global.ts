import { colors } from "zebpay-ui";

import { css } from "@emotion/react";

import { BASE_PATH } from "@constants/basePath";

const fontPath = `${BASE_PATH}/fonts/`;

export const globalStyles = [
  css({
    "@font-face": [
      {
        fontFamily: "Lato",
        src: `url("${fontPath}Lato-Bold.ttf") format("truetype")`,
        fontWeight: "bold",
        fontStyle: "normal",
        fontDisplay: "swap"
      }
    ],
    "*,\nhtml,\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\np,\narticle,\naside,\nfigcaption,\nfigure":
      {
        margin: "0",
        padding: "0",
        WebkitFontSmoothing: "antialiased"
      },
    "@media only screen and (min-width: 1200px)": {
      html: { fontSize: "16px" }
    },
    "@media only screen and (min-width: 1400px)": {
      html: { fontSize: "18px" }
    },
    "@media only screen and (min-width: 1800px)": {
      html: { fontSize: "20px" }
    },
    body: {
      backgroundColor: colors.Zeb_Solid_BG_Blue
    },
    a: {
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none"
      }
    },

    "input:focus::placeholder": {
      color: "transparent"
    },
    "input::-webkit-inner-spin-button": {
      WebkitAppearance: "none"
    },
    "input::-webkit-outer-spin-button": {
      WebkitAppearance: "none"
    },
    ".mobile-chat-container": {
      display: "none"
    },
    textarea: {
      lineHeight: "normal"
    }
  }),
  css({
    "@font-face": {
      fontFamily: "Lato",
      src: `url("${fontPath}Lato-Semibold.ttf") format("truetype")`,
      fontWeight: 600,
      fontStyle: "normal",
      fontDisplay: "swap"
    }
  }),
  css({
    "@font-face": {
      fontFamily: "Lato",
      src: `url("${fontPath}Lato-Regular.ttf") format("truetype")`,
      fontWeight: "normal",
      fontStyle: "normal",
      fontDisplay: "swap"
    }
  })
];
