import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EmailForm } from "./EmailForm";

describe("EmailForm", () => {
  it("allows to sign up an email", () => {
    render(<EmailForm />);
    const input = screen.getByLabelText("Email");
    userEvent.type(input, "test@test.com");
    userEvent.click(screen.getByRole("button", { name: "Sign up" }));
  });
});
