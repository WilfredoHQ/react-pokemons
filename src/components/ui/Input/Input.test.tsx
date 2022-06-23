import { render } from "@testing-library/react"
import Input from "./Input"

test("render content", () => {
  const component = render(<Input label="Nombres" />)
  component.getByText(/nombres/i)
})

test("error", () => {
  const component = render(<Input label="Nombres" error={true} required />)
  const label = component.getByText(/nombres */i)
  expect(label.parentNode).toHaveClass("error")
})
