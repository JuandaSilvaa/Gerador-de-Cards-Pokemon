import React from "react";
import { ApiProvider } from "./context/ApiContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <ApiProvider>
      <Home />
    </ApiProvider>
  );
}
