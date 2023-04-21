console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
let newObject = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    };
    collection.push(newObject);
    {return newObject
    }}
   //without calling the function it does not show anything in Console Browser.

let album1 = addToCollection('Lofi', 'PapaSmurf', 2023);
console.log('Added album 1', album1);
    // title: 'Lofi',
    // artist: 'PapaSmurf',
    // yearPublished: 2023,
    // }

let album2 = addToCollection('Animals', 'Maroon 5', 2018);
console.log('Added album 2', album2);
  
let album3 = addToCollection('Graduation', 'Kanye West', 2007);
console.log('Added album 3', album3);

let album4 = addToCollection('Metallica', 'Metallica', 1991);
console.log('Added album 4', album4);
 
let album5 = addToCollection('Depression', 'Dax', 2022);
console.log('Added album 5', album5);
  
let album6 = addToCollection('Evolve', 'Imagine Dragons', 2017);
console.log('Added album 6', album6);
   
console.log(collection);
// added 6 albums to collection array and console log they were added.


//create a new function
function showCollection(albums) {
console.log(`There are ${albums.length} albums in the collection: `);
//loop over album array
for (let i = 0; i < albums.length; i++) {
console.log(`${albums[i].title} by ${albums[i].artist},
published in ${albums[i].yearPublished}`)}
}

showCollection(collection);

// new function
function findByArtist(artist){
let matchingArtist = [];
for (let i = 0; i < collection.length; i++) {
if (collection[i].artist === artist) {
matchingArtist.push(collection[i]);}
}
return matchingArtist;
}

//test function
let papaSmurfAlbums = findByArtist('PapaSmurf');
console.log(`Found ${papaSmurfAlbums.length} albums by papaSmurf`);

let slimShadyAlbums = findByArtist('slimShady');
console.log(`Found ${slimShadyAlbums.length} albums by slimShady`);