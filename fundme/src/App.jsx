import "./UI/App.scss";
import Routes from "./Components/Routes";
import { GlobalProvider } from "./Contexts/Global";
import Nav from "./Components/Nav";

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <Nav />
        <Routes></Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
