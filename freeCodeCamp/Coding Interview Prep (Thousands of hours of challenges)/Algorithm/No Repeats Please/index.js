// Algorithms: No Repeats Please
// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// permAlone("aab") should return a number.
// permAlone("aab") should return 2.
// permAlone("aaa") should return 0.
// permAlone("aabb") should return 8.
// permAlone("abcdefa") should return 3600.
// permAlone("abfdefa") should return 2640.
// permAlone("zzzzzzzz") should return 0.
// permAlone("a") should return 1.
// permAlone("aaab") should return 0.
// permAlone("aaabb") should return 12.

function permAlone(str) {
    let perm = stringPermutations(str);
    let counter = 0;

    for (let i = 0; i < perm.length; i++) {
        let sum = 0;
        for (let j = 1; j < perm[i].length; j++) {
            if (perm[i][j] == perm[i][j - 1]) {
                sum++;
                break;
            }
        }
        if (sum == 0) {
            counter++;
        }
    }

    return counter;
}
// letters = ['c','a','t']
// results = [['c']]

/// currLetter = letters.shift() currLetter = 'a'  , letters = ['t']
//
// results before map
// [
//     [ 't', 'a', 'c' ],
//     [ 'a', 't', 'c' ],
//     [ 'a', 'c', 't' ],
//     [ 't', 'c', 'a' ],
//     [ 'c', 't', 'a' ],
//     [ 'c', 'a', 't' ] 
//   ]
// results after map
//   [ 'tac', 'atc', 'act', 'tca', 'cta', 'cat' ]
function stringPermutations(str) {
    let letters = str.split(''), // ['c','a','t']
        results = [ // [['c']]
            [letters.shift()]
        ]
    while (letters.length) {
        const currLetter = letters.shift() //1-currLetter = 'a'  , letters = ['t']  ;    
        let tmpResults = []
        results.forEach(result => { // 1-result=['c']  ;                                 
            let rIdx = 0
            while (rIdx <= result.length) { // 1-result.length=1                        
                const tmp = [...result] //1- tmp=['c']                   1-2- tmp=['c']                  
                tmp.splice(rIdx, 0, currLetter) //1- tmp = ['a','c']     1-2- tmp=['c','a']                  
                tmpResults.push(tmp) //1- tmpResults=[['a','c']]         1-2- tmpResult=[['a','c'],['c','a']]                  
                rIdx++;
            }
        })
        results = tmpResults //1- result = [['a','c'],['c','a']]                            

    }
    return results
        //   .map(letterArray => letterArray.join(''))
        // .filter((el, idx, self) => (self.indexOf(el) === idx))
        //   .sort()
}


permAlone('aab');


// let findPermutations = (string) => {
//     if (!string || typeof string !== "string"){
//       return "Please enter a string"
//     }

//     if (!!string.length && string.length < 2 ){
//       return string
//     }

//     let permutationsArray = [] 

//     for (let i = 0; i < string.length; i++){
//       let char = string[i]

//       if (string.indexOf(char) != i)
//       continue

//       let remainder = string.slice(0, i) + string.slice(i + 1, string.length)

//       for (let permutation of findPermutations(remainder)){
//         permutationsArray.push(char + permutation) }
//     }
//     return permutationsArray
//   }