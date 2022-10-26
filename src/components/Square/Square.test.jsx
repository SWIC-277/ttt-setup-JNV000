import { render, screen } from "@testing-library/react";
import Square from "./Square";

it("renders a square with the correct marker ('X' or 'O')", () => {
  render(<Square marker="X" id={0} />);

  const square = screen.getByRole("button", { name: "X" });

  expect(square).toBeInTheDocument();
  expect(square).toHaveAttribute("id", "0");
});
