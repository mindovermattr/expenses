import React from "react";
import ReactDOM from "react-dom/client";
import "./Nullable.scss";
import Expense from "./components/Layout/Expense.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Expense />
  </React.StrictMode>
);
