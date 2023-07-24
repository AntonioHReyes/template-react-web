/* Colors name reference:
  https://www.color-blindness.com/color-name-hue/ or http://chir.ag/projects/name-that-color/#3C3C3B
*/

export interface BaseColors {
    transparent: string,
    white: string,
    black: string,

    windsor: string,
    slateGray: string,
    dimGray: string,
    dodgerBlue: string,

    gray: string,

    babyBlue: string,
    navyBlue: string,
    freeSpeechBlue: string,
    ceruleanBlue: string,
    neonBlue: string,
}

export const BaseColorsImpl: BaseColors = {
    /* Colores genericos de la aplicación */
    transparent: "#00000000",
    white: '#FFFFFF',
    black: '#0c0c0c',

    windsor: '#545562',
    slateGray: '#727C8E',
    dimGray: '#707070',
    dodgerBlue: "#0255dc",

    gray: "#FFFFFF4C",

    babyBlue: "#BFD7ED",
    navyBlue: "#003B73",
    freeSpeechBlue: "#3A64B4FF",
    ceruleanBlue: "#266EB6FF",
    neonBlue: "#454AFCFF",

}