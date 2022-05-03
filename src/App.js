import "./App.scss";
import { Header } from "./components/Header/Header";
import { ResultMessage } from "./components/ResultMessage/ResultMessage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <ResultMessage />
      </div>
    </div>
  );
}

export default App;
