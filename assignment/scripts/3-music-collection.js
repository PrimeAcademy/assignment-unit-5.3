console.log('***** Music Collection *****')
let collection = [];
console.log(collection);

function addToCollection(title, artist, yearPublished) {
let records = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
};
collection.push(records);
return records;
}

