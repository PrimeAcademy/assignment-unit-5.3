console.log('***** Music Collection *****')

let Collection = [];

let arrayofRecords = [
    {
    
        title: 'Californication',
        artist: 'Red Hot Chili Peppers',
        yearPublished: 1999
    },
    {
        title: 'Stadium Arcadium',
        artist: 'Red Hot Chili Peppers',
        yearPublished: 2006
    },
    {
        title: 'Tekkno',
        artist: 'Electric Callboy',
        yearPublished: 2022
    },
    {
        title: 'Crystals',
        artist: 'Electric Callboy',
        yearPublished: 2015
    },
    {
        title: 'Robot Face',
        artist: 'Caravan Palace',
        yearPublished: 2015
    },
    {
        title: 'Panic',
        artist: 'Caravan Palace',
        yearPublished: 2012
    },
    {
        title: 'Chronologic',
        artist: 'Caravan Palace',
        yearPublished: 2019
    }
];



function addToCollection(title, artist, yearPublished) {
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };

    Collection.push(record);
    return record;
}

console.log(addToCollection(arrayofRecords));

function showCollection(arrayParameter){
    console.log(arrayParameter.length);
     for (let loopedArray of arrayParameter) {
        console.log('Title by', loopedArray.title);
        console.log('Artist:', loopedArray.artist);
        console.log('Published in', loopedArray.yearPublished);
     }
   }

