import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import {Outlet, Route, RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home"
import Top10 from "./pages/Top10"
import Trending from "./pages/Trending"
import Watchlist from "./pages/Watchlist"
import Footer from './components/Footer';
import CoinById from './pages/CoinByID';
import { createContext } from "react";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore";

export const Data = createContext();

const Applayout=()=>{
    return(
        <Provider store={appStore}>
        <div>            
            <Navbar />
            <Outlet />
            <Footer />           
        </div> 
        </Provider>
    );
};

const appRouter= createBrowserRouter ([
    {
        element: <Applayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/top10", element: <Top10 /> },
            { path: "/watchlist", element: <Watchlist /> },
            { path: "/trending", element: <Trending /> },
            { path: "/coins/:id", element: <CoinById/>}
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
