console.log('***** Music Collection *****')

let collection = [];

const addToCollection = (title, artist, yearPublished)=>{
const addition = {title,artist,yearPublished};
collection.push(addition);
return addition;
}