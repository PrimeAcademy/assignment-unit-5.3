console.log("***** Music Collection *****");

collection = [];

function addToCollection(title, artist, yearPublished) {
  collection.push(title, artist, yearPublished);
  console.log(collection);
}

addToCollection("Little Sunshine", "Ghost", 2022);
