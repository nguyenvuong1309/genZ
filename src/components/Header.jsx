


import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom"
import NewArrivalDropDown from "./DropDown/NewArrivalDropDown";
import SanPhamDropDown from "./DropDown/SanPhamDropDown";


const Header = () => {
    const navigate = useNavigate()
    const location = useLocation();
    console.log("🚀 ~ file: Header.jsx:15 ~ Header ~ location:", location.pathname)
    return (
        <div className="w-full">
            <div className="flex justify-around
            max-[950px]:grid
            ">
                <div className="flex w-1/3 justify-center
                max-[950px]:w-screen
                ">
                    <div className="w-10/12  flex justify-around">
                        <div className="flex justify-center items-center text-black">
                            <CiLocationOn className="w-4 h-4" />
                            <div className="text-[12px] font-medium">{" ĐỊA CHỈ : VIỆT NAM"}</div>
                        </div>
                        <div className="flex justify-center items-center text-black ">
                            <HiOutlinePhone className="w-4 h-4" />
                            <div className="text-[14px] font-[400]">{"SĐT : 0914595627"}</div>
                        </div>
                    </div>
                </div>
                <div className="font-bold text-[50px] w-1/3  flex justify-center
                  max-[950px]:w-full
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
                            <div>TÀI KHOẢN</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <BsCart2 />
                        <div>GIỎ HÀNG</div>
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
                    <div className={location.pathname === "/bubble-gum" ? "text-red-500" : ""} onClick={() => navigate("/bubble-gum")}>BUBBLE GUM</div>
                    <div className={location.pathname === "/stand-for-northside" ? "text-red-500" : ""} onClick={() => navigate("/stand-for-northside")}>STAND FOR NORTHSIDE</div>
                    <div className={location.pathname === "" ? "text-red-500" : ""} onClick={() => navigate("/")}>ALL SIDE</div>
                    <div className={location.pathname === "" ? "text-red-500" : ""} onClick={() => navigate("/")} >VỀ CHÚNG TÔI</div>
                    <div className={location.pathname === "" ? "text-red-500" : ""} onClick={() => navigate("/")} >BLOG</div>
                    <div className={location.pathname === "" ? "text-red-500" : ""} onClick={() => navigate("/")} >LIÊN HỆ</div>
                </div>
            </div>
        </div >
    )
}

export default Header;