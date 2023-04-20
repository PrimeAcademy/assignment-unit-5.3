console.log('***** Music Collection *****')
let collection = [];

function addToCollection (album) {
    collection.push(album);
}

const album1 = {
    title: 'Hopes And Fears',
    artist: 'Keane',
    yearPublished: '2004'
}

const album2 = {
    title: 'A Thousand Suns',
    artist: 'Linkin Park',
    yearPublished: '2010'
}
const album3 = {
    title: 'How To Conquer A Land',
    artist: 'And The Golden Choir',
    yearPublished: '2017'
}
const album4 = {
    title: 'Riot!',
    artist: 'Paramore',
    yearPublished: '2007'
}
const album5 = {
    title: 'Hot Fuss',
    artist: 'The Killers',
    yearPublished: '2004'
}
const album6 = {
    title: 'Minutes to Midnight',
    artist: 'Linkin Park',
    yearPublished: '2007',
}
addToCollection(album1);
addToCollection(album2);
addToCollection(album3);
addToCollection(album4);
addToCollection(album5);
addToCollection(album6);
console.log(collection);