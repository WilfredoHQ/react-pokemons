import { fireEvent, render } from "@testing-library/react"
import Button from "./Button"

test("render content", () => {
  const component = render(<Button>Crear</Button>)
  component.getByText(/crear/i)
})

test("click", () => {
  const mockHandler = jest.fn()
  const component = render(<Button onClick={mockHandler}>Crear</Button>)
  const button = component.getByText(/crear/i)
  fireEvent.click(button)
  expect(mockHandler).toHaveBeenCalledTimes(1)
})
