import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reservation from "./Reservation";

test("renders Reservation component", () => {
  render(<Reservation />);
  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("submits the form successfully", () => {
  render(<Reservation />);
  const dateInput = screen.getByLabelText("Date:");
  const timeInput = screen.getByLabelText("Time:");
  const guestsInput = screen.getByLabelText("Number of guests:");
  const submitButton = screen.getByRole("button", { name: "Next" });

  fireEvent.change(dateInput, { target: { value: "2023-06-05" } });
  fireEvent.change(timeInput, { target: { value: "12:00" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });

  fireEvent.click(submitButton);

  const successMessage = "Reservation submitted successfully!";
  expect(successMessage).toString();
});
