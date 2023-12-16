import { useState } from "react";
import { useNavigate } from "react-router-dom";
import top_product_image from '../assets/TopProduct/top_product_image.webp'
import top_product_image_1 from '../assets/TopProduct/top_product_image_1.webp'



const ProductItem = () => {
    const [hoverImage, setHoverImage] = useState(false);
    const navigate = useNavigate();
    return (
        <div
            className="flex justify-center"
        >
            <div
                className="w-[95%]"
                onClick={() => { navigate("/id"); }}
            >
                <div
                    className="w-[92%] h-[99%] mb-20"
                    onMouseEnter={() => {
                        setTimeout(() => {
                            setHoverImage(!hoverImage)
                        }, 200);
                    }}
                    onMouseLeave={() => {
                        setTimeout(() => {
                            setHoverImage(!hoverImage)
                        }, 200);
                    }}
                >
                    <div className="">
                        {hoverImage ?
                            (<img src={top_product_image_1} alt="" className="" />)
                            :
                            (<img src={top_product_image} alt="" />)
                        }
                    </div>
                    <div className='h-24 bg-slate-400 relative'>
                        {hoverImage ? (
                            <div className='absolute right-0 bottom-0 w-full h-[50%] hover:bg-black hover:text-white'>
                                <div
                                    className='border-x-2 border-t-2 border-black w-full h-full flex justify-center items-center'
                                    onClick={() => { navigate("/id"); }}
                                >
                                    Chi tiết
                                </div>
                            </div>
                        ) : (
                            <div className='ml-2'>
                                <div className='absolute bottom-[70%]'>CLOWNZ GRUNGE T-SHIRT</div>
                                <div className='absolute bottom-[40%]'>TEE & POLO SHIRTS</div>
                                <div className='absolute bottom-[10%]'>200.000đ</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;