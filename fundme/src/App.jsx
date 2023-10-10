import "./UI/App.scss";

import Nav from "./Components/Nav";
import MainRoutes from "./Components/MainRoutes";

function App() {
  return (
    <div className="app-container">
      <Nav></Nav>
      <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
