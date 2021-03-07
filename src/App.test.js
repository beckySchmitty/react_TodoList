import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo"
import TodoList from "./TodoList"
import App from "./App"

// Smoke tests
it("renders Todo without crashing", function () {
  render(<Todo />);
});

it("renders TodoList without crashing", function () {
  render(<TodoList />);
});

it("renders App without crashing", function () {
  render(<App />);
});


// Snapshots
it("matches snapshot", function () {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});



// Todo functionality
it ("should render with one todo", () => {
    const {getByText} = render(<App />);
    const firstTodo = getByText("laundry")
    expect (firstTodo).toBeInTheDocument();
});

it ("should successfully add todo", () => {
    const {getByText, queryByText, getByLabelText} = render(<App />);

    const doesntShowTodo = queryByText("dishes")
    expect(doesntShowTodo).not.toBeInTheDocument();

    const input = getByLabelText("Task")
    fireEvent.change(input, { target: { value: 'dishes' } })
    const button = getByText("Add");
    fireEvent.click(button);
    const newTodo = getByText("dishes")
    expect(newTodo).toBeInTheDocument();

});

it ("should successfully remove todo", () => {
    const {getByText} = render(<App />);
    const firstTodo = getByText("laundry")
    expect (firstTodo).toBeInTheDocument();
    const removeBtn = getByText("X");
    fireEvent.click(removeBtn);
    expect (firstTodo).not.toBeInTheDocument();
});