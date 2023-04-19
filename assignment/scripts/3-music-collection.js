console.log('***** Music Collection *****');

// creating empty collection
let collection = [];

// start addToCollection 
function addToCollection(title, artist, yearPublished) {

    //create album object
    var album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };

    // push the album to the collection & return the album
    collection.push(album);
    return album;
}
// end addToCollection

// adding albums and testing addToCollection
console.log('Adding album: ', addToCollection('Ride the Lightning', 'Metallica', '1984'));
console.log('Adding album: ', addToCollection('III', 'Lumineers', '2019'));
console.log('Adding album: ', addToCollection('717 Tapes', 'Warren Zeiders', '2022'));
console.log('Adding album: ', addToCollection('Garage, Inc.', 'Metallica', '1998'));
console.log('Adding album: ', addToCollection('Dance Fever', 'Florence and the Machine', '2022'));
console.log('Adding album: ', addToCollection('Orange Blood', 'Mt. Joy', '2022'));
console.log('The full collection is: ', collection);


//start showCollection
function showCollection(array) {

    // logging the number of albums
    console.log(`The collection is ${array.length} albums.`);

    // looping through each album, logging values with . operator
    for (let album of array) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}
//end showCollection

//testing showCollection
showCollection(collection);


// start findByArtist
function findByArtist(artist) {

    // init empty array
    let results = [];

    // loop over each object in the collections array
    for (val of collection) {

        // if the artist property of the object = the input, add it to the results array
        if (val.artist === artist) {
            results.push(val);
        }
    }
    //return the results array
    return results;
}
//end findByArtist

// findByArtist testing
console.log('Testing findByArtist, expect 2 album objects: ', findByArtist('Metallica'));
console.log('Testing findByArtist, expect 1 album object: ', findByArtist('Lumineers'));
console.log('Testing findByArtist, expecting an empty array: ', findByArtist('Zach Bryan'));