import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Square from "./Square";

describe("Suare", () => {
  it("renders a square with the correct marker ('X' or 'O')", () => {
    const MARKER = "X";
    const ID = 0;

    render(<Square marker={MARKER} id={0} handleClick={() => {}} />);

    const square = screen.getByRole("button", { name: MARKER });

    expect(square).toBeInTheDocument();
    expect(square).toHaveAttribute("id", ID.toString());
  });

  it("renders a square without a marker", () => {
    const ID = 0;

    render(<Square id={ID} handleClick={() => {}} />);

    const square = screen.getByRole("button");

    expect(square).toBeInTheDocument();
    expect(square).toHaveAttribute("id", ID.toString());
  });

  // this is asynchrounous
  it("calls the click handler function whenever clicked", async () => {
    const ID = 0;
    const handleClick = jest.fn((event) => event.target.id); // mock function
    const user = userEvent.setup();

    render(<Square id={ID} handleClick={handleClick} />);

    const square = screen.getByRole("button");
    // simulating a click even happens asynchronously
    await user.click(square); // await requires function to be asynchronous

    expect(handleClick).toHaveBeenCalled();

    // TODO: Expect the handleClick function to be called with the correcti id
    expect(handleClick.mock.results[0].value).toBe(ID.toString());
    // expect(handleClick).toBeCalled();
  });
});
