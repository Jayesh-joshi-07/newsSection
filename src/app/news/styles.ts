import { css } from "@emotion/react";
import { typography, colors, utils } from "zebpay-ui";

// ...typography.B5_12_semibold,
export const main = css({
  display: "inline-flex",
  alignItems: "flex-start",
  gap: "1.25rem",
  width: "100%",
  padding: "1.25rem",

  flexShrink: 0,
  alignSelf: "stretch",
  background: colors.Zeb_Solid_BG_Blue,
  boxShadow: "0px 7px 7px -2px rgba(97, 79, 79, 0.14)",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

export const container = css({
  display: "flex",
  width: "75%",
  height: "100%",

  paddingBottom: "1rem",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
  background: colors.Zeb_Solid_Dark_Blue,
  "@media (max-width: 768px)": {
    width: "100%",
    height: "39.75rem",
  },
});

export const headerFrame = (isScrolled: boolean) =>
  css({
    display: "flex",
    padding: "1rem 0",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
    alignSelf: "stretch",
    background: colors.Zeb_Solid_Dark_Blue,
    position: "sticky",
    top: 0,
    borderRadius: "8px",
    zIndex: 10,
    ...(isScrolled && {
      boxShadow: "0px 8px 8px -4px #0C0C1D",
    }),
    "@media (max-width: 768px)": {
      gap: "0.5rem",
    },
  });

export const header = css({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 1rem",
  alignItems: "center",
  alignSelf: "stretch",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "0.5rem",
    padding: "0 0.5rem",
  },
});

export const section = css({
  display: "flex",
  flexWrap: "wrap",
  height: "39.75rem",
  width: "100%",
  padding: "1rem",
  paddingBottom: "1rem",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.5rem",
  background: colors.Zeb_Solid_Dark_Blue,
  overflow: "auto",
  position: "relative",
  "&::-webkit-scrollbar": {
    width: "0.25rem",
    height: "2.5rem",
    background: colors.Zeb_Solid_Dark_Grey,
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: colors.Zeb_Solid_Dark_Grey,
    borderRadius: "1.125rem",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: colors.Zeb_Solid_Dark_Grey,
  },
  "&:not(:hover)::-webkit-scrollbar": {
    display: "none",
  },
  "@media (max-width: 768px)": {
    width: "100%",
    height: "inherit",
  },
});

export const news = css({
  display: "flex",
  width: "auto",
  alignItems: "center",
  gap: "8px",
  color: colors.Zeb_Solid_White,
  ...typography.h6_16_bold,
});

export const filterAndUpdownFrame = css({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
  "@media (max-width: 768px)": {
    gap: "0.5rem",
  },
});

export const filter = css({
  color: colors.Zeb_Solid_White,
  display: "flex",
  padding: "8px",
  alignItems: "center",
  gap: "4px",
  borderRadius: "8px",
  background: colors.Zeb_Solid_BG_Blue,
});

export const updown = css({
  color: colors.Zeb_Solid_White,
  display: "flex",
  padding: "8px",
  alignItems: "center",
  gap: "4px",
  borderRadius: "8px",
  background: colors.Zeb_Solid_BG_Blue,
});

export const innerDiv = css({
  display: "flex",
  width: "25%",
  height: "44.75rem",
  padding: "1rem",

  color: colors.Zeb_Solid_White,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: "8px",
  background: colors.Zeb_Solid_Dark_Blue,
  "@media (max-width: 768px)": {
    width: "inherit",
    height: "39.75rem",
  },
});

export const newsletter = css({
  display: "flex",
  width: "inherit",
  padding: "0.75rem",
  alignItems: "center",
  gap: "0.25rem",
  flex: "1 0 0",
  borderRadius: "8px",
  background: colors.Zeb_Solid_BG_Blue,
});

export const newsChild = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flex: "1 0 0",
  alignSelf: "stretch",
});

export const innerCard = css({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
  flexShrink: "0",
});

export const newsHeader = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.5rem",
  alignSelf: "stretch",
});

