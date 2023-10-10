import { GlobalProvider } from "../Contexts/Global";
import { BrowserRouter } from "react-router-dom";
import Register from "../Components/Register";
import ErrorMsg from "../Components/ErrorMsg";
import { screen, render, fireEvent } from "@testing-library/react";
import Login from "../Components/Login";
import axios from "axios";

const MockRegister = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Register />
        <ErrorMsg errorMsg="Klaidele"></ErrorMsg>
        <Login></Login>
      </BrowserRouter>
    </GlobalProvider>
  );
};

describe("<Register/>", () => {
  test("test if you can write an input (name,psw,psw2)", () => {
    render(<MockRegister />);

    const nameInputElement = screen.getByTestId("name");
    const pswInputElement = screen.getByTestId("psw");
    const psw2nputElement = screen.getByTestId("psw2");

    fireEvent.change(nameInputElement, { target: { value: "Rima" } });
    fireEvent.change(pswInputElement, { target: { value: "2222" } });
    fireEvent.change(psw2nputElement, { target: { value: "2222" } });

    expect(nameInputElement.value).toBe("Rima");
    expect(pswInputElement.value).toBe("2222");
    expect(psw2nputElement.value).toBe("2222");
  });

  test("after submiting form, inputs are empty", () => {
    render(<MockRegister />);
    const nameInputElement = screen.getByTestId("name");
    const submitFormBtnElement = screen.getByText("Register");
    fireEvent.click(submitFormBtnElement);
    expect(nameInputElement.value).toBe("");
  });

  test("renders error message if inputs are not filled", () => {
    render(<MockRegister />);
    const nameInputElement = screen.getByTestId("registername");
    const pswInputElement = screen.getByTestId("registerpsw");
    const submitFormBtnElement = screen.getByText("Register");
    const errorMessageElement = screen.getByTestId("error-message");
    fireEvent.change(nameInputElement, { target: { value: "Laima" } });
    fireEvent.change(pswInputElement, { target: { value: "" } });

    fireEvent.click(submitFormBtnElement);
    expect(errorMessageElement.textContent).toBe("Klaidele");
  });

  test("if successfully registered, <Login/> page appears", async () => {
    render(<MockRegister />);

    axios.post = jest
      .fn()
      .mockResolvedValue({ data: { name: "Rima", psw: "2222" } });

    const submitFormBtnElement = screen.getByText("Register");
    const loginBtn = screen.getByText("Login");

    fireEvent.click(submitFormBtnElement);

    expect(loginBtn).toBeVisible();
  });
});
