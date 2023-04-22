console.log("***** Music Collection *****");

collection = [];

function addToCollection(title, artist, yearPublished) {
  let tempCollection = {
    title: `${title}`,
    artist: `${artist}`,
    yearPublished: `${yearPublished}`,
  };
  collection.push(tempCollection);
  console.log(collection);
}

addToCollection("Little Sunshine", "Ghost", 2022);
