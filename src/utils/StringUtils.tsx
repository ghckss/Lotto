export const addCommaToNumber = (number: number) => {
    var str = number.toString().split('.');
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return str.join('.');
};
