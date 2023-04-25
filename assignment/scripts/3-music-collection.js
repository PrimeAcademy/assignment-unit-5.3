console.log('***** Music Collection *****')

// Created a variable empty array called collection
let collection = [];

// function addToCollection, with parameters for title, artist, yearPublished
// function takes in album objects and pushes into collection array
// added an album to the collection with objects
function addToCollection(title, artist, yearPublished) {
    let album = {
          title: title,
          artist: artist,
          yearPublished: yearPublished
    };
    collection.push(album);
    return album;
}
console.log(addToCollection('Thriller', 'Michael Jackson', '1982'));

// Testing the addToCollection function
// Added 5 more albums to the collection. 
// console logged the collection array
console.log(addToCollection('Bad', 'Michael Jackson', '1987'));
console.log(addToCollection('All Eyez On Me', '2Pac', '1996'));
console.log(addToCollection('The College Dropout', 'Kanye West', '2004'));
console.log(addToCollection('Exodus', 'Bob Marley', '1977'));
console.log(addToCollection('Legacy', 'Bob Marley', '1982'));
console.log(collection);


// function showCollection, parameter array
// console logging number of items in array
// looping through collection and formatting it to show collection!
function showCollection(array) {
    console.log(`Number of albums in collection : ${array.length}`);
    for (let album of array) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}
showCollection(collection);

// function findByArtist, parameter artist
// Looping through the collection and adding objects with a matching artist to the results array.
function findByArtist(artist) {
  let results = [];
  for (let _album of collection) {
    if (_album.artist === artist) {
      results.push(_album);
    }
  }
  return results;
}
// Testing the findByArtist function
console.log('Finding Artist Bob Marley in Collection(expect 2 results): ', findByArtist('Bob Marley'));
console.log('Finding Artist Lil Wayne in Collection(expect 0 results): ', findByArtist('Lil Wayne'));
console.log('Finding Artist 2Pac in Collection(expect 1 result): ', findByArtist('2Pac'));