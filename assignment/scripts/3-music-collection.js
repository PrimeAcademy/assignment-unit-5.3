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
//Test #1 adding in a single record
console.log(addToCollection('Tekko', 'Electric Callboy', 2022));

// Test on Array of Records adding a loop to add multiple records to collection
for (let record of arrayofRecords) {
   console.log('Adding Record', addToCollection(record.title, record.artist, record.yearPublished));
}// adding to array 
console.log(Collection);



//Show Collection function
function showCollection(arrayParameter) {
    console.log('Number of items in the array: ' + arrayParameter.length);

    for (let loopedArray of arrayParameter) {
        console.log(`${loopedArray.title} by ${loopedArray.artist}, published in ${loopedArray.yearPublished}. `);
    }
}

//Test:

showCollection(Collection);

//Adding in a function to find artist;

function findbyArtist(artist) {
    let newArtistArray = [];
    for (let pulledArtist of Collection) {
        if (artist === pulledArtist.artist) {
            newArtistArray.push(pulledArtist);
        }         
    }
    return newArtistArray;
}

let artist = 'Electric Callboy';

//Testing the function 

console.log(`Finding all records by ${artist}:` , findbyArtist(artist));


//Stretch Goals

function search(searchParameter) {
    let newRecordSearch = [];
    if (searchParameter === undefined || Object.keys(searchParameter).length === 0) {
        return Collection;
    }
    for (let record of Collection) {
        if (searchParameter.artist == record.artist && record.yearPublished == searchParameter.year) {
            newRecordSearch.push(record);
        }
    }
    return newRecordSearch;
}
//Test for Ray Charles record non-existing in collection;

console.log(search({ artist: 'Ray Charles', year: 1957 }));

//Test for existing collection record;

console.log(search({ artist: 'Red Hot Chili Peppers', year: 2006 }));

//Testing an empty input, should return collection
console.log(search());

//Testing an empty object, should return collection
console.log(search({}));


//Final Stretch Goal

let arrarofTracks = [
    {
        trackOne: 'Around the World 3:59',
        trackTwo:'Californitcation 5:22',
        trackThree: 'Road Trippin 3:26'
        
    },
    {
        trackOne: 'Stadium Arcadium 5:16',
        trackTwo:'21st Century 4:22',
        trackThree: 'She Looks to Me 4:06'
        
    },
     {
        trackOne: 'Spaceman 4:12',
        trackTwo:'We got the moves 3:36',
        trackThree: 'Parasite 2:59'
        
    },
    {
        track: 'Crystals 3:39',
        trackTwo:'Pitch Blease 3:19',
        trackThree: 'My Own Summer 3:41'
        
    },
    {
        trackOne: 'Mighty 3:22',
        trackTwo:'Lay Down 3:09',
        trackThree: 'Wonda 3:44'
        
    },
    {
        trackOne: 'Maniac 4:11',
        trackTwo:'Cotton Heads 3:38',
        trackThree: 'Queens 4:06'
        
    },
    {
        trackOne: 'Fargo 1:20',
        trackTwo:'Moonshine 3:33',
        trackThree: 'Waterguns 3:30'
        
    }
];

let recordswithTracks = arrayofRecords.concat(arrarofTracks);

console.log(recordswithTracks);

//This did not work fully I think I would have to use a for of loop and have the new array
//contain a similar parameter such as artist