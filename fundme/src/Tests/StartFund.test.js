import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { GlobalProvider } from "../Contexts/Global";
import { BrowserRouter } from "react-router-dom";
import StartFund from "../Components/StartFund";
import ErrorMsg from "../Components/ErrorMsg";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";

const MockStartFund = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <StartFund></StartFund>
      </BrowserRouter>
    </GlobalProvider>
  );
};

const MockMemory = () => {
  return (
    <GlobalProvider>
      <MemoryRouter>
        <StartFund></StartFund>
        <ErrorMsg errorMsg="New story is published"></ErrorMsg>
      </MemoryRouter>
    </GlobalProvider>
  );
};

const MockStartFundwithErrorMsg = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <StartFund></StartFund>
        <ErrorMsg errorMsg={"Please fill all details"}></ErrorMsg>
      </BrowserRouter>
    </GlobalProvider>
  );
};

// jest.mock("axios");

describe("<StartFund/>", () => {
  test("test if you can write an input (name,text,surname,goal)", () => {
    render(<MockStartFund />);

    const name = screen.getByTestId("name");
    const text = screen.getByTestId("text");
    const surname = screen.getByTestId("surname");
    const goal = screen.getByTestId("goal");

    fireEvent.change(name, { target: { value: "Lina" } });
    fireEvent.change(text, { target: { value: "Labai noriu masinos" } });
    fireEvent.change(surname, { target: { value: "Linute" } });
    fireEvent.change(goal, { target: { value: "5000" } });

    expect(name.value).toBe("Lina");
    expect(text.value).toBe("Labai noriu masinos");
    expect(surname.value).toBe("Linute");
    expect(goal.value).toBe("5000");
  });

  test("render error message if not inputs are filled", async () => {
    render(<MockStartFundwithErrorMsg />);

    axios.post = jest.fn().mockResolvedValue({ data: { status: "error" } });

    const name = screen.getByTestId("name");
    const text = screen.getByTestId("text");
    const surname = screen.getByTestId("surname");
    const goal = screen.getByTestId("goal");

    const btn = screen.getByTestId("btn");
    const errorMsg = screen.getByTestId("error-message");

    fireEvent.change(name, { target: { value: "Lina" } });
    fireEvent.change(text, { target: { value: "Labai noriu masinos" } });
    fireEvent.change(surname, { target: { value: "Linute" } });
    fireEvent.change(goal, { target: { value: "" } });

    fireEvent.click(btn);

    await waitFor(() => {
      expect(errorMsg.textContent).toBe("Please fill all details");
    });
  });

  test("if publish succeed, sucess message is shown", async () => {
    render(<MockMemory />);
    const name = screen.getByTestId("name");
    const story = screen.getByTestId("text");
    const surname = screen.getByTestId("surname");
    const goal = screen.getByTestId("goal");
    const errorMsg = screen.getByTestId("error-message");

    const btn = screen.getByTestId("btn");

    fireEvent.change(name, { target: { value: "Lina" } });
    fireEvent.change(story, { target: { value: "Labai noriu masinos" } });
    fireEvent.change(surname, { target: { value: "Linute" } });
    fireEvent.change(goal, { target: { value: "5000" } });

    axios.post.mockResolvedValue({ data: { status: "ok" } });

    fireEvent.click(btn);

    expect(errorMsg.textContent).toBe("New story is published");
  });
});
