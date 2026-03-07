import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders home title", () => {
  render(<Home />);
  expect(screen.getByText("Pokemon Explorer")).toBeInTheDocument();
});