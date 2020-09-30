const adjacentElementsProduct = (product = [3, 6, -2, -5, 7, 3]) => {

    let max = 0;
    for (let i = 1; i < product.length; i++) {
        if (max < product[i] * product[i - 1]) {
            max = product[i] * product[i - 1];
        }
        if (max < product[i] * product[i - 1]) {
            max = product[i] * product[i + 1];
        }
    }
    return max;
}