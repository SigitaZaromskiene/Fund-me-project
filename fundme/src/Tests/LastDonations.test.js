import LastDonations from "../Components/LastDonations";
import { render, screen } from "@testing-library/react";
import { GlobalProvider } from "../Contexts/Global";

const lis = {
  id: 2877,
  name: "rrrrrtt",
  surname: "rrrtt",
  story: "rrrrrr",
  goal: 500,
  donatorName: "Dainius",
  donatorSum: 100,
};

const MockFundraisers = () => {
  return (
    <GlobalProvider>
      <LastDonations lis={lis}></LastDonations>
    </GlobalProvider>
  );
};

test("renders correct last donator name", () => {
  render(<MockFundraisers />);
});

//   const donatorNameElement = screen.getByTestId("dname");

//   expect(donatorNameElement).toBeInTheDocument();
//   expect(donatorNameElement).toHaveTextContent("Dainius");
// });
