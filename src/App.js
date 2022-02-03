import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import { HashRouter } from "react-router-dom";
import NotFound from "./components/Pages/NotFound";
import Login from "./components/Pages/Login";
import { PostContext } from "./context/Postcontext";

function App() {
  const {
    state: { user: isLogged },
  } = useContext(PostContext);
  const user = isLogged === "guest logged" ? false : true;
  return (
    <HashRouter>
      {user ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </HashRouter>
  );
}

export default App;
