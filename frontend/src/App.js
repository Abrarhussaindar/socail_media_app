import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import NoPage from "./pages/noPage/NoPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
