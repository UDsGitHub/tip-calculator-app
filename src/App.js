import "./App.css";
import AppContextProvider from "./components/AppContext";
import Input from "./components/input_section/Input";
import Output from "./components/output_section/Output";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="headerlogo" />
      <div className="main">
        <AppContextProvider>
          <Input />
          <Output />
        </AppContextProvider>
      </div>
    </div>
  );
}

export default App;
