import { render } from "@testing-library/react"
import App from "./App"

test("renders learn react link", async () => {
  const component = render(<App />)
  component.getByText(/listado de pokemon/i)
  component.getByText(/nuevo/i)
})
