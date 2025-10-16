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

describe("Checkbox control Button", () => {
	test("Case 1: Initial conditions", () => {
		render(<App />);

		// Find element
		const btnElement = screen.getByRole("button", { name: /blue/i });
		const checkBoxElement = screen.getByRole("checkbox", {
			name: /disable button/i,
		});

		expect(btnElement).toBeEnabled();
		expect(checkBoxElement).not.toBeChecked();
	});

	test("Case 2: Checkbox enable/disable button", () => {
		render(<App />);

		// Find element
		const btnElement = screen.getByRole("button", { name: /blue/i });
		const checkBoxElement = screen.getByRole("checkbox", {
			name: /disable button/i,
		});

		// Click checkbox to be disable button
		fireEvent.click(checkBoxElement);
		expect(btnElement).toBeDisabled();
		expect(checkBoxElement).toBeChecked();

		// Click checkbox again to re-enable button
		fireEvent.click(checkBoxElement);
		expect(btnElement).toBeEnabled();
		expect(checkBoxElement).not.toBeChecked();
	});

	test("Case 3: Checkbox flow before button click", () => {
		render(<App />);

		// Find element
		const btnElement = screen.getByRole("button", { name: /blue/i });
		const checkBoxElement = screen.getByRole("checkbox", {
			name: /disable button/i,
		});

		// Initial color button
		expect(btnElement).toHaveClass("btn-red");

		// Click checkbox, color button change to gray
		fireEvent.click(checkBoxElement);
		expect(btnElement).toHaveClass("btn-gray");

		// Click checkbox again, color button change to red
		fireEvent.click(checkBoxElement);
		expect(btnElement).toHaveClass("btn-red");
	});

	test("Case 4: Checkbox flow after button click", () => {
		render(<App />);

		// Find element
		const btnElement = screen.getByRole("button", { name: /blue/i });
		const checkBoxElement = screen.getByRole("checkbox", {
			name: /disable button/i,
		});

		// Click button to change to blue
		fireEvent.click(btnElement);
		expect(btnElement).toHaveClass("btn-blue");

		// Click checkbox, color button change to gray
		fireEvent.click(checkBoxElement);
		expect(btnElement).toBeDisabled();
		expect(btnElement).toHaveClass("btn-gray");

		// Click checkbox again, color button change to blue
		fireEvent.click(checkBoxElement);
		expect(btnElement).toBeEnabled();
		expect(btnElement).toHaveClass("btn-blue");
	});
});
