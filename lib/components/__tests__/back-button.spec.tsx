import { render, screen, fireEvent } from "@testing-library/react";
import { BackButton } from "../back-button";
describe("Backbutton functionality", () => {
  it("Should render the back icon", () => {
    render(<BackButton />);
    expect(screen.getByTestId("back-icon")).toBeInTheDocument();
  });

  it("Should fire route back if onBack is not provided", () => {
    render(<BackButton />);
    const button = screen.getByTestId("back-icon");

    fireEvent.click(button)
  });
});
