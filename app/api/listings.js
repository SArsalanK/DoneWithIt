import client from "./client";

const endpoint = './listings'

const getListings = () => client.get(endpoint)

const addListing = (listing, onUploadProgress) => {
    const data = new FormData()
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('description', listing.description);
    data.append('categoryId', listing.category.value);

    for (let i = 0; i < listing.imageUris.length - 1; i++) {
        data.append('images', listing.imageUris[i])
    }

    if (listing.location) {
        data.append('location', JSON.stringify(listing.location))
    }

    return client.post(endpoint, data, {
        onUploadProgress: progress => (onUploadProgress(progress.loaded / progress.total))
    })
}

export default {
    getListings,
    addListing
}