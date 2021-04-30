import React from "react";
import { render, screen } from "@testing-library/react";
import { EmailForm } from "./EmailForm";
import { enterEmail } from "./EmailForm.po";

describe("EmailForm", () => {
  it("allows to set an email", () => {
    const setEmail = jest.fn();
    render(<EmailForm onSetEmail={setEmail} />);
    const email = "test@test.com";
    enterEmail(email);
    expect(setEmail).toHaveBeenCalledWith(email);
  });
});
