import "./App.css";
import { useSelector } from "react-redux";
// component
import ProfilePage from "./components/ProfilePage";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";

function App() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className="App" style={{ background: theme }}>
      <ProfilePage />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
