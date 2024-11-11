import { render, screen } from "@testing-library/react";

import {BasicButton} from "./BasicButton";

describe("BasicButton", () => {
  test("renders the BasicButton component", () => {
    render(<BasicButton label="" />);
  });
});


describe("BasicButton", () => {
  test("renders the BasicButton component with correct label", () => {
    const label = "Test Label"
    render(<BasicButton label={label} />);
    screen.getByText(label);
  });
});