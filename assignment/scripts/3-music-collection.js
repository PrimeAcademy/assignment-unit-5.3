console.log('***** Music Collection *****');

const collection = [];

const addToCollection = (title, artist, yearPublished) => {
  const album = {
    title,
    artist,
    yearPublished,
  };
  collection.push(album);
  return album;
};

const showCollection = (collectionArray) => {
  console.log(collectionArray.length);
  collectionArray.forEach((album) => {
    console.log(
      `${album.title} by ${album.artist}, published in ${album.yearPublished}`
    );
  });
};

// add content to collection
addToCollection('Tonight, Tonight', 'The Smashing Pumpkins', 1995);
addToCollection('Fake Plastic Trees', 'Radiohead', 1995);
addToCollection('The National Anthem', 'Radiohead', 2000);
addToCollection('Smells Like Teen Spirit', 'Nirvana', 1991);
addToCollection('Fight The Power', 'Public Enemy', 1989);

// test showCollection
showCollection(collection);

// findByArtist
const findByArtist = (artist) => {
  return collection.filter(
    (song) => song.artist.toLowerCase() === artist.toLowerCase()
  );
};

// test findByArtist
// multiple finds
const radioheadSongs = findByArtist('Radiohead');
console.log('\nSongs by Radiohead:', radioheadSongs);
// single find, also test that function is not case sensitive
const smashingPumpkinsSongs = findByArtist('the smashing pumpkins');
console.log('\nSongs by The Smashing Pumpkins:', smashingPumpkinsSongs);
// no find, returns empty array
const biggieSmallsSongs = findByArtist('The Notorious B.I.G.');
console.log('\nSongs by The Notorious B.I.G.', biggieSmallsSongs);
