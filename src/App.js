import "./App.scss";
import { Header } from "./components/Header/Header";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { useSelector } from "react-redux";
import { ResultMessage } from "./components/ResultMessage/ResultMessage";

function App() {
  const { user } = useSelector((state) => state);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        {user ? <ProfilePage /> : <ResultMessage />}
      </div>
    </div>
  );
}

export default App;
