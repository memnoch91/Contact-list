export const capitalize = function (value) {
    if(!value) return '';
    value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}
