import { render } from "@testing-library/react"
import Slider from "./Slider"

test("render content", () => {
  const component = render(<Slider label="Cantidad" />)
  component.getByText(/cantidad/i)
})

test("minmax", () => {
  const component = render(<Slider label="Cantidad" min={10} max={58} required />)
  component.getByText(/cantidad */i)
  component.getByText(/10/i)
  component.getByText(/58/i)
})
