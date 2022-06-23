import axios from "axios"

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_HOST,
})

export interface Pokemon {
  id: number
  name: string
  image: string
  attack: number
  defense: number
  hp: number
  type: string
  id_author: number
}

export interface PokemonBody {
  name: string
  image: string
  attack: number
  defense: number
  hp: number
  type: string
  idAuthor: number
}

export interface PokemonDeleted {
  success: boolean
  type: string
  data: []
}

export const readPokemons = async () => {
  const { data } = await instance.get<Pokemon[]>("?idAuthor=1")

  return data
}

export const createPokemon = async (pokemonCreate: PokemonBody) => {
  const { data } = await instance.post<Pokemon>("?idAuthor=1", pokemonCreate)

  return data
}

export const readPokemon = async (pokemonId: number) => {
  const { data } = await instance.get<Pokemon>(`${pokemonId}`)

  return data
}

export const readALotOfPokemons = async (quantity: number) => {
  const { data } = await instance.get<Pokemon[]>(`${quantity}?idAuthor=1`)

  return data
}

export const deletePokemon = async (pokemonId: number) => {
  const { data } = await instance.delete<PokemonDeleted>(`${pokemonId}`)

  return data
}

export const updatePokemon = async ({
  pokemonId,
  pokemonUpdate,
}: {
  pokemonId: number
  pokemonUpdate: PokemonBody
}) => {
  const { data } = await instance.put<Pokemon>(`${pokemonId}`, pokemonUpdate)

  return data
}
