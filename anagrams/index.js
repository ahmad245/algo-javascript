  // --- Directions
  // Check to see if two provided strings are anagrams of eachother.
  // One string is an anagram of another if it uses the same characters
  // in the same quantity. Only consider characters, not spaces
  // or punctuation.  Consider capital letters to be the same as lower case
  // --- Examples
  //   anagrams('rail safety', 'fairy tales') --> True
  //   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  //   anagrams('Hi there', 'Bye there') --> False



  // best 1
  function anagrams(stringA, stringB) {
      const aCharMap = buildCharMap(stringA);
      const bCharMap = buildCharMap(stringB);

      if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

      for (const key in aCharMap) {
          if (bCharMap[key] !== aCharMap[key]) return false
      }
      return true;

  }

  function buildCharMap(str) {
      const charMap = {};
      for (const char of str.replace('/[^\w]/g').toLowerCase()) {
          charMap[char] = charMap[char] + 1 || 1;
      }
      return charMap;
  }



  module.exports = anagrams;
  // best 2
  // function cleanString(str) {
  //     //  '\W' is used therefore the 'non-word characters' are displayed 
  //     return str
  //         .replace(/[^\w]/g, '')
  //         .toLowerCase()
  //         .split('')
  //         .sort()
  //         .join('')
  // }


  //   function anagrams(stringA, stringB) {
  //     return cleanString(stringA) === cleanString(stringB);
  // }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // loop inside loop 
  //   function anagrams(stringA, stringB) {
  //     if (stringA.length !== stringB.length) return false;

  //     //   stringA.split('').forEach(el => {
  //     //       if (!stringB.includes(el)) return false;
  //     //   })
  //     if (stringA.split('').some(el => !stringB.includes(el))) return false;
  //     return true;
  // }