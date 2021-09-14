console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
  const obj = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };

  collection.push(obj);
  return obj;
}

//add the albums to the collection
addToCollection('Apocalypse', 'Thundercat', 2009);
addToCollection('7Summers', 'Shaun Martin', 2015);
addToCollection('Motivational Music for the Syncopated Soul', 'Cory Wong', 2019);
addToCollection('The Beyond / Where the Giants Roam', 'Thundercat', 2015);
addToCollection('The Optimist', 'Cory Wong', 2018);
addToCollection('Covers', 'Dirty Loops', 2014);

//testing addToCollection
console.log('***Testing addToCollection');
//console.log(collection);
collection.forEach((obj) => console.log(obj));

// Start showCollection ==============
function showCollection(array){
  //return number of items in array
  console.log('Number of items:', array.length);

  //display info:
  for(let obj of array){
    const title = obj.title;
    const artist = obj.artist;
    const year = obj.yearPublished;

    console.log(`${title} by ${artist}, published in ${year}`)
  }
}

//testing showCollection
console.log('\n***Testing showCollection***');
showCollection(collection);

//start findByArtist ===================
function findByArtist(artist){
  const result = [];

  for(let album of collection){
    if(album.artist === artist) result.push(album);
  }

  return result;
}

//testing findByArtist
console.log('\n***Testing findByArtist***');
console.log(findByArtist('Thundercat')); //should return 2 albums
console.log(findByArtist('Phish')); //should return 0 albums
