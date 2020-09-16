const addBorder = (picture) => {
    const wall = '*'.repeat(picture[0].length + 2);

    for (let index = 0; index < picture.length; index++) {
        picture[index] = '*' + picture[index] + '*';
    }

    picture.unshift(wall);
    picture.push(wall);
    return picture;

}
console.log(addBorder(["abc", "ded"]));