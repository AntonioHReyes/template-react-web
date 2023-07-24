import 'styled-components';
import {Colors} from "src/theme/styles/colors/_colors";
import {FontFamilies, FontSizes} from "src/theme/styles/fonts/FontConfig";


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors,
    fonts: FontFamilies,
    fontSizes: FontSizes
  }
}