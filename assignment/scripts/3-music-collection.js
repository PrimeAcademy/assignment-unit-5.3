console.log('***** Music Collection *****');

// global variabls
let collection = [];

// functions
let addToCollection = (title, artist, yearPublished) => {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(album);
    return album;
};

let showCollection = (albumArray) => {
    console.log(`Number of albums: ${albumArray.length}`);
    for (let album of albumArray) {
        console.log(
            `${album.title} by ${album.artist},` +
                ` released in ${album.yearPublished}`
        );
    }
};

// main
console.log('Before adding:', collection);

addToCollection('Emotions and Math', 'Margaret Glaspy', 2016);
addToCollection('Bad Brains', 'Bad Brains', 1982);
addToCollection('Slow Train Coming', 'Bob Dylan', 1979);
addToCollection("The Freewheelin' Bob Dylan", 'Bob Dylan', 1963);
addToCollection('What Would the Community Think', 'Cat Power', 1996);
addToCollection('Motel Shot', 'Delaney & Bonnie', 1971);
addToCollection('Schooners', 'Gordon Bok', 1992);
addToCollection('Cop and Speeder', 'Heatmiser', 1992);
addToCollection('John Prine', 'John Prine', 1971);
addToCollection('Sweet Revenge', 'John Prine', 1973);
addToCollection('Bruised Orange', 'John Prine', 1978);
addToCollection('In My Own Time', 'Karen Dalton', 1971);
addToCollection('The Dreaming', 'Kate Bush', 1982);
addToCollection('LUSH', 'Mitski', 2012);
addToCollection('Puberty 2', 'Mitski', 2016);
addToCollection('Be the Cowboy', 'Mitski', 2018);

console.log('After adding:', collection);

showCollection(collection);
