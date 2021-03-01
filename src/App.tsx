import React from "react";
import NavBar from "./components/NavBar";
import ClientsList from "./components/ClientsList";
import "./styles/app.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <NavBar />
        <ClientsList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
