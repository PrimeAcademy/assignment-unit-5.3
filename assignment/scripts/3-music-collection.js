console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
    // console.log('this is this:', this);
    this.title = title,
        this.artist = artist,
        this.yearPublished = yearPublished;
    this.tracks = tracks;
    collection.push(this);
    // console.log('this is this:', this);
    return this;
}

let album1 = new addToCollection('BB U OK?', 'San Holo', 2021,
    [{ name: 'Find Your Way:', duration: '3:45' },
    { name: 'Make This Moment Last:', duration: '3:16' },
    { name: 'My Fault:', duration: '3:17' }]
);
let album2 = new addToCollection('Recovery', 'Eminem', 2010,
    [{ name: 'No Love:', duration: '5:00' },
    { name: 'Love The Way You Lie:', duration: '4:23' },
    { name: 'Not Afraid:', duration: '4:08' }]
);
let album3 = new addToCollection('Last Young Renegade', 'All Time Low', 2017,
    [{ name: 'Ground Control:', duration: '3:56' },
    { name: 'Drugs & Candy', duration: '3:37' },
    { name: 'Good Times', duration: '3:44' }]
);
let album4 = new addToCollection('Songs About Stuff', 'Nur-D', 2019,
    [{ name: 'Black Wizard Wave', duration: '2:58' },
    { name: 'Tyler Breeze', duration: '3:46' },
    { name: 'Sincerely Yours', duration: '3:04' }]
);
let album5 = new addToCollection('Disconnect', 'Phantoms', 2019,
    [{ name: 'Say It', duration: '3:25' },
    { name: 'Are You Up', duration: '3:54' },
    { name: 'Hold On', duration: '3:17' }]
);
let album6 = new addToCollection('Trapped in My Room', 'Nur-D', 2020,
    [{ name: 'We Did It', duration: '2:37' },
    { name: 'Strut', duration: '3:24' },
    { name: '6 Foot(Also Wash Your Hands)', duration: '1:33' }]
);
console.log({ collection });



function showCollection(array) {
    console.log('Number of albums in my collection:', array.length);
    for (let album of array) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}:`, album.tracks);
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

console.log({ artistTest1: findByArtist('Eminem') });
console.log({ artistTest2: findByArtist('Nur-D') });
console.log({ artistTest3: findByArtist() });


function search(object) {
    if (!object) {
        return collection;
    }
    let collectionMatches = [];
    // If search object has a property called 'trackName', only search for that
    if (object.trackName) {
        for (let album of collection) {
            for (let track of album.tracks) {
                if (track.name === object.trackName) {
                    collectionMatches.push(album)
                }
            }
        }
    } else {
        for (let album of collection) {
            if (album.artist === object.artist && album.yearPublished === object.year) {
                collectionMatches.push(album);
            }
        }
    }
    return collectionMatches;
}


console.log({ searchTest1: search({ artist: 'Nur-D', year: 2019 }) });
console.log({ searchTest2: search({ artist: 'Nur-D', year: 2022 }) });
console.log({ searchTest3: search() });
console.log({ searchTest4: search({ artist: 'Nur-D', year: 2022, trackName: 'Black Wizard Wave'}) });

