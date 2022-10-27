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

  // this is asynchrounous
  it("calls the click handler function whenever clicked", async () => {
    const id = 0;
    const handleClick = jest.fn((event) => event.target.id); // mock function
    const user = userEvent.setup();

    render(<Square id={id} handleClick={handleClick} />);

    const square = screen.getByRole("button");
    // simulating a click even happens asynchronously
    await user.click(square); // await requires function to be asynchronous

    expect(handleClick).toHaveBeenCalled();

    // TODO: Expect the handleClick function to be called with the correcti id
    expect(handleClick.mock.results[0].value).toBe(id.toString());
  });
});
