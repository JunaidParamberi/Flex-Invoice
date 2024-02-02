import { useState, useContext } from "react";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const currentUser = useContext(AuthContext);

  console.log(currentUser);
  return (
    <>
      <div className="app-container bg-[#090852]">
        {currentUser ? <Dashboard /> : <Login />}
      </div>
    </>
  );
}

export default App;
