import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EmailForm } from "./EmailForm";

describe("EmailForm", () => {
  it("allows to set an email", () => {
    const setEmail = jest.fn();
    render(<EmailForm onSetEmail={setEmail} />);
    const input = screen.getByLabelText("Email");
    const email = "test@test.com";
    userEvent.type(input, email);
    userEvent.click(screen.getByRole("button", { name: "Sign up" }));
    expect(setEmail).toHaveBeenCalledWith(email);
  });
});
