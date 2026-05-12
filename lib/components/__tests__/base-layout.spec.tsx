import { render, screen } from "@testing-library/react";
import { BaseLayout } from "../base-layout";

// mock usePathname dan useRouter
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

import { usePathname } from "next/navigation";

describe("BaseLayout home button visibility", () => {
  it("Should not render home button when path is '/'", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    render(<BaseLayout>content</BaseLayout>);
    expect(screen.queryByTestId("back-icon")).not.toBeInTheDocument();
  });

  it("Should render home button when path is not '/'", () => {
    (usePathname as jest.Mock).mockReturnValue("/pokemon/pikachu");
    render(<BaseLayout>content</BaseLayout>);
    expect(screen.getByTestId("back-icon")).toBeInTheDocument();
  });
});