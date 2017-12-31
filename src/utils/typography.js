import Typography from "typography";
import 'font-kopub/css/kopubbatang.css';
import "../assets/main.css";
import usWebDesignStandardsTheme from "typography-theme-us-web-design-standards";

usWebDesignStandardsTheme.baseColor = "rgba(0,0,0,.84)";

const typography = new Typography(usWebDesignStandardsTheme);
export default typography;
