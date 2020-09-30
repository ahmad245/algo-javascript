const addTwoDigits = (n = 11) => {
    return n.toString().split('').reduce((ac, el) => ac + parseInt(el), 0);
}