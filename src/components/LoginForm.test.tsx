import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import LoginForm from "./LoginForm";

test("renders login form correctly", () => {
  render(<LoginForm />);
  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByText("Password")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Login")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
});
