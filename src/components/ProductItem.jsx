import { useState } from "react";
import { useNavigate } from "react-router-dom";
import top_product_image from '../assets/TopProduct/top_product_image.webp'
import top_product_image_1 from '../assets/TopProduct/top_product_image_1.webp'



const ProductItem = () => {
    const [hoverImage, setHoverImage] = useState(false);
    const navigate = useNavigate();
    return (
        <div className=" z-auto">

            <div className="flex justify-center items-center">
                <div className=" w-[300px] h-[440px]">
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="w-[90%] h-[96%] ">
                            <div className="grid group"
                                onClick={() => {
                                    navigate("/id");
                                }}
                            >
                                <div className="w-full h-full -mb-[154%]  opacity-100 transition ease-in-out duration-500 group-hover:opacity-0">
                                    <img
                                        src={top_product_image_1}
                                        className=" object-cover"
                                    />
                                    <div className="mt-3 w-full h-16">
                                        <div className="bottom-[70%]">CLOWNZ GRUNGE T-SHIRT</div>
                                        <div className="bottom-[40%]">TEE & POLO SHIRTS</div>
                                        <div className="bottom-[10%]">200.000đ</div>
                                    </div>
                                </div>
                                <div className="w-full h-full opacity-0 transition ease-in-out duration-500 group-hover:opacity-100"
                                >
                                    <img
                                        src={top_product_image}
                                        className=" object-cover "
                                    />
                                    <div className="mt-5 w-full h-16 hover:bg-black hover:text-white"
                                        onClick={() => {
                                            navigate("/id");
                                        }}
                                    >
                                        <div className="border-x-2 border-t-2 border-black w-full h-full flex justify-center items-center">
                                            Chi tiết
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;