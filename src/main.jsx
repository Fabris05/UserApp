import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UsersApp } from "./UsersApp.jsx";
import "./styles.css";
import { LoginPage } from "./auth/pages/LoginPage.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <UsersApp />
        </BrowserRouter>
    </StrictMode>
);
