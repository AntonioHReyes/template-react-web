import {DefaultTheme} from 'styled-components'
import ThemedColors from "src/theme/styles/colors/ThemeColors";
import {FontFamilyConfig, FontFamilySizes} from "src/theme/styles/fonts/FontConfig";

export const lightTheme: DefaultTheme = {
  colors: ThemedColors["light"],
  fonts: FontFamilyConfig,
  fontSizes: FontFamilySizes,
  //This property is fullfilled in App.tsx
  screenDimens: {width: 0, height: 0, scale: 0, fontScale: 0, vhPx: 0, vwPx: 0}
}

export const darkTheme: DefaultTheme = {
  colors: ThemedColors["dark"],
  fonts: FontFamilyConfig,
  fontSizes: FontFamilySizes,
  //This property is fullfilled in App.tsx
  screenDimens: {width: 0, height: 0, scale: 0, fontScale: 0, vhPx: 0, vwPx: 0}
}