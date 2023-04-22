console.log('***** Music Collection *****');

const collection = [];

const addToCollection = (title, artist, yearPublished, tracks) => {
  const album = {
    title,
    artist,
    yearPublished,
    tracks,
  };
  collection.push(album);
  return album;
};

const showCollection = (collectionArray) => {
  console.log(collectionArray.length);
  collectionArray.forEach((album) => {
    console.log(
      `\n${album.title} by ${album.artist}, published in ${album.yearPublished}`
    );
    console.log('*'.repeat(60));
    console.log();
    album.tracks.forEach((track, i) =>
      console.log(`${i + 1}. ${track.name} ${track.duration}`)
    );
  });
};

const mellonCollieTracks = [
  { name: 'Mellon Collie and the Infinite Sadness', duration: '2:52' },
  { name: 'Tonight, Tonight', duration: '4:14' },
  { name: 'Jellybelly', duration: '3:01' },
  { name: 'Zero', duration: '2:40' },
];

const theBendsTracks = [
  { name: 'Planet Telex', duration: '4:19' },
  { name: 'The Bends', duration: '4:06' },
  { name: 'High and Dry', duration: '4:17' },
  { name: 'Fake Plastic Trees', duration: '4:50' },
];

const kidATracks = [
  { name: "Everything In It's Right Place", duration: '4:11' },
  { name: 'Kid A', duration: '4:44' },
  { name: 'The National Anthem', duration: '5:51' },
  { name: 'How to Dissapear Completely', duration: '5:56' },
];

const nevermindTracks = [
  { name: 'Smells Like Teen Spirit', duration: '5:01' },
  { name: 'In Bloom', duration: '4:14' },
  { name: 'Come As You Are', duration: '3:39' },
  { name: 'Breed', duration: '3:03' },
];

const fearOfABlackPlanetTracks = [
  { name: 'Contract on the World Love Jam', duration: '1:44' },
  { name: 'Brothers Gonna Work It Out', duration: '5:07' },
  { name: '911 Is a Joke', duration: '3:17' },
  { name: 'Incident at 66.6 FM', duration: '1:37' },
];

// add content to collection
addToCollection(
  'Mellon Collie and the Infinite Sadness',
  'The Smashing Pumpkins',
  1996,
  mellonCollieTracks
);
addToCollection('The Bends', 'Radiohead', 1995, theBendsTracks);
addToCollection('Kid A', 'Radiohead', 2001, kidATracks);
addToCollection('Nevermind', 'Nirvana', 1992, nevermindTracks);
addToCollection(
  'Fear of a Black Planet',
  'Public Enemy',
  1990,
  fearOfABlackPlanetTracks
);

// test showCollection
showCollection(collection);

// findByArtist
const findByArtist = (artist) => {
  return collection.filter(
    (album) => album.artist.toLowerCase() === artist.toLowerCase()
  );
};

// test findByArtist
// multiple finds
const radiohead = findByArtist('Radiohead');
console.log('\nSongs by Radiohead:', radiohead);
// single find, also test that function is not case sensitive
const smashingPumpkins = findByArtist('the smashing pumpkins');
console.log('\nSongs by The Smashing Pumpkins:', smashingPumpkins);
// no find, returns empty array
const biggieSmalls = findByArtist('The Notorious B.I.G.');
console.log('\nSongs by The Notorious B.I.G.', biggieSmalls);

// search
const search = (searchObj = { artist: '', year: '', trackName: '' }) => {
  const { artist, year, trackName } = searchObj;
  // search track, ignoring artist and year
  if (trackName) {
    return collection.filter((album) =>
      album.tracks.find((track) => track.name === trackName)
    );
  }
  // search for artist and year
  if (searchObj.artist && searchObj.year) {
    return collection.filter(
      (album) => album.artist === artist && album.yearPublished === year
    );
  }
  // else return collection if criteria was not provided
  return collection;
};

// search tests
// one album
const publicEnemy1990Search = search({ artist: 'Public Enemy', year: 1990 });
console.log('Should log one album');
console.log(publicEnemy1990Search);

// empty array
const notFoundSearch = search({ artist: 'Public Enemy', year: 1995 });
console.log('Should log empty array');
console.log(notFoundSearch);

// full collection
const emptySearch = search();
console.log('Should log full collection');
console.log(emptySearch);

// search for a track, should log album track belongs to
const tonightTrackSearch = search({ trackName: 'Tonight, Tonight' });
console.log('Should log The Smashing Pumpkins album');
console.log(tonightTrackSearch);

const plasticTrackSearch = search({ trackName: 'Fake Plastic Trees' });
console.log('Should log Radiohead album');
console.log(plasticTrackSearch);
