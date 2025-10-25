export function roundToTwoDecimalPlaces(value) {
    const factor = Math.pow(10, 2);
    return Math.round(value * factor) / factor;
}
