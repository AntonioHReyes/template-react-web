import {BaseColorsImpl as baseColors} from './_baseColors'
import {Colors} from "./_colors";

export const light: Colors = {

    themeBaseColor: baseColors.white,
    themeBackground: baseColors.freeSpeechBlue,
    text: baseColors.white,
    headerBackgroundColor: baseColors.navyBlue,
    links: baseColors.navyBlue,

    ...baseColors
}