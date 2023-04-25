console.log('***** Music Collection *****')

//create a variable collection that starts an empty array

let collection = [];


function addToCollection(title, artist, yearPublished) {
// Create a new object having the above properties
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }; 

// Add the new object to the end of the collection array
// Return the newly created object
    collection.push(album);
    return album;
}

// Test the addToCollection function:

console.log(addToCollection('Starboy', 'The Weekend', 2016))
console.log(addToCollection('Un Verano Sin Ti', 'Bad Bunny', 2022))
console.log(addToCollection('Take Care', 'Drake', 2011))
console.log(addToCollection('Fearless', 'Taylor Swift', 2008))
console.log(addToCollection('Homesick', 'A Day To Remember', 2009))
console.log(addToCollection('Hall of Fame','Polo G', 2021))

console.log(collection)

function showCollection(albumArray) {
  console.log('Number of items albums in album collection:', albumArray.length);
  for (let album of albumArray) {
    console.log(`${album.title}, ${album.artist}, ${album.yearPublished}`)
  }

}

showCollection(collection);


let artistArray = []; 
function findByArtist(nameOfArtist) { 
    for (let album of collection) {
        if (album.artist === nameOfArtist) {
            artistArray.push(album);
        }
    }
    return artistArray;
}
console.log(findByArtist('Taylor Swift'));
console.log(findByArtist('Bad Bunny'));

//Test for artist not in collection.... return empty array
console.log(findByArtist('Migos'));

console.log(artistArray);



