import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import HeaderForMobile from "./HeaderForMobile";
import { useEffect, useState } from "react";




const Layout = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);

    const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth <= 1300);
    };

    useEffect(() => {
        // Set initial state based on window width
        handleWindowSizeChange();

        // Add event listener to handle window resize
        window.addEventListener('resize', handleWindowSizeChange);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    return (
        <div>
            {/* <Header /> */}
            <div className="fixed w-[100%]">
                {isMobile ? <HeaderForMobile /> : <Header />}
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;