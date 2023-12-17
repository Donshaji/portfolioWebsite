import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomePageStatic } from "./screens/HomePageStatic";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomePageStatic />);
