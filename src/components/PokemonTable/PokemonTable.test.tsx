import { fireEvent, render } from "@testing-library/react"
import PokemonTable from "./PokemonTable"

test("render content", () => {
  const pokemons = [
    {
      id: 119,
      name: "Pikachu",
      image: "https://img.pokemondb.net/artwork/large/pikachu.jpg",
      attack: 60,
      defense: 40,
      hp: 35,
      type: "electric",
      id_author: 1,
    },
  ]
  const component = render(
    <PokemonTable pokemons={pokemons} setPokemon={() => {}} onDelete={() => {}} />
  )
  component.getByText(/pikachu/i)
})

test("click", () => {
  const pokemons = [
    {
      id: 119,
      name: "Pikachu",
      image: "https://img.pokemondb.net/artwork/large/pikachu.jpg",
      attack: 60,
      defense: 40,
      hp: 35,
      type: "electric",
      id_author: 1,
    },
  ]
  const mockHandler = jest.fn()
  const component = render(
    <PokemonTable pokemons={pokemons} setPokemon={mockHandler} onDelete={mockHandler} />
  )
  const updateButton = component.getByText(/pen/i)
  const deleteButton = component.getByText(/trash/i)
  fireEvent.click(updateButton)
  fireEvent.click(deleteButton)
  expect(mockHandler).toHaveBeenCalledTimes(2)
})
