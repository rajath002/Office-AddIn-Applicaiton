import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TextInsertion from "../../../taskpane/components/TextInsertion";
import { describe, beforeEach, test, expect, vi } from "vitest";

describe("TextInsertion Component", () => {
  const mockInsertText = vi.fn();

  beforeEach(() => {
    render(<TextInsertion insertText={mockInsertText} />);
  });

  test("renders TextInsertion component", () => {
    const textArea = screen.getByLabelText("Enter text to be inserted into the document.") as any;
    const button = screen.getByRole("button", { name: /insert text/i }) as any;
    expect(textArea).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("updates text area value on change", () => {
    const textArea = screen.getByLabelText("Enter text to be inserted into the document.");
    fireEvent.change(textArea, { target: { value: "New text" } });
    expect(textArea).toHaveValue("New text");
  });

  test("calls insertText function with correct value on button click", () => {
    const textArea = screen.getByLabelText("Enter text to be inserted into the document.");
    const button = screen.getByRole("button", { name: /insert text/i });

    fireEvent.change(textArea, { target: { value: "New text" } });
    fireEvent.click(button);

    expect(mockInsertText).toHaveBeenCalledWith("New text");
  });
});
