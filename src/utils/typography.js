import Typography from "typography";
import usWebDesignStandardsTheme from "typography-theme-us-web-design-standards";

const typography = new Typography(usWebDesignStandardsTheme);

typography.baseColor = "#343a40";
typography.overrideThemeStyles = ({ rhythm }, options) => ({
  body: "#343a40"
});

export default typography;
