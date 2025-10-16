import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Button Flow", () => {
	// Case 1: Button starts with correct color
	test("Case 1: Button starts with correct label and color", () => {
		render(<App />);
		const btnElement = screen.getByRole("button", { name: /blue/i });

		expect(btnElement).toHaveClass("btn-red");
		expect(btnElement).toHaveTextContent(/^Change to blue$/);
	});

	// Case 2: Button starts with correct text
	test("Case 2: Button has correct label and color after click", () => {
		render(<App />);
		const btnElement = screen.getByRole("button", /blue/i);

		fireEvent.click(btnElement);

		expect(btnElement).toHaveClass("btn-blue");
		expect(btnElement).toHaveTextContent(/^Change to red$/);
	});
});
