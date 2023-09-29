import "./UI/App.scss";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { GlobalProvider } from "./Contexts/Global";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import StartFund from "./Components/StartFund";
import Fundraisers from "./Components/Fundraisers";
import Err404 from "./Components/Err404";
import Logout from "./Components/Logout";

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <Nav></Nav>
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
          <Route
            path="/fundraisers"
            element={<Fundraisers></Fundraisers>}
          ></Route>
          <Route path="*" element={<Err404></Err404>}></Route>
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
