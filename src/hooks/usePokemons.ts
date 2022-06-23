import { useMutation, useQuery, useQueryClient } from "react-query"
import {
  createPokemon,
  deletePokemon,
  Pokemon,
  readALotOfPokemons,
  readPokemon,
  readPokemons,
  updatePokemon,
} from "../services/pokemons"

export const useReadPokemons = () => {
  return useQuery(["pokemons"], readPokemons)
}

export const useCreatePokemon = () => {
  const queryClient = useQueryClient()

  return useMutation(createPokemon, {
    onSuccess: pokemon => {
      queryClient.setQueryData<Pokemon[]>(["pokemons"], prevPokemons => [
        ...(prevPokemons || []),
        pokemon,
      ])
      queryClient.invalidateQueries("pokemons")
    },
  })
}

export const useReadPokemon = (pokemonId: number) => {
  return useQuery(["pokemons", pokemonId], () => readPokemon(pokemonId))
}

export const useReadALotOfPokemons = (quantity: number) => {
  return useQuery(["pokemonsLot", quantity], () => readALotOfPokemons(quantity))
}

export const useDeletePokemon = () => {
  const queryClient = useQueryClient()

  return useMutation(deletePokemon, {
    onSuccess: (_, variables) => {
      queryClient.setQueryData<Pokemon[]>(["pokemons"], prevPokemons => [
        ...(prevPokemons?.filter(m => m.id !== variables) || []),
      ])
      queryClient.invalidateQueries("pokemons")
    },
  })
}

export const useUpdatePokemon = () => {
  const queryClient = useQueryClient()

  return useMutation(updatePokemon, {
    onSuccess: pokemon => {
      queryClient.setQueryData<Pokemon[]>(["pokemons"], prevPokemons => [
        ...(prevPokemons?.map(m => (m.id === pokemon.id ? pokemon : m)) || []),
      ])
      queryClient.invalidateQueries("pokemons")
    },
  })
}
