console.log("***** Music Collection *****");

// collection array
let collection = [];

// add to collection function
const addToCollection = (title, artist, yearPublished) => {
  const addition = { title, artist, yearPublished };
  collection.push(addition);
  return addition;
};

// show collection function
const showCollection = (array) => {
  console.log("number of items to show", array.length);
  for (let album of array) {
    const { title, artist, yearPublished } = album;
    console.log(`${title} by ${artist}, published in ${yearPublished}`);
  }
};

// fing by artist function
const findByArtist = (artist) => {
  let results = [];
  for (album of collection) {
    if (album.artist.toLowerCase() === artist.toLowerCase()) {
      results.push(album);
    }
  }

  return results;
};

// test addToCollection
console.log(
  "add to collection:",
  addToCollection("Carnavas", "Silversun Pickups", 2006)
);
console.log(
  "add to collection:",
  addToCollection(
    "The Raven That Refused To Sing (And Other Stories)",
    "Steven Wilson",
    2013
  )
);
console.log(
  "add to collection:",
  addToCollection("Swoon", "Silversun Pickups", 2009)
);
console.log(
  "add to collection:",
  addToCollection("Hand. Cannot. Erase.", "Steven Wilson", 2015)
);
console.log(
  "add to collection:",
  addToCollection("Maps of Non-Existent Places", "Thank You Scientist", 2013)
);
console.log(
  "add to collection:",
  addToCollection("Revolver", "The Beetles", 1966)
);

console.log("collection:", collection);

// test showCollection
showCollection(collection);

// test findByArtist
console.log(
  "Search Results for Silversun Pickups",
  findByArtist("siLveRSun pIckuPs")
);
console.log(
  "Search Results for album not in collection",
  findByArtist("Michael Jackson")
);
