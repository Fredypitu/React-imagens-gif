export const GetGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=b2jBi1cAo6nOwXuF73FTu5suFDhTcgxX&q=${categoria}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const info = data.map(x => ({
        id: x.id,
        title: x.title,
        url: x.images.downsized_medium.url,
    }))
    return info;
}