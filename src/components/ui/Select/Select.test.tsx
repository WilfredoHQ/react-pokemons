import { render } from "@testing-library/react"
import Select from "./Select"

test("render content", () => {
  const component = render(
    <Select label="Nombres">
      <option value="0">Juan</option>
    </Select>
  )
  component.getByText(/nombres/i)
  component.getByText(/juan/i)
})

test("error", () => {
  const component = render(
    <Select label="Nombres" error={true} required>
      <option value="0">Juan</option>
    </Select>
  )
  const label = component.getByText(/nombres */i)
  component.getByText(/juan/i)
  expect(label.parentNode).toHaveClass("error")
})
