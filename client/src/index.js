import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Top10 from "./pages/Top10";
import Trending from "./pages/Trending";
import Watchlist from "./pages/Watchlist";
import Footer from "./components/Footer";
import CoinById from "./pages/CoinByID";
import { createContext } from "react";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore";
import Signin from "./pages/Signin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setuser } from "./store/userSlice";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export const Data = createContext();

const Applayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setuser(token));
    }
  }, [dispatch]);

  return (
    <Data.Provider value={"Anmol"}>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Data.Provider>
  );
};


const appRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/top10", element: <Top10 /> },
      { path: "/watchlist", element: <Watchlist /> },
      { path: "/trending", element: <Trending /> },
      { path: "/coins/:id", element: <CoinById /> },
      { path: "/signin", element: <Signin /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);


