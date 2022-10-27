import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Square from "./Square";

describe("Suare", () => {
  it("renders a square with the correct marker ('X' or 'O')", () => {
    render(<Square marker="X" id={0} />);

    const square = screen.getByRole("button", { name: "X" });

    expect(square).toBeInTheDocument();
    expect(square).toHaveAttribute("id", "0");
  });

  it("renders a square without a marker", () => {
    render(<Square id={0} />);

    const square = screen.getByRole("button");

    expect(square).toBeInTheDocument();
    expect(square).toHaveAttribute("id", "0");
  });

  // this is asyncrounous
  it("calls the click handler function whenever clicked", async () => {
    const handleClick = jest.fn(); // mock function
    const user = userEvent.setup();

    render(<Square id={0} handleClick={handleClick} />);

    const square = screen.getByRole("button");
    await user.click(square); // await requires function to be asyncronous

    expect(handleClick).toHaveBeenCalled();
  });
});
