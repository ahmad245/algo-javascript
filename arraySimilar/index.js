const isSimilar = (arr1 = [1, 2, 3], arr2 = [3, 2, 1]) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.find(el => el == arr1[i])) return false;
    }
    return true;
}