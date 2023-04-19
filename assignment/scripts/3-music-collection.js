console.log('***** Music Collection *****')

let collection = [];

function addToCollenction(title, artist, yearPublished) {
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
    collection.push(this);
    return this;
}


