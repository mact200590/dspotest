import React from "react";
import Routes from "./navigation/navigation";
import { BrowserRouter } from "react-router-dom";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default RoutesApp;
