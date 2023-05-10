console.log("***** Music Collection *****");
let collection = [];
// Created collection variable of empty array.

function addToCollection(title, artist, yearPublished) {
  let records = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(records);
  return records;
}
// Created function named addToCollection that takes in a record's keys as parameters.
// Created new variable records in the function with these properties.
// Added new records object to the collection array.
// Return records.

let albumOne = addToCollection("Chime", "Dessa", "2018");
console.log(albumOne);
let albumTwo = addToCollection("Preachers Daughter", "Ethel Cain", 2022);
console.log(albumTwo);
let albumThree = addToCollection("Michigan", "Sufjan Stevens", 2003);
console.log(albumThree);
let albumFour = addToCollection("Carrie & Lowell", "Sufjan Stevens", 2015);
console.log(albumFour);
let albumFive = addToCollection("No Shape", "Perfume Genius", 2017);
console.log(albumFive);
let albumSix = addToCollection(
  "Because the Internet",
  "Childish Gambino",
  2015
);
console.log(albumSix);
// Added 6 albums to collection.

console.log(collection);
//console.log collection array.

function showCollection(array) {
  console.log(`Number of items: ${array.length}`);
  for (i = 0; i < array.length; i++) {
    let item = array[i];
    console.log(item);
    console.log(
      `${item.title} by ${item.artist}, published in ${item.yearPublished}`
    );
  }
  return "done";
}
console.log(showCollection(collection));

/**
 *
 * @param {String} artist The name of the artist
 * @param {Array} array The items to search through
 * @return {Array} Return the array with the matching results. If no results are found, return an empty array.
 */
function findByArtist(tomato) {
  console.log("findByArtist was called", tomato);
  let matches = [];
  for (let record of collection) {
    console.log(record);
    if(record.artist === tomato){
        matches.push(record);  
    }
    
  }
  return matches;
}
console.log("Matches: ", findByArtist("Sufjan Stevens"));
// console.log("Matches: ", findByArtist("sza"));
// console.log("Matches: ", findByArtist("Dessa"));

