export const getGiff =async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=51XIqX2Bjje69j8DXrXVc4PW6ub6O188&q=${category}&limit=10&offset=0&rating=g&lang=en`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifts = data.map(img =>({
        id: img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }));
    console.log(gifts);
    return gifts;
}