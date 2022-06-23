import { fireEvent, render } from "@testing-library/react"
import PokemonForm from "./PokemonForm"

test("render content", () => {
  const component = render(
    <PokemonForm
      pokemon={null}
      setPokemon={() => {}}
      setIsShowForm={() => {}}
      onSendForm={() => {}}
      isLoading={false}
    />
  )
  component.getByText(/nuevo pokemon/i)
})

test("update", () => {
  const pokemon = {
    id: 119,
    name: "Pikachu",
    image: "https://img.pokemondb.net/artwork/large/pikachu.jpg",
    attack: 60,
    defense: 40,
    hp: 35,
    type: "electric",
    id_author: 1,
  }

  const mockHandler = jest.fn()
  const component = render(
    <PokemonForm
      pokemon={pokemon}
      setPokemon={mockHandler}
      setIsShowForm={mockHandler}
      onSendForm={mockHandler}
      isLoading={false}
    />
  )

  component.getByText(/guardar/i)
  const cancelButton = component.getByText(/close/i)

  fireEvent.click(cancelButton)

  expect(mockHandler).toHaveBeenCalledTimes(2)
})
