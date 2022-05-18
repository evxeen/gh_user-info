import "./App.scss";
import { Header } from "./components/Header/Header";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <ProfilePage />
      </div>
    </div>
  );
}

export default App;