export const heading = css({
  color: colors.Zeb_Solid_White,
  fontFeatureSettings: '"clig" off, "liga" off',
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "1.75rem",
  letterSpacing: "0.05rem",
});

export const mailIcon = css({
  display: "flex",
  width: "5rem",
  height: "5rem",
  padding: "1.0625rem 0.234rem",
  justifyContent: "center",
  alignItems: "center",
});

export const quote = css({
  alignSelf: "stretch",
  color: colors.Zeb_Solid_Light_Blue,
  fontFeatureSettings: '"clig" off, "liga" off',
  fontFamily: "Lato",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.5rem",
  letterSpacing: "0.025rem",
});

export const form = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.25rem",
  alignSelf: "stretch",
});

export const email = css({
  flex: "1 0 0",
  fontFeatureSettings: '"clig" off, "liga" off',
  fontFamily: "Lato",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.5rem",
  letterSpacing: "0.025rem",
});

export const subscribe = css({
  display: "flex",
  width: "15.9375rem",
  padding: "0.5rem 0.75rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  color: "white",
  borderRadius: "8px",
  background: colors.Zeb_Gradient_Blue_01,
});

export const bannerImage = css({
  width: "3rem",
  height: "3rem",
  alignSelf: "center",
  flexShrink: "0",
  position: "absolute",
  right: "1rem",
  top: "1rem",
  "@media (max-width: 480px)": {
    width: "2rem",
    height: "2rem",
  },
});
export const tradingBanner = css({
  display: "flex",
  width: "100%",

  padding: "0.75rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.25rem",
  flexShrink: "0",
  borderRadius: "8px",
  background: colors.Zeb_Gradient_Dark_Blue,
  position: "relative",
  "@media (max-width: 768px)": {
    height: "auto",
    padding: "1rem",
  },
  "@media (max-width: 480px)": {
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  },
});

export const topology = css({
  width: "16.75513rem",
  height: "16.39394rem",
  transform: "rotate(44.59deg)",
  position: "absolute",
  right: "-11.12863rem",
  top: "-11rem",
  "@media (max-width: 768px)": {
    width: "12rem",
    height: "12rem",
    right: "-8rem",
    top: "-8rem",
  },
});

export const frame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.25rem",
  alignSelf: "stretch",
  "@media (max-width: 768px)": {
    gap: "0.75rem",
  },
});

export const anotherFrame = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  gap: "1.25rem",
  alignSelf: "stretch",
  "@media (max-width: 768px)": {
    gap: "0.75rem",
  },
});

export const zebpayImageDiv = css({
  display: "flex",
  width: "4rem",
  height: "4rem",
  justifyContent: "center",
  alignItems: "center",
  background: `url(<path-to-image>) lightgray -29.75px -23.893px / 187.281% 188.029% no-repeat`,
  "@media (max-width: 768px)": {
    width: "3rem",
    height: "3rem",
  },
});

export const textWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.25rem",
  alignSelf: "stretch",
  "@media (max-width: 768px)": {
    gap: "0.125rem",
  },
});

export const title = css({
  alignSelf: "stretch",
  color: "var(--Zeb_Solid-White, #FFF)",
  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "1.75rem", // 175%
  letterSpacing: "0.05rem",
  "@media (max-width: 768px)": {
    fontSize: "0.875rem",
    lineHeight: "1.5rem",
  },
});

export const subtitle = css({
  alignSelf: "stretch",
  color: "var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #C0C0EE))",

  fontFeatureSettings: "'liga' off, 'clig' off",
  fontFamily: "Lato",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "1.5rem", // 171.429%
  letterSpacing: "0.025rem",
  "@media (max-width: 768px)": {
    fontSize: "0.75rem",
    lineHeight: "1.25rem",
  },
});

export const buttonGroup = css({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  gap: "0.75rem",
  alignSelf: "stretch",
  "@media (max-width: 768px)": {
    gap: "0.5rem",
  },
});

export const button = css({
  height: "2rem",
  flex: "1 0 0",
  "@media (max-width: 768px)": {
    height: "1.75rem",
  },
});
