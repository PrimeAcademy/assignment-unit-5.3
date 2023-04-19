console.log('***** Music Collection *****');

// creating empty collection
let collection = [];

// start addToCollection 
function addToCollection(title, artist, yearPublished, tracks) {

    // create album object
    var album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        trackList: tracks
    };

    // push the album to the collection & return the album
    collection.push(album);
    return album;
}
// end addToCollection

// adding albums by testing addToCollection
console.log('Adding album: ', addToCollection('Ride the Lightning', 'Metallica', 1984, [{name: 'Ride the Lightning', duration: '6:36'}, {name: 'For Whom The Bell Tolls', duration: '5:09'}]));
console.log('Adding album: ', addToCollection('III', 'Lumineers', 2019, [{name: 'Gloria', duration: '3:36'}]));
console.log('Adding album: ', addToCollection('717 Tapes', 'Warren Zeiders', 2022, [{name: 'Up To No Good', duration: '2:13'}]));
console.log('Adding album: ', addToCollection('Garage, Inc.', 'Metallica', 1998, [{name: 'Whiskey in the Jar', duration: '5:04'}]));
console.log('Adding album: ', addToCollection('Dance Fever', 'Florence and the Machine', 2022, [{name: 'Free', duration: '3:54'}]));
console.log('Adding album: ', addToCollection('Orange Blood', 'Mt. Joy', 2022, [{name: 'Bathroom Light', duration: '3:08'}]));
console.log('The full collection is: ', collection);

console.log('\n -------------- Ending addToCollection, starting showCollection --------------\n ');

// start showCollection
function showCollection(array) {

    // logging the number of albums
    console.log(`The collection is ${array.length} albums.`);

    // looping through each album, logging values with . operator
    for (let album of array) {
        i = 1;
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}:`);
        for (let track of album.trackList) {
            console.log(`${i}. ${track.name}: ${track.duration}`);
            i++;
        }
    }
}
// end showCollection

// testing showCollection
showCollection(collection);

console.log(`\n -------------- Ending showCollection, starting findByArtist --------------\n `);

// start findByArtist
function findByArtist(artist) {

    // init empty array
    let results = [];

    // loop over each object in the collections array
    for (let val of collection) {

        // if the artist property of the object = the input, add it to the results array
        if (val.artist === artist) {
            results.push(val);
        }
    }
    // return the results array
    return results;
}
// end findByArtist

// findByArtist testing
console.log('Testing findByArtist, expect 2 album objects in results array: ', findByArtist('Metallica'));
console.log('Testing findByArtist, expect 1 album object in results array: ', findByArtist('Lumineers'));
console.log('Testing findByArtist, expecting an empty array: ', findByArtist('Zach Bryan'));

console.log(`\n -------------- Ending findByArtist, starting search --------------\n `);


// #### Start of stretch goals ####

// start search
function search(criteria, trackName) {
    // console.log(typeof(criteria), typeof(trackName));

    // create empty array for results
    let searchResults = [];

    // check to see if the criteria is empty or null
    if ((criteria === undefined && trackName === undefined)) {

        // return the whole collection if it is
        return collection;

    } // end if criteria
    
    // trackName is true, search only using trackName
    else if (trackName) {

        // iterate over each object of the array
        for (let val of collection) {

            // iterate over each track in the object's trackList
            for (let track of val.trackList) {

                // if the trackName = name property of the trackList element of album(val) object in collection array, push it to results
                if (trackName === track.name){
                    searchResults.push(val);
                } // end if trackName

            }// end for tracks
        } // end for vals
    } // end else if

    // if criteria is the only value provided, search using that
    else if (criteria && !trackName) {

        // iterate over each object in the array
        for (val of collection) {

            // original logic - if the input artist and year match, add them to the search results
            if (criteria.artist === val.artist && criteria.year === val.yearPublished) {
                searchResults.push(val);

            } // end if
        } // end for
    } // end else if

    //return the updated search results
    return searchResults;

} // end search

// testing search
console.log('Testing search, expect empty array: ', search({artist: 'Ray Charles', year: 1957}));
console.log('Testing search, expect array with 1 object: ', search({artist: 'Metallica', year: 1984}, 'Ride the Lightning'));
console.log('Testing search, expect array w 1 object: ', search({artist: 'Metallica', year: 1984}, 'For Whom The Bell Tolls'));
console.log('Testing search, expect array with 1 object: ', search({artist: 'Florence and the Machine', year: 2022}));
console.log('Testing search(empty), expect to see the full collection: ', search());

