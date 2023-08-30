import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import NoPage from "./pages/noPage/NoPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={user ? <Home /> : <Register />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
