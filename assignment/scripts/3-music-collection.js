console.log('***** Music Collection *****')
let collection = [];
console.log(collection);

function addToCollection(title, artist, yearPublished) {
let records = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
};
collection.push(records);
return records;
}

let albumeOne = addToCollection("ctrl", "SZA", "2017");
console.log(albumeOne);
let albumeTwo = addToCollection("The Miseducation of Lauryn Hill", "Lauryn Hill", "1998");
console.log(albumeTwo);
let albumeThree = addToCollection("SOS", "SZA", "2022");
console.log(albumeThree);
let albumeFour = addToCollection("Whats going on", "Marvin Gaye", "1971");
console.log(albumeFour);
let albumeFive = addToCollection("Blond", "Frank Ocean", "2017");
console.log(albumeFive);
let albumSix = addToCollection("Off the Wall", "Michael Jackson", "1979");
console.log(albumSix);
console.log(collection);