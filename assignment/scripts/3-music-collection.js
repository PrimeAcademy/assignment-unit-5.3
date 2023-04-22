console.log('***** Music Collection *****')

const collection = [];

const addToCollection = (title, artist, yearPublished) => {
		const album = {
				title,
				artist,
				yearPublished
		}
		collection.push(album);
		return album;
}

const showCollection = (collectionArray) => {
	console.log(collectionArray.length);
	collectionArray.forEach((album) => {
		console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
	}
	)
}