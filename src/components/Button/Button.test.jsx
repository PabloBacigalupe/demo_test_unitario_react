import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Testing a button", () => {
  it("Button +1000 is rendered", () => {
    let count = 0;

    const incrementCount = (increment) => {
      count += increment;
      return count;
    };

    const { container } = render(
      <Button increment={1000} onClickFunction={incrementCount} />
    );
    const button = container.querySelector("button");
    expect(button.textContent).contains("+1000");
  });

  it("Button +1000 works and return 1000", () => {
    let count = 0;

    const incrementCount = (increment) => {
      count += increment;
      return count;
    };

    const { container } = render(
      <Button increment={1000} onClickFunction={incrementCount} />
    );
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(count).toBe(1000);
  });

  it("Button try to cast string to number", () => {
    let count = 0;

    const incrementCount = (increment) => {
      count += increment;
      return count;
    };

    const { container } = render(
      <Button increment={"1000"} onClickFunction={incrementCount} />
    );
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(count).toBe(1000);
  });




  it("Button try use a word as increment", () => {
    let count = 0;

    const incrementCount = (increment) => {
      count += increment;
      return count;
    };

    const { container } = render(
      <Button increment={"queso"} onClickFunction={incrementCount} />
    );
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(count).toBe(1);
  });




});
