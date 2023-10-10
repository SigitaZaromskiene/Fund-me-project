import Logout from "../Components/Logout";
import { GlobalProvider } from "../Contexts/Global";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Nav from "../Components/Nav";
import axios from "axios";

const MockLogout = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Nav></Nav>
        <Logout></Logout>
      </BrowserRouter>
    </GlobalProvider>
  );
};

describe("<Logout />", () => {
  test("after logout btn is pressed, login btn appears", async () => {
    render(<MockLogout />);

    axios.post = jest.fn().mockResolvedValue({ data: { status: "logout" } });

    const logoutBtn = await screen.findByTestId("logout");

    const logintBtn = await screen.findByTestId("login");
    const signintBtn = await screen.findByTestId("signin");

    fireEvent.click(logoutBtn);

    expect(logintBtn).toBeVisible();
    expect(signintBtn).toBeVisible();
  });
});
