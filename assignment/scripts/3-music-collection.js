console.log("***** Music Collection *****");
// ---------------
// Data
// ---------------
import { tracksData, testTracks, testTracks7 } from "../utils/tracksData.js";
import { formatDuration } from "../utils/formatDuration.js";

// collection array
let collection = [];

// ---------------
// Functions
// ---------------

// add to collection function
const addToCollection = (title, artist, yearPublished, tracks) => {
  const addition = { title, artist, yearPublished, tracks };
  collection.push(addition);
  return addition;
};

// show collection function
const showCollection = (array) => {
  console.log("number of items to show", array.length);
  for (let album of array) {
    const { title, artist, yearPublished } = album;
    console.log(`${title} by ${artist}, published in ${yearPublished}`);
    for (let i = 0; i < album.tracks.length; i++) {
      console.log(
        `${i + 1}. ${album.tracks[i].name}: ${formatDuration(
          album.tracks[i].duration
        )}`
      );
    }
  }
};

// fing by artist function
const findByArtist = (artist) => {
  let results = [];
  for (let album of collection) {
    if (album.artist.toLowerCase() === artist.toLowerCase()) {
      results.push(album);
    }
  }

  return results;
};

const search = ({ artist, year, trackName = "" } = {}) => {
  if (trackName) {
    const results = collection.filter((album) => {
      for (let track of album.tracks) {
        if (track.name.toLowerCase() === trackName.toLowerCase()) {
          return true;
        }
      }
      return false;
    });
    return results;
  }
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

// duration = number in milleseconds

console.log(
  "add to collection:",
  addToCollection("Carnavas", "Silversun Pickups", 2006, tracksData.carnavas)
);
console.log(
  "add to collection:",
  addToCollection(
    "The Raven That Refused To Sing (And Other Stories)",
    "Steven Wilson",
    2013,
    tracksData.theRavenThatRefusedToSing
  )
);
console.log(
  "add to collection:",
  addToCollection("Swoon", "Silversun Pickups", 2009, testTracks)
);
console.log(
  "add to collection:",
  addToCollection("Hand. Cannot. Erase.", "Steven Wilson", 2015, testTracks7)
);
console.log(
  "add to collection:",
  addToCollection(
    "Maps of Non-Existent Places",
    "Thank You Scientist",
    2013,
    testTracks
  )
);
console.log(
  "add to collection:",
  addToCollection("Revolver", "The Beetles", 1966, testTracks7)
);

console.log("collection:", collection);

// test showCollection
console.log("--My Colection of music--");
showCollection(collection);

// test search
console.log("---- Search ----");
// test findByArtist
console.log("   --find by artist--");
console.log(
  "Artist Search Results for Silversun Pickups",
  findByArtist("siLveRSun pIckuPs"),
  showCollection(findByArtist("siLveRSun pIckuPs"))
);
console.log(
  "Artist Search Results for artist not in collection",
  findByArtist("Michael Jackson")
);

console.log("   --search by track--");

console.log(
  "add item for multiple matches",
  addToCollection("Search Test", "Silversun Pickups", 2006, testTracks)
);

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

console.log(
  "trackname only search returns results",
  search({ trackName: "Track 7" })
);
console.log(
  "if trackname ignores otoher criteria",
  search({ artist: "Bob Dylan", year: 1963, trackName: "Track 7" })
);
console.log(
  "real trackname search works",
  search({ artist: "Steven Wilson", year: 500021.3, trackName: "Drive Home" })
);
console.log("real trackname search using showCollection");
showCollection(
  search({ artist: "Steven Wilson", year: 500021.3, trackName: "Drive Home" })
);
