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

let albumOne = addToCollection("ctrl", "SZA", "2017");
console.log(albumOne);
let albumTwo = addToCollection("The Miseducation of Lauryn Hill", "Lauryn Hill", "1998");
console.log(albumTwo);
let albumThree = addToCollection("SOS", "SZA", "2022");
console.log(albumThree);
let albumFour = addToCollection("Whats going on", "Marvin Gaye", "1971");
console.log(albumFour);
let albumFive = addToCollection("Blond", "Frank Ocean", "2017");
console.log(albumFive);
let albumSix = addToCollection("Off the Wall", "Michael Jackson", "1979");
console.log(albumSix);
console.log(collection);

function showCollection(array) {
 console.log(`Number of items in the array ${array}`);   
for (let myArray of array) {
    console.log(`${myArray.title} by ${myArray.artist} in ${myArray.yearPublished}`);
}
}
showCollection((collection));




function findByArtist(artist) {
    let holdArray = [];
    for (let match of collection) {
    if(match.artist === artist) {
        holdArray.push(match);
        
        }
    }
        return holdArray;
    }
  let artistFound = findByArtist("SZA");
  console.log(artistFound);

  let artistNotFound = findByArtist("Maxwell");
  console.log(artistNotFound);

  describe("find artisit", () => {
    it("add matching artiist to the array", () => {
    expect(findByArtist("SZA")).toEqual("2")
    })
    });

    describe("find artisit", () => {
        it("add matching artiist to the array", () => {
        expect(findByArtist("Maxwell")).toEqual("0")
        })
        });

