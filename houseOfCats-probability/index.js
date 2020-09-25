  function houseOfCats(legs) {
      let probabilities = [];
      probabilities.push(Math.floor(legs / 4));
      probabilities.push(Math.floor(legs / 2));

      return probabilities;




  }

  console.log(houseOfCats(6));
  console.log(houseOfCats(2));