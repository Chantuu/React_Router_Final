import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/NavbarComponent/Navbar';
import Footer from '../../components/FooterComponent/Footer';

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout;
