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