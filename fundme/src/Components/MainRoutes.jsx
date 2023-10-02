import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import StartFund from "./StartFund";
import Fundraisers from "./Fundraisers";
import Err404 from "./Err404";
import Logout from "./Logout";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route
        path="/login/fundraisers"
        element={<Fundraisers></Fundraisers>}
      ></Route>
      <Route path="/home/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/start" element={<StartFund></StartFund>}></Route>
      <Route path="/home/start" element={<StartFund></StartFund>}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/fundraisers" element={<Fundraisers></Fundraisers>}></Route>
      <Route path="*" element={<Err404></Err404>}></Route>
    </Routes>
  );
}

export default MainRoutes;
