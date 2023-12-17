


import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom"
import NewArrivalDropDown from "./DropDown/NewArrivalDropDown";
import SanPhamDropDown from "./DropDown/SanPhamDropDown";
import classNames from 'classnames';
import { useEffect, useState } from "react";


const Header = () => {
    const navigate = useNavigate()
    const location = useLocation();
    console.log("🚀 ~ file: Header.jsx:19 ~ Header ~ location:", location.pathname)
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    let backgroundColor = scrollPosition > 0 ? ' drop-shadow-2xl bg-white ' : (location.pathname !== "/" ? ' bg-white text-black' : 'bg-transparent text-white');

    return (
        <div
            //className="w-full fixed bg-white"
            className={classNames('w-full fixed', backgroundColor) + ' z-50'}
        >
            <div className="flex justify-around
            max-[950px]:grid
            ">
                <div className="flex w-1/3 justify-center
                max-[950px]:w-screen
                ">
                    <div className="w-10/12  flex justify-around">
                        <div className="flex justify-center items-center">
                            <CiLocationOn className="w-4 h-4" />
                            <div className="text-[12px] font-medium">{" ĐỊA CHỈ : VIỆT NAM"}</div>
                        </div>
                        <div className="flex justify-center items-center ">
                            <HiOutlinePhone className="w-4 h-4" />
                            <div className="text-[14px] font-[400]">{"SĐT : 0914595627"}</div>
                        </div>
                    </div>
                </div>
                <div className="font-bold text-[50px] w-1/3  flex justify-center
                  max-[950px]:w-full cursor-pointer caret-transparent
                "
                    onClick={() => navigate("/")}
                >
                    ClownZ
                </div>
                <div className="flex w-1/3  justify-around
                  max-[950px]:w-full
                  max-[950px]:justify-center
                  max-[950px]:gap-10
                  max-[950px]:grid
                ">
                    <div className="flex justify-center items-center gap-10
                     max-[950px]:grid
                     max-[950px]:w-full
                    ">
                        <div className="
                        max-[950px]:w-full
                        max-[950px]:flex
                        max-[950px]:justify-center
                        ">
                            <CiSearch />
                        </div>
                        <div className="flex justify-center items-center gap-1
                           max-[950px]:flex
                           max-[950px]:justify-center
                        ">
                            <CiUser />
                            <div onClick={() => { navigate("/account/login") }} className="hover:text-red-500"  >TÀI KHOẢN</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <BsCart2 />
                        <div className="hover:text-red-500" onClick={() => { navigate("/cart") }}>GIỎ HÀNG</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex w-9/12 justify-around h-
                max-[500px]:grid
                max-[500px]:grid-cols-[1fr_1fr] 
                max-[500px]:h-64
                ">
                    <div className={location.pathname === "/" ? "text-red-500" : ""} onClick={() => navigate("/")}>TRANG CHỦ</div>
                    {/* <div className={location.pathname === "/new-arrival" ? "text-red-500" : ""} onClick={() => navigate("/new-arrival")}>
                        NEW ARRIVAL */}
                    <div className=""><NewArrivalDropDown /></div>
                    {/* </div> */}
                    {/*                     
                    <div className={location.pathname === "/collections/all" ? "text-red-500" : ""} onClick={() => navigate("/collections/all")}>SẢN PHẨM</div>
                    */}
                    <div><SanPhamDropDown /></div>
                    <div className={location.pathname === "/bubble-gum" ? "text-red-500" : "" + "hover:text-red-500"} onClick={() => navigate("/bubble-gum")}>BUBBLE GUM</div>
                    <div className={location.pathname === "/stand-for-northside" ? "text-red-500" : "" + "hover:text-red-500"} onClick={() => navigate("/stand-for-northside")}>STAND FOR NORTHSIDE</div>
                    <div className={location.pathname === "" ? "text-red-500" : "" + "hover:text-red-500"} onClick={() => navigate("/all-sale")}>ALL SALE</div>
                    <div className={location.pathname === "/gioithieu" ? "text-red-500" : "" + "hover:text-red-500"} onClick={() => navigate("/gioithieu")} >VỀ CHÚNG TÔI</div>
                    <div className={location.pathname === "" ? "text-red-500" : "" + "hover:text-red-500"} onClick={() => navigate("/tin-tuc")} >BLOG</div>
                    <div className={location.pathname === "" ? "text-red-500" : "" + "hover:text-red-500"} onClick={() => navigate("/lienhe")} >LIÊN HỆ</div>
                </div>
            </div>
        </div >
    )
}

export default Header;