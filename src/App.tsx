import React from "react";
import NavBar from "./components/NavBar";
import ClientsList from "./components/ClientsList";
import "./styles/app.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <ClientsList />
    </div>
  );
};

export default App;
