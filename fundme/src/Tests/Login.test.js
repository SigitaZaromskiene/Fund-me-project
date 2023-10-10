import { BrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GlobalProvider } from "../Contexts/Global";
import axios from "axios";
import Nav from "../Components/Nav";

const MockLogin = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Login></Login>
      </BrowserRouter>
    </GlobalProvider>
  );
};

const MockLoginNv = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Login></Login>
        <Nav></Nav>
      </BrowserRouter>
    </GlobalProvider>
  );
};

describe("<Login/>", () => {
  test("should be able to write input as name", () => {
    render(<MockLogin />);

    const nameInputElement = screen.getByTestId("name");
    fireEvent.change(nameInputElement, { target: { value: "la" } });
    expect(nameInputElement.value).toBe("la");
  });

  test("should be able to write input as psw", () => {
    render(<MockLogin />);

    const pswInputElement = screen.getByTestId("psw");
    fireEvent.change(pswInputElement, { target: { value: "5" } });
    expect(pswInputElement.value).toBe("5");
  });

  test("should inputs be empty after submiting", () => {
    render(<MockLogin />);
    const nameInputElement = screen.getByTestId("name");
    const pswInputElement = screen.getByTestId("psw");
    const btnElement = screen.getByTestId("btn");
    fireEvent.click(btnElement);
    expect(pswInputElement.value).toBe("");
    expect(nameInputElement.value).toBe("");
  });

  test("shows error message if login is not sucess", async () => {
    render(<MockLogin />);

    axios.post = jest.fn().mockResolvedValue({ data: { status: "error" } });

    const btnElement = screen.getByTestId("btn");
    fireEvent.click(btnElement);

    const errorMessage = await waitFor(() =>
      screen.findByTestId("error-message")
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows loggedName after login success", async () => {
    render(<MockLoginNv />);

    axios.post = jest
      .fn()
      .mockResolvedValue({ data: { status: "ok", name: "TestUser" } });

    const nameInput = screen.getByTestId("name");
    const pswInput = screen.getByTestId("psw");
    const loginButton = screen.getByTestId("btn");

    fireEvent.change(nameInput, { target: { value: "TestUser" } });
    fireEvent.change(pswInput, { target: { value: "123456" } });
    fireEvent.click(loginButton);

    const loginElement = await screen.findByTestId("loginname");
    const logoutElement = await screen.findByTestId("logout");

    expect(logoutElement).toBeVisible();
    expect(loginElement.innerHTML).toBe(`Hello, TestUser`);
  });

  test("if logged Start fundraising in nav appears", async () => {
    render(<MockLoginNv />);

    axios.post = jest
      .fn()
      .mockResolvedValue({ data: { status: "ok", name: "TestUser" } });

    const nameInput = screen.getByTestId("name");
    const pswInput = screen.getByTestId("psw");
    const loginButton = screen.getByTestId("btn");

    fireEvent.change(nameInput, { target: { value: "TestUser" } });
    fireEvent.change(pswInput, { target: { value: "123456" } });
    fireEvent.click(loginButton);

    const startFundraisingNav = await screen.findByTestId("startNav");
    expect(startFundraisingNav).toBeVisible();
  });
});
