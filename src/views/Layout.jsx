import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import { Navbar } from "../components/Navbar";


export function Layout() {

    const navigate = useNavigate()
    return (
        <>
            {/*<Navbar />*/}
            <Outlet />
        </>
    );
}