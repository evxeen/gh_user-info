import "./App.scss";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { ResultMessage } from "./components/ResultMessage/ResultMessage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_PROFILE" });
  }, []);

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
