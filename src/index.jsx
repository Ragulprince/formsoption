import React from "react";
import ReactDOMClient from "react-dom/client";
import { FormsOptions } from "./screens/FormsOptions";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<FormsOptions />);
