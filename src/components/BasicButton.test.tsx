import { render, screen } from "@testing-library/react";

import {BasicButton} from "./BasicButton";

describe("BasicButton", () => {
  test("renders the BasicButton component", () => {
    render(<BasicButton />);
    render(<BasicButton>child</BasicButton>);
    render(<BasicButton><span>children</span></BasicButton>);
  });
});


describe("BasicButton", () => {
  test("renders the BasicButton component with correct label", () => {
    const text = "Button Text"
    render(<BasicButton>{text}</BasicButton>);
    screen.getByText(text);
  });
});