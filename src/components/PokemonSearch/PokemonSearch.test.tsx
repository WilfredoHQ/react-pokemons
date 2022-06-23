import { fireEvent, render } from "@testing-library/react"
import PokemonSearch from "./PokemonSearch"

test("render content", () => {
  const component = render(
    <PokemonSearch setSearch={() => {}} setIsShowForm={() => {}} />
  )
  component.getByText(/listado de pokemon/i)
})

test("change", () => {
  const mockHandler = jest.fn()
  const component = render(
    <PokemonSearch setSearch={mockHandler} setIsShowForm={mockHandler} />
  )
  const input = component.getByText(/listado de pokemon/i).nextSibling
  input && fireEvent.change(input, { target: { value: "Pikachu" } })
  expect(mockHandler).toHaveBeenCalledTimes(1)
})

test("click", () => {
  const mockHandler = jest.fn()
  const component = render(
    <PokemonSearch setSearch={mockHandler} setIsShowForm={mockHandler} />
  )
  const button = component.getByText(/nuevo/i)
  fireEvent.click(button)
  expect(mockHandler).toHaveBeenCalledTimes(1)
})
