

export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=IkVuUBein6VECwmBiiko7gNOT2m20pn1`
  const respuesta = await fetch(url)
  const { data } = await respuesta.json()

  const gifs = data.map(elemento => {
    return {
      id: elemento.id,
      title: elemento.title,
      url: elemento.images?.downsized_medium.url
    }
  })

  return gifs

}