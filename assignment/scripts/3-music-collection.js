console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    // console.log('this is this:', this);
    this.title = title,
    this.artist = artist,
    this.yearPublished = yearPublished;
    collection.push(this);
    // console.log('this is this:', this);
    return this;
}

let album1 = new addToCollection('BB U OK?', 'San Holo', 2021);
let album2 = new addToCollection('Recovery', 'Eminem', 2010);
let album3 = new addToCollection('Last Young Renegade', 'All Time Low', 2017);
let album4 = new addToCollection('Songs About Stuff', 'Nur-D', 2019);
let album5 = new addToCollection('Disconnect', 'Phantoms', 2019);
let album6 = new addToCollection('Trapped in My Room', 'Nur-D', 2020);
console.log({collection});



function showCollection(array) {
    console.log('Number of albums in my collection:', array.length);
    for (let album of array) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`)
    }
}

showCollection(collection);


function findByArtist(artist) {
let artistCollection = [];
    for (let album of collection) {
        if (album.artist === artist) {
            artistCollection.push(album);
        }
    }
    return artistCollection;
}

console.log({artistTest1:findByArtist('Eminem')});
console.log({artistTest2:findByArtist('Nur-D')});
console.log({artistTest3:findByArtist()});


function search(object) {
    if (!object) {
        return collection;
    }
    let collectionMatches = [];
    for (let album of collection) {
        if (album.artist === object.artist && album.yearPublished === object.year) {
            collectionMatches.push(album);
        }
    }
    return collectionMatches;
}

console.log({searchTest1:search({artist: 'Nur-D', year: 2019})});
console.log({searchTest2:search({artist: 'Nur-D', year: 2022})});
console.log({searchTest3:search()});
