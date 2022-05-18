import "./App.scss";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/q" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
