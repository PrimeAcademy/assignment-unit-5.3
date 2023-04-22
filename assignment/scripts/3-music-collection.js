console.log("***** Music Collection *****");

// collection array
let collection = [];

// ---------------
// Functions
// ---------------

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

const search = ({ artist, year } = {}) => {
  if (!artist || !year) {
    return collection;
  }
  const results = collection.filter((album) => {
    return (
      artist.toLowerCase() === album.artist.toLowerCase() &&
      year === album.yearPublished
    );
  });

  return results;
};

// ----------
// Tests
// ----------

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

// test search
console.log(
  "add item for multiple matches",
  addToCollection("Search Test", "Silversun Pickups", 2006)
);
console.log("--- Search ---");
console.log("No Search Object shows entire collection", search());
console.log("Shows a match", search({ artist: "Steven Wilson", year: 2013 }));
console.log(
  "Shows multiple matches",
  search({ artist: "silVerSUn pickups", year: 2006 })
);
console.log(
  "criteria doesn't match returns empy array",
  search({ artist: "Steven Wilson", year: 2014 })
);
