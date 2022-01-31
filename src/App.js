import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/Pages/NotFound";

function App() {
  return (
    <BrowserRouter basename="/react-facebook-clone">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
