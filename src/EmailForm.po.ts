import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function enterEmail(email: string): void {
  const input = screen.getByLabelText("Email");
  userEvent.type(input, email);
  userEvent.click(screen.getByRole("button", { name: "Sign up" }));
}
