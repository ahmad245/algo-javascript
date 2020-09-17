const alphabetSubsequence = (str = 'effg') => {
    let i = 9;
    let a = ''
    for (_ of Array(26)) a += (++i).toString(36)
    let alph = a.split('');

    let strArray = str.split('');

    for (let i = 1; i < strArray.length; i++) {
        if (alph.indexOf(strArray[i]) <= alph.indexOf(strArray[i - 1])) return false;

    }
    return true;

}
alphabetSubsequence('ace');