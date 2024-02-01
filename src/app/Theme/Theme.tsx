import { MantineThemeOverride } from "@mantine/core";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable:'--font-inter',
  display:'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable:'--font-manrope',
  display:'swap'
});
const font_array = [`${manrope}`,`${inter}`];
export const Theme: MantineThemeOverride = {
  colors: {
    primary: ["#6b9eff", "#3c74ff", "#2c6fee", "#ff9b3e", "#3fdbb1", "#f0403719", "#f040371a", "#6720df", "#f86962", "#6b9eff21"],
  },
  // fontFamily: `${inter} `,
  // fontFamily: font_array,
  primaryColor: "primary",
  primaryShade: 7,
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
  },
};
