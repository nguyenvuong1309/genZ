





import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";






const HeaderForMobile = () => {
    const navigate = useNavigate();

    const [isArticleOpen, setArticleOpen] = useState(false);
    const articleRef = useRef();

    const toggleArticle = () => {
        setArticleOpen(!isArticleOpen);
    };

    const handleOutsideClick = (event) => {
        if (articleRef.current && !articleRef.current.contains(event.target)) {
            setArticleOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    return (
        <div>
            <div className="w-full  bg-slate-200 absolute flex justify-between z-auto">
                <div className="w-20"></div>
                <div className="flex justify-center items-center h-10 font-bold text-2xl" onClick={() => { navigate("/") }}>ClownZ</div>
                <div className="flex justify-around items-center w-20">
                    <CiSearch />
                    <CiUser />
                    <IoBagOutline />
                </div>
            </div>


            <div className="flex z-auto"
                onMouseEnter={(e) => { e.stopPropagation() }}
            >
                <ul class="flex flex-col gap-2 text-black z-50">

                    <li className="">
                        <div>
                            <details class="group">
                                <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer bg-slate-200 w-[100%]">
                                    <div className="flex justify-around w-[100%]">
                                        <div className="flex items-center justify-center">
                                            <div>
                                                <IoMenuOutline />
                                            </div>
                                            <span class="flex gap-2">
                                                <span>
                                                    Menu
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </summary>

                                <div class=" w-72 bg-slate-200">

                                    <ul class="flex flex-col gap-4 pl-2 h-screen">

                                        {/* NEW ARRIVAL */}
                                        <li>
                                            <details class="group">

                                                <summary
                                                    class="flex items-center justify-between gap-2  marker:content-none hover:cursor-pointer"
                                                >
                                                    <span>NEW ARRIVAL</span>
                                                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd"
                                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                                        </path>
                                                    </svg>
                                                </summary>
                                                <article class="px-4 pb-4">

                                                    <ul class="flex flex-col gap-4 pl-2 mt-4">

                                                        {/* NEW ARIVAL TOP */}
                                                        <li>
                                                            <details class="group">

                                                                <summary
                                                                    class="flex items-center justify-between gap-2  marker:content-none hover:cursor-pointer"
                                                                >
                                                                    <span>TOP</span>
                                                                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd"
                                                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                                                        </path>
                                                                    </svg>
                                                                </summary>
                                                                <article class="px-4 pb-4">

                                                                    <ul class="flex flex-col gap-4 pl-2 mt-4">

                                                                        <li class="flex gap-2">
                                                                            <p onClick={() => { navigate("/all-sale") }}>
                                                                                T-shirt
                                                                            </p>
                                                                        </li>
                                                                        <li class="flex gap-2">
                                                                            <p onClick={() => { navigate("/all-sale") }}>
                                                                                Shirt & Polo
                                                                            </p>
                                                                        </li>
                                                                        <li class="flex gap-2">
                                                                            <p onClick={() => { navigate("/all-sale") }}>
                                                                                Hoodie & Sweatshirt
                                                                            </p>
                                                                        </li>
                                                                        <li class="flex gap-2">
                                                                            <p onClick={() => { navigate("/all-sale") }}>
                                                                                Jacket
                                                                            </p>
                                                                        </li>
                                                                        <li class="flex gap-2">
                                                                            <p onClick={() => { navigate("/all-sale") }}>
                                                                                Women
                                                                            </p>
                                                                        </li>
                                                                    </ul>

                                                                </article>

                                                            </details>
                                                        </li>

                                                        {/* NEW ARIVAL BOTTOM */}
                                                        <li>
                                                            <details class="group">

                                                                <summary
                                                                    class="flex items-center justify-between gap-2  marker:content-none hover:cursor-pointer"
                                                                >
                                                                    <span>BOTTOM</span>
                                                                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd"
                                                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                                                        </path>
                                                                    </svg>
                                                                </summary>
                                                                <article class="px-4 pb-4">

                                                                    <ul class="flex flex-col gap-4 pl-2 mt-4">

                                                                        <li class="flex gap-2">
                                                                            <p onClick={() => { navigate("/all-sale") }}>
                                                                                Pants
                                                                            </p>
                                                                        </li>

                                                                        <li class="flex gap-2">
                                                                            <p onClick={() => { navigate("/all-sale") }}>
                                                                                Shorts
                                                                            </p>
                                                                        </li>

                                                                    </ul>

                                                                </article>

                                                            </details>
                                                        </li>

                                                        {/* NEW ARIVAL ACCESSORY */}
                                                        <li>
                                                            <details class="group">

                                                                <summary
                                                                    class="flex items-center justify-between gap-2  marker:content-none hover:cursor-pointer"
                                                                >
                                                                    <span>ACCESSORY</span>
                                                                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd"
                                                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                                                        </path>
                                                                    </svg>
                                                                </summary>
                                                                <article class="px-4 pb-4">

                                                                    <ul class="flex flex-col gap-4 pl-2 mt-4">

                                                                        <li class="flex gap-2">
                                                                            <p onClick={() => { navigate("/all-sale") }}>
                                                                                Bag & Backpack
                                                                            </p>
                                                                        </li>

                                                                        <li class="flex gap-2">
                                                                            <p onClick={() => { navigate("/all-sale") }}>
                                                                                Hat
                                                                            </p>
                                                                        </li>

                                                                        <li class="flex gap-2">
                                                                            <p onClick={() => { navigate("/all-sale") }}>
                                                                                Others
                                                                            </p>
                                                                        </li>

                                                                    </ul>

                                                                </article>

                                                            </details>
                                                        </li>

                                                    </ul>

                                                </article>

                                            </details>
                                        </li>

                                        {/* Sản Phẩm */}
                                        <li>
                                            <details class="group">

                                                <summary
                                                    class="flex items-center justify-between gap-2 marker:content-none hover:cursor-pointer">
                                                    <span>Sản phẩm</span>
                                                    <svg class="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd"
                                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                                        </path>
                                                    </svg>
                                                </summary>
                                                <article class="px-4 pb-4">

                                                    <ul class="flex flex-col gap-4 pl-2 mt-4">

                                                        <li class="flex gap-2">
                                                            <p onClick={() => { navigate("/stand-for-northside") }}>
                                                                Stand for Northside
                                                            </p>
                                                        </li>


                                                        <li class="flex gap-2">
                                                            <p onClick={() => { navigate("/top") }}>
                                                                TOP
                                                            </p>
                                                        </li>


                                                        <li class="flex gap-2">
                                                            <p onClick={() => { navigate("/bottom") }}>
                                                                BOTTOM
                                                            </p>
                                                        </li>

                                                        <li class="flex gap-2">
                                                            <p onClick={() => { navigate("/accessory") }}>
                                                                ACCESSORY
                                                            </p>
                                                        </li>


                                                        {/* <form action="http://127.0.0.1:8000/auth/logout" method="POST">
                                    <input type="hidden" name="_token" value="ymEkCLBFpgkdaSbidUArRsdHbER5DkT6ByS3eJYb" />
                                    <button type="submit" class="text-red-500 text-sm px-2 py-1 hover:bg-red-200 rounded-md">
                                        Log Out
                                    </button>
                                </form> */}

                                                    </ul>

                                                </article>

                                            </details>
                                        </li>

                                        {/* BUBBLE GUM */}
                                        <li class="flex gap-2">


                                            <p onClick={() => { navigate("/bubble-gum") }}>
                                                BUBBLE GUM
                                            </p>
                                        </li>


                                        {/* STAND FOR NORTHSIDE */}
                                        <li class="flex gap-2">
                                            <p onClick={() => { navigate("/stand-for-northside") }}>
                                                STAND FOR NORTHSIDE
                                            </p>
                                        </li>

                                        {/* ALL SALE */}
                                        <li class="flex gap-2">

                                            <p onClick={() => { navigate("/all-sale") }}>
                                                ALL SALE
                                            </p>
                                        </li>

                                        {/* Về chúng tôi */}
                                        <li class="flex gap-2">
                                            <p onClick={() => { navigate("/gioithieu") }}>
                                                Về chúng tôi
                                            </p>
                                        </li>

                                        {/* Blog */}
                                        <li class="flex gap-2">
                                            <p onClick={() => { navigate("/gioithieu") }}>
                                                Blog
                                            </p>
                                        </li>


                                        {/* Liên hệ */}
                                        <li class="flex gap-2">

                                            <p onClick={() => { navigate("/lienhe") }}>
                                                Liên hệ
                                            </p>
                                        </li>
                                    </ul>

                                </div>

                            </details>
                        </div>
                    </li>

                </ul>
            </div >


        </div>

    )
}


export default HeaderForMobile;