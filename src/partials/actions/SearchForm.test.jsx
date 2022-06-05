import { describe, expect, it } from "vitest";
import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import SearchForm from "./SearchForm";

describe("input should work", () => {
  beforeEach(() => {
    render(<SearchForm placeholder="Busca por nombre" />);
  });
  it("the placeholder is visible", () => {
    const text = screen.queryByPlaceholderText(/Busca por nombre/);
    expect(text).toBeInTheDocument();
  });

  it("the input works", async () => {
    const text = screen.queryByPlaceholderText(/Busca por nombre/);
    await userEvent.type(text, "Hello");
    expect(text).toHaveValue("Hello");
  });
});
