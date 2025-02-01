

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=4JIGy41mF71vlDjcLslo2Y5G5f9740KA&q=${category}&rating=g&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}