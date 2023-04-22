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
addToCollection('Smells Like Teen Spirit', 'Nirvana', 1991);
addToCollection('Fight The Power', 'Public Enemy', 1989);

// test showCollection
showCollection(collection);
