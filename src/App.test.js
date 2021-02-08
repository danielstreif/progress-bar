import { render } from "@testing-library/react";
import App from "./App";

test("renders progress bar", () => {
    const { container } = render(<App />);

    expect(container.querySelector(".app")).toBeTruthy();
});
