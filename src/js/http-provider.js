const jokeUrl = 'https://api.chucknorris.io/jokes/random'

const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl)

    if (!resp.ok) throw 'No se pudo realizar la petición'
    const { icon_url, id, value } = await resp.json() // json() devuelve una promesa
    return { icon_url, id, value }
  } catch (error) {
    throw error
  }
}

export { obtenerChiste }
