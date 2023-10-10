import { BrowserRouter } from "react-router-dom";
import Fundraisers from "../Components/Fundraisers";
import { GlobalProvider } from "../Contexts/Global";

import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import SmallBtn from "../Components/SmallBtn";

const lis = [
  {
    id: 2877,
    name: "rrrrrtt",
    surname: "rrrtt",
    story: "rrrrrr",
    goal: 500,
    donatorName: "Dainus",
  },
];

const MockFundraisers = () => {
  <GlobalProvider>
    <BrowserRouter>
      <Fundraisers loading={false}>
        <SmallBtn />
      </Fundraisers>
    </BrowserRouter>
  </GlobalProvider>;
};

describe("<Fundraisers/>", () => {
  test("render correct length of listings", () => {
    render(<MockFundraisers />);

    const createList = [
      {
        id: 2877,
        name: "rrrrrtt",
        surname: "rrrtt",
        story: "rrrrrr",
        goal: 500,
        donatorName: "",
      },
      {
        id: 2877,
        name: "gggrtt",
        surname: "rrrtt",
        story: "tttt",
        goal: 5777,
        donatorName: "",
      },
    ];

    axios.get = jest.fn().mockResolvedValue({ data: createList });

    expect(createList.length).toBe(2);
  });

  test("if there are fundraisers, does not render text`/no fundraisers/`", async () => {
    render(<MockFundraisers />);

    const createList = [
      {
        id: 2877,
        name: "rrrrrtt",
        surname: "rrrtt",
        story: "rrrrrr",
        goal: 500,
        donatorName: "",
      },
      {
        id: 2877,
        name: "gggrtt",
        surname: "rrrtt",
        story: "tttt",
        goal: 5777,
        donatorName: "",
      },
    ];

    axios.get = jest.fn().mockResolvedValue({ data: createList });
    const noFundraisrsElement = screen.queryByTestId("nofundraisers");

    expect(noFundraisrsElement).not.toBeInTheDocument();
  });
});
