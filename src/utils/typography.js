import Typography from "typography";
import "../assets/main.css";

import usWebDesignStandardsTheme from "typography-theme-us-web-design-standards";

const typography = new Typography(usWebDesignStandardsTheme);

typography.baseColor = "#343a40";

typography.overrideThemeStyles = ({ rhythm }, options) => ({
  p: {
    fontFamiliy: "KoPub Batang !important"
  }
});

export default typography;
