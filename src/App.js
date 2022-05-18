import "./App.scss";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { ResultMessage } from "./components/ResultMessage/ResultMessage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<ResultMessage />} />
          <Route path="/q" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
