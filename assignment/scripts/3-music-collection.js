console.log('***** Music Collection *****')


let collection = [];

function addToCollection(title, artist, yearPublished, tracks){
    let newAlbum = {
        title: title ,
        artist: artist ,
        yearPublished: yearPublished,
        tracks: tracks,
    }
    collection.push(newAlbum);
    return collection;
};

console.log('--add to collection--');
console.log('New album added:', addToCollection('Enema of the State', 'blink 182', '1999'));
console.log('New album added:', addToCollection('Take Off Your Pants and Jacket', 'blink 182', '2001'));
console.log('New album added:', addToCollection('The Colour and the Shape', ' Foo Fighters', '1997'));
console.log('New album added:', addToCollection('By the Way', 'Red Hot Chili Peppers', '2002'));
console.log('New album added:', addToCollection('Dookie', 'Green Day', '1994'));
console.log('New album added:', addToCollection('Meteora', 'Linkin Park', '2003'));
console.log('New album added:', addToCollection('Hot Fuss', 'The Killers', '2004'));

console.log('My album collection:',collection);

console.log('--SHOW COLLECTION FUNCTION--');

// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(albumArray){
    console.log('My albums so far:',albumArray.length)
    for (newAlbum of albumArray){
        console.log(`${newAlbum.title} by ${newAlbum.artist} in ${newAlbum.yearPublished}`);
    }
    return albumArray;
}
console.log('About my collection:', showCollection(collection)); 

console.log('--FIND BY ARTIST FUNCTION--');


// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

  
function findByArtist(artist){
    let artistArray = []
    for (let newAlbum of collection){
        if (artist.toLowerCase() === newAlbum.artist.toLowerCase());
        artistArray.push(newAlbum);
        return artistArray;
    } 
    return artistArray;
}

console.log('Album by same artist:', findByArtist('Blink 182'));
console.log({artistTest1: findByArtist('blink182')});

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the 
// collection, as well as an artist you know is not in your collection. Check that for 
// artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch goals

// console.log(JSON.stringify(collection));

// function search(toSearch){
//     musicSearch = [];
//     for (recor of collection){
//         if(record === toSearch){
//            collection.push(toSearch) 
//         }else{
//             return collection;
//         }
//     }
// }

// search('blink 182');

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a 
// search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return 
// all albums in the `collection`.

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`.
//  You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of 
// tracks.
//   - Update `search` to allow a `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, ignoring any 
// `artist` or `year` properties.
//   - Update the `showCollection` function to display the list of tracks for each album with 
// its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```



