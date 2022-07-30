import Result from "../Result/Result";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

test("Should render Result component", () => {
  const item = "test";
  render(<Result item={item} />);
  const resultListDiv = screen.getByTestId("result__list__div");
  const resultListElement = screen.getByTestId("result__list__element");
  const resultListIcon = screen.getByTestId("result__list__icon");
  expect(resultListDiv).toBeInTheDocument();
  expect(resultListElement).toBeInTheDocument();
  expect(resultListIcon).toBeInTheDocument();
  expect(resultListElement).toHaveTextContent("test");
});

test("Should match snapshot", () => {
  const item = "test";
  const { asFragment } = render(<Result />);
  const snapshot = asFragment(<Result item={item} />);
  expect(snapshot).toMatchSnapshot();
});
