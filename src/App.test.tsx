import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("shows a title", () => {
    render(<App />);
    expect(screen.getByText("Data collection")).toBeInTheDocument();
  });

  it("allows to sign up an email", () => {
    render(<App />);
    const input = screen.getByLabelText("Email");
    userEvent.type(input, "test@test.com");
    userEvent.click(screen.getByRole("button", { name: "Sign up" }));
  });
});
