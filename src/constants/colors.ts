export type variation = {
    primary: string,
    secondary: string,
    third: string,
    fourth: string,
    fifth: string,
}

const colors: { button: variation, "btn-text": variation, text: variation } = {
    button: {
        primary: "#36413E",
        secondary: "#5D5E60",
        third: "#8D8D92",
        fourth: "#BEB2C8",
        fifth: "#D7D6D6"
    },
    "btn-text": {
        primary: "#fff",
        secondary: "#fff",
        third: "#000",
        fourth: "#000",
        fifth: "#000"
    },
    text: {
        primary: "#36413E",
        secondary: "#5D5E60",
        third: "#8D8D92",
        fourth: "#BEB2C8",
        fifth: "#D7D6D6"
    }
}

export function hexToRgba(hex: string, opacity: number = 1): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},${opacity})` : hex;
}

export const getColorVariationEntity = (variation: keyof variation, entity: keyof typeof colors): string => {
    return colors[entity][variation];
}

export default colors;
