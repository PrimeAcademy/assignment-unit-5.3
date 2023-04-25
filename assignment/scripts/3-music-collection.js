console.log('***** Music Collection *****')

// Created a variable called collection and
// the function addToCollection

let collection = [];

function addToCollection (title, artist, year) {
    let album = {
        title,
        artist,
        yearPublished: year,
    };
    collection.push(album)
    return collection;
}

// let album1 = {
//     title: 'Hopes And Fears',
//     artist: 'Keane',
//     yearPublished: '2004',
//     tracks: ['Somewhere Only We Know', 'Everybody\'s Changing', 'This Is the Last Time']
// }

// let album2 = {
//     title: 'A Thousand Suns',
//     artist: 'Linkin Park',
//     yearPublished: '2010',
//     tracks: ['Burning In the Skies', 'Robot Boy', 'Waiting for the End']
// }
// let album3 = {
//     title: 'How To Conquer A Land',
//     artist: 'And The Golden Choir',
//     yearPublished: '2017',
//     tracks: {
//         Name:'How to Conquer A Land',
//         Duration: '3:44'
//     }
// }
// let album4 = {
//     title: 'Riot!',
//     artist: 'Paramore',
//     yearPublished: '2007',
//     tracks: ['That\'s What You Get', 'Misery Business', 'crushcrushcrush']
// }
// let album5 = {
//     title: 'Hot Fuss',
//     artist: 'The Killers',
//     yearPublished: '2004',
//     tracks: ['Mr. Brightside', 'Smile Like You Mean It']
// }
// let album6 = {
//     title: 'Minutes to Midnight',
//     artist: 'Linkin Park',
//     yearPublished: '2007',
//      tracks: ['What I\'ve Done', 'Shadow of the Day', 'In Pieces']
// }

// Added each album to collection. Logging each one in connsole and then
// logging the collection array.

addToCollection("Hopes And Fears", "Keane", "2004");
console.log(collection[0]);

addToCollection("A Thousand Suns", "Linkin Park", "2010");
console.log(collection[1]);

addToCollection("How To Conquer A Land", "And The Golden Choir", "2017");
console.log(collection[2]);

addToCollection("Riot!", "Paramore", "2007");
console.log(collection[3]);

addToCollection("Hot Fuss", "The Killers", "2004");
console.log(collection[4]);

addToCollection("Minutes to Midnight", "Linkin Park", "2007");
console.log(collection[5]);

console.log(collection);

// Created a function called showCollection

function showCollection(collection) {
    console.log("Number of albums in Collection: ", collection.length);

    for (album of collection) {
            console.log(album.title + " by " + album.artist + ", published in " + album.yearPublished);
    }
}
// // Tested function showCollection

showCollection(collection);

// // Created function findByArtist

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

// // Stretch goals

// // Created search function

function search (item) {
    let searchResults = [];
    for (let album of collection) {
        if (album.artist === item || album.yearPublished === item) {
            searchResults.push("artist: " + album.artist + ", year: " + album.yearPublished);
        } else {
            searchResults;
        }
    }
    if (!item) {
            searchResults.push(collection);
        }
    return searchResults;
}

// Testing search function
console.log(search("Linkin Park"));
console.log(search("Keane"));
console.log(search("2000"));
console.log(search(""));

// Adding array of tracks
