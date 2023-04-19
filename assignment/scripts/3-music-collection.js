console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    var album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(album);
    return album;
}

console.log('Adding album: ', addToCollection('Ride the Lightning', 'Metallica', '1984'));
console.log('Adding album: ', addToCollection('III', 'Lumineers', '2019'));
console.log('Adding album: ', addToCollection('717 Tapes', 'Warren Zeiders', '2022'));
console.log('Adding album: ', addToCollection('Garage, Inc.', 'Metallica', '1998'));
console.log('Adding album: ', addToCollection('Dance Fever', 'Florence and the Machine', '2022'));
console.log('Adding album: ', addToCollection('Orange Blood', 'Mt. Joy', '2022'));
console.log('The full collection is: ', collection);

function showCollection(array) {
    console.log(`The collection is ${array.length} albums.`)
    for (let album of array) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}

showCollection(collection);

// start findByArtist