

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";




const SanPhamDropDown = () => {

    const location = useLocation();
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




    return (
        <>
            <div className="group inline-block">
                <button
                    className="flex justify-center items-center "
                // className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                >
                    <span className="hover:text-red-500">SẢN PHẨM</span>
                    <span>
                        <svg
                            className="fill-current h-4 w-4 transform group-hover:-rotate-180
                            transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </span>
                </button>
                <ul
                    className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute left-[2%] right-[2%] visible
                    transition duration-150 ease-in-out origin-top min-w-56 w-[96%] text-black"
                >
                    {/* <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        <button
                            className="w-full text-left flex items-center outline-none focus:outline-none"
                        >
                            <span className="pr-1 flex-1">TOP</span>
                            <span className="mr-auto">
                                <svg
                                    className="fill-current h-4 w-4
                                    transition duration-150 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                            </span>
                        </button>
                        <ul
                            className="bg-white border rounded-sm absolute top-0 right-0 
                            transition duration-150 ease-in-out origin-top-left
                            min-w-32 w-56">
                            <li className="px-3 py-1 hover:bg-gray-100">T-Shirt</li>
                            <li className="px-3 py-1 hover:bg-gray-100">Shirt & Polo</li>
                            <li className="px-3 py-1 hover:bg-gray-100">Hoodie & Sweatshirt</li>
                            <li className="px-3 py-1 hover:bg-gray-100">Jacket</li>
                            <li className="px-3 py-1 hover:bg-gray-100">Women</li>
                        </ul>
                    </li> */}

                    <div className="h-48 w-full">
                        <div className="w-[90%] grid grid-cols-[1fr_1fr_1fr_1fr]">
                            <div className="font-bold justify-center " onClick={() => navigate("/stand-for-northside")}>STAND FOR NORTHSIDE</div>
                            <div>
                                <div>TOP</div>
                                <div>
                                    <div className="hover:text-red-500" onClick={() => navigate("/all-sale")}>T-Shirt</div>
                                    <div className="hover:text-red-500" onClick={() => navigate("/all-sale")}>Shirt & Polo</div>
                                    <div className="hover:text-red-500" onClick={() => navigate("/all-sale")}>Hoodie & Sweatshirt</div>
                                    <div className="hover:text-red-500" onClick={() => navigate("/all-sale")}>Jacket</div>
                                    <div className="hover:text-red-500" onClick={() => navigate("/all-sale")}>Women</div>
                                </div>
                            </div>
                            <div>
                                <div>BOTTOM</div>
                                <div>
                                    <div className="hover:text-red-500" onClick={() => navigate("/all-sale")}>Pants</div>
                                    <div className="hover:text-red-500" onClick={() => navigate("/all-sale")}>Shorts</div>
                                </div>
                            </div>
                            <div>
                                <div>ACCESSORY</div>
                                <div>
                                    <div className="hover:text-red-500" onClick={() => navigate("/all-sale")}>Bag & Backpack</div>
                                    <div className="hover:text-red-500" onClick={() => navigate("/all-sale")}>Hat</div>
                                    <div className="hover:text-red-500" onClick={() => navigate("/all-sale")}>Others</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

            <style>
                {`
                li>ul                 {transform: translatex(100%) scale(0) }
                li:hover>ul           {transform: translatex(101%) scale(1) }
                li > button svg       {transform: rotate(-90deg) }
                li:hover > button svg {transform: rotate(-270deg) }
            
                .group:hover .group-hover\:scale-100 {transform: scale(1) }
                .group:hover .group-hover\:-rotate-180 {transform: rotate(180deg) }
                .scale-0 {transform: scale(0) }
                .min-w-32 {min - width: 8rem }
                `}
            </style >
        </>
    )
}

export default SanPhamDropDown;