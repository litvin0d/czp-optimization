import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./scss/index.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { CheckBoard } from "./pages/CheckBoard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/check-board",
        element: <CheckBoard />
    },
    {
        path: "/store-board",
        element: <h1>store</h1>
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
