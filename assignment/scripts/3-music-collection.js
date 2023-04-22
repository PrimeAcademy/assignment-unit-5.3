console.log('***** Music Collection *****');

let collection = [];

let addToCollection = (title, artist, yearPublished) => {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(album);
    return album;
};

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

console.log('After adding:', collection);
