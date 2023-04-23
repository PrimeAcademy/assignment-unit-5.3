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
    console.log('Number of items in the array: ' + arrayParameter.length);
     for (let loopedArray of arrayParameter) {
       console.log(loopedArray);
     }
   }

   //Test:
   let arrayParameter = ['Californication', 'Red Hot Chili Peppers', 1999];

showCollection(arrayParameter);

//Another test array on the function showCollection;

let practiceArray = ['Tekkno', 'Electric Callboy', 2022];
console.log(showCollection(practiceArray));

//Adding in a function to find artist;

function findbyArtist(artist) {
    let newArtistArray = [];
    for (let pulledArtist of Collection){
        if (artist === pulledArtist.artist) {
            newArtistArray.push(pulledArtist) 
     } 
     console.log(newArtistArray);
  }
}

let artist = 'Electric Callboy';

//Testing the function 

console.log(findbyArtist(artist));
