import "./UI/App.scss";

import { GlobalProvider } from "./Contexts/Global";
import Nav from "./Components/Nav";
import MainRoutes from "./Components/MainRoutes";

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <Nav></Nav>
        <MainRoutes></MainRoutes>
      </div>
    </GlobalProvider>
  );
}

export default App;
