import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders Tic Tac Toe", () => {
    render(<App />);

    const squares = screen.getAllByRole("button");

    expect(squares).toHaveLength(9); // we expect 9 squares on a board
  });

  it("alternates 'X' and 'O' whenever clicking squares", async () => {
    // create mock user
    const user = userEvent.setup();

    render(<App />);

    // get all squares on the 'screen'
    const squares = screen.getAllByRole("button");

    // 'click' 3 squares
    await user.click(squares[0]);
    await user.click(squares[1]);
    await user.click(squares[2]);

    // squares should alternate between 'X' and 'O'
    expect(squares[0]).toHaveTextContent("X");
    expect(squares[1]).toHaveTextContent("O");
    expect(squares[2]).toHaveTextContent("X");
  });

  // TODO: Add test for winner
});

// test("renders Tic Tac Toe", () => {
