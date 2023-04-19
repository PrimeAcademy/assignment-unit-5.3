console.log('***** Music Collection *****')

// collection array
let collection = [];

// add to collection function
const addToCollection = (title, artist, yearPublished)=>{
const addition = {title,artist,yearPublished};
collection.push(addition);
return addition;
}
// test addToCollection
console.log("add to collection:", addToCollection("Carnavas", "Silversun Pickups", 2006));
console.log("add to collection:", addToCollection("The Raven That Refused To Sing (And Other Stories)", "Steven Wilson", 2013));
console.log("add to collection:", addToCollection("Swoon", "Silversun Pickups", 2009));
console.log("add to collection:", addToCollection("Hand. Cannot. Erase.", "Silversun Pickups", 2015));
console.log("add to collection:", addToCollection("Maps of Non-Existent Places", "Thank You Scientist", 2013));
console.log("add to collection:", addToCollection("Revolver", "The Beetles", 1966));

console.log("collection:", collection);