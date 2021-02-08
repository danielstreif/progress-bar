import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

test("renders progress bar", () => {
    const { container } = render(<ProgressBar percentage={42} />);

    expect(container.querySelector(".progress-bar")).toBeTruthy();
});

test("renders filler", () => {
    const { container } = render(<ProgressBar percentage="42" />);

    expect(container.querySelector(".filler")).toBeTruthy();
});

test("renders percentage", () => {
    render(<ProgressBar percentage="42" />);
    const Element = screen.getByText(/42%/i);
    expect(Element).toBeInTheDocument();
});

test("renders calculated percentage", () => {
    render(<ProgressBar value={40} minValue={0} maxValue={200} />);

    const Element = screen.getByText(/20%/i);
    expect(Element).toBeInTheDocument();
});

test("renders error when negative percentage", () => {
    const { container } = render(<ProgressBar percentage="-42" />);

    expect(container.querySelector(".error-filler")).toBeTruthy();
});

test("renders error when too high percentage", () => {
    const { container } = render(<ProgressBar percentage="420" />);

    expect(container.querySelector(".error-filler")).toBeTruthy();
});

test("renders error when invalid values", () => {
    const { container } = render(
        <ProgressBar value={0} minValue={40} maxValue={200} />
    );

    expect(container.querySelector(".error-filler")).toBeTruthy();
});
