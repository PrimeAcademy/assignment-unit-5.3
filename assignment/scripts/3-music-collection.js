console.log('***** Music Collection *****')

// Created a variable called collection and wrote
// the function addTo Collection

let collection = [];

function addToCollection (album) {
    collection.push(album);
    return album;
}

// Created objects for each album with their properties

const album1 = {
    title: 'Hopes And Fears',
    artist: 'Keane',
    yearPublished: '2004'
}

const album2 = {
    title: 'A Thousand Suns',
    artist: 'Linkin Park',
    yearPublished: '2010'
}
const album3 = {
    title: 'How To Conquer A Land',
    artist: 'And The Golden Choir',
    yearPublished: '2017'
}
const album4 = {
    title: 'Riot!',
    artist: 'Paramore',
    yearPublished: '2007'
}
const album5 = {
    title: 'Hot Fuss',
    artist: 'The Killers',
    yearPublished: '2004'
}
const album6 = {
    title: 'Minutes to Midnight',
    artist: 'Linkin Park',
    yearPublished: '2007',
}

// Added each album to collection. Logging each one in connsole and then
// logging the collection array.

addToCollection(album1);
console.log(album1);

addToCollection(album2);
console.log(album2);

addToCollection(album3);
console.log(album3);

addToCollection(album4);
console.log(album4);

addToCollection(album5);
console.log(album5);

addToCollection(album6);
console.log(album6);

console.log(collection);

// Created a function called showCollection

function showCollection(collection) {
    console.log("Number of albums in Collection: ", collection.length);

    for (album of collection) {
            console.log(album.title + " by " + album.artist + ", published in " + album.yearPublished);
    }
}
// Tested function showCollection

showCollection(collection);

// Created function findByArtist

function findByArtist(artist) {
    let results = [];
    for (let album of collection) {
        if (album.artist === artist) {
            results.push(album);
        }
    }
    return results;
} 
// Tested function findByArtist

console.log(findByArtist("Linkin Park"));
console.log(findByArtist("Paramore"));
console.log(findByArtist("Coldplay"));

// Stretch goals

// Created search function

function search (artist, year) {
    let searchResults = [];
    for (let album of collection) {
        if (album.artist === artist && album.yearPublished === year) {
            searchResults.push("artist: " + album.artist + ", year: " + album.yearPublished);
        }
    }
    if (artist || year) {
            searchResults;
    }
    if (!artist && !year) {
            searchResults.push(collection);
        }
    return searchResults;
}

// Testing search function
console.log(search("Linkin Park", "2010"));
console.log(search("Keane"));
console.log(search("2000"));
console.log(search(""));

// Adding array of tracks
