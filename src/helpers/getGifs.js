export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ojfVqAwmNGhmMUdTPMzmI99nb5qDEG6Q&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  console.log(data);
  const gifts = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifts);
  return gifts;
};
