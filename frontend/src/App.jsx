import { useState } from "react";
import "./App.css";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Home from "./pages/home/Home.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home></Home> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login></Login>}
        ></Route>{" "}
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup></Signup>}
        ></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
