

import top_product_detail_1_black from '../assets/TopProduct/top_product_detail_1.webp'
import top_product_detail_2_black from '../assets/TopProduct/top_product_detail_2.webp'
import top_product_detail_3_black from '../assets/TopProduct/top_product_detail_3.webp'
import top_product_detail_4_black from '../assets/TopProduct/top_product_detail_4.webp'
import top_product_detail_5_black from '../assets/TopProduct/top_product_detail_5.webp'

import clownz_grunge_tshirt_white_1 from '../assets/TopProduct/clownz_grunge_tshirt_white_1.webp'
import clownz_grunge_tshirt_white_2 from '../assets/TopProduct/clownz_grunge_tshirt_white_2.webp'
import clownz_grunge_tshirt_white_3 from '../assets/TopProduct/clownz_grunge_tshirt_white_3.webp'
import clownz_grunge_tshirt_white_4 from '../assets/TopProduct/clownz_grunge_tshirt_white_4.webp'
import clownz_grunge_tshirt_white_5 from '../assets/TopProduct/clownz_grunge_tshirt_white_5.webp'

import top_product_description_image from '../assets/TopProduct/top_product_description_image.webp'

import { useState } from 'react'
import ProductItem from '../components/ProductItem'
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


const ProductDetail = () => {
    const [chooseProductColor, setChooseProductColor] = useState(false);
    const [extraProduct, setExtraProduct] = useState(true);
    const navigate = useNavigate();
    let top_product_detail_1 = chooseProductColor ? top_product_detail_1_black : clownz_grunge_tshirt_white_1
    let top_product_detail_2 = chooseProductColor ? top_product_detail_2_black : clownz_grunge_tshirt_white_2
    let top_product_detail_3 = chooseProductColor ? top_product_detail_3_black : clownz_grunge_tshirt_white_3
    let top_product_detail_4 = chooseProductColor ? top_product_detail_4_black : clownz_grunge_tshirt_white_4
    let top_product_detail_5 = chooseProductColor ? top_product_detail_5_black : clownz_grunge_tshirt_white_5
    return (
        <>
            <div className='max-[900px]:bg-green-100'>
                <div className="h-screen flex justify-center pt-32 mb-10
                max-[900px]:hidden
                ">
                    <div className="grid grid-cols-[3fr_5fr_3fr] w-[95%]">

                        <div className="flex  w-[100%]">
                            <div className="w-[50%]">
                                <div className="mb-3">Stand for Northside</div>
                                <div className="flex justify-between">
                                    <div className="mb-3">TOP</div>
                                    <div>+</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mb-3">BOTTOM</div>
                                    <div>+</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mb-3">ACCESSARY</div>
                                    <div>+</div>
                                </div>
                            </div>
                            <div className="ml-[15%] grid w-[30%] h-[87%]">
                                <div className='flex justify-center'>
                                    <div
                                        //className="w-[90px] h-[112px]"
                                        className="h-[18%] w-[80%]"
                                    >
                                        <img src={top_product_detail_1} alt="" className='w-full' />
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className="h-[18%] w-[80%]">
                                        <img src={top_product_detail_2} alt="" className='w-full pt-3' />
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className="h-[18%] w-[80%]">
                                        <img src={top_product_detail_3} alt="" className='w-full pt-3' />
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className="h-[18%] w-[80%]">
                                        <img src={top_product_detail_4} alt="" className='w-full pt-3' />
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className="h-[18%] w-[80%]">
                                        <img src={top_product_detail_5} alt="" className='w-full pt-3' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='max-h-screen overflow-auto scrollbar-hide'>
                            <div className='mb-4'>
                                <img src={top_product_detail_1} alt="" className='w-full' />
                            </div>
                            <div className='mb-4'>
                                <img src={top_product_detail_2} alt="" />
                            </div>
                            <div className='mb-4'>
                                <img src={top_product_detail_3} alt="" />
                            </div>
                            <div className='mb-4'>
                                <img src={top_product_detail_4} alt="" />
                            </div>
                            <div>
                                <img src={top_product_detail_5} alt="" />
                            </div>
                        </div>

                        <div className='flex justify-center max-h-screen overflow-auto scrollbar-hide'>
                            <div className='w-[85%]'>
                                <div className='border-b-2 h-[5%]  border-dashed font-extralight text-2xl truncate'>
                                    CLOWNZ GRUNGE T-SHIRT
                                </div>
                                <div className='border-b-2 h-[7%]  border-dashed font-extralight'>
                                    <div className='font-bold'>
                                        200.000đ
                                    </div>
                                    <div>
                                        Tiết kiệm : 199.000đ
                                    </div>
                                </div>

                                <div className='mt-10'>
                                    <div>màu sắc:</div>
                                    <div className='flex w-full'>
                                        <div className='flex w-[55%] gap-4'>
                                            <div className='h-[100%] w-[60%] relative'
                                                onClick={() => { setChooseProductColor(true) }}
                                            >
                                                <img src={top_product_detail_1_black} alt="" className={chooseProductColor ? 'border border-black p-1' : 'border border-white p-1'} />
                                            </div>
                                            <div className='h-[18%] w-[60%]'
                                                onClick={() => { setChooseProductColor(false) }}
                                            >
                                                <img src={clownz_grunge_tshirt_white_1} alt="" className={!chooseProductColor ? 'border border-black p-1' : 'border border-white p-1'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>Size:</div>
                                    <div>
                                        <div className='w-[55%] flex'>
                                            <div className='w-1/3 border border-black h-14 m-1 flex justify-center items-center'>M</div>
                                            <div className='relative w-1/3 flex justify-center items-center'>
                                                <div className=''>L</div>
                                                <div className='absolute opacity-[20%] text-[70px] z-auto'>X</div>
                                            </div>
                                            <div className='relative w-1/3 flex justify-center items-center'>
                                                <div className='w-1/3  flex justify-center items-center z-auto'>XL</div>
                                                <div className='absolute opacity-[20%] text-[70px] z-auto'>X</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#19ff3b]  hover:bg-[#ff4d4d] mt-5 h-14 flex justify-center items-center' onClick={() => { navigate("/checkout/id") }}>
                                    <button className='font-bold'>
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                                <div className='mt-10'>
                                    <img src={top_product_description_image} alt="" />
                                </div>
                                <div className='font-bold'>
                                    <div className='mb-5'>Mô tả</div>
                                    <div className='mb-5'>Chất liệu: Vải cotton 230 gsm</div>
                                    <div className='mb-5'>Màu sắc : Đen, Trắng </div>
                                    <div className='mb-5'>Form dáng : T-shirt Regular</div>
                                    <div className='mb-5'>Cảm hứng thiết kế :  Mẫu T-shirt mặt trước in nhiều chữ ClownZ tràn thân trước với hiệu ứng blur, chảy sơn theo phong cách grunge, mang đậm cá tính nổi loạn trong tính cách của thương hiệu.</div>
                                    <div className='mb-5'>Công nghệ in ấn / thiết kế : In kéo lụa</div>
                                    <div className='mb-5'>Chi tiết đặc biệt : In tràn thân trước </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='min-[900px]:absolute min-[900px]:invisible 
            max-[900px]:visible
            max-[900px]:pt-20
            '>
                <div className='flex justify-center items-center'>
                    <div className='mb-4 w-[90%]'>
                        <img src={top_product_detail_1} alt="" className='w-full' />
                    </div>
                </div>

                <div className='flex justify-center max-h-screen overflow-auto scrollbar-hide'>
                    <div className='w-[85%]'>
                        <div className='border-b-2 h-[5%]  border-dashed font-extralight text-2xl'>
                            CLOWNZ GRUNGE T-SHIRT
                        </div>
                        <div className='border-b-2 h-[7%]  border-dashed font-extralight'>
                            <div className='font-bold'>
                                200.000đ
                            </div>
                            <div>
                                Tiết kiệm : 199.000đ
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div>màu sắc:</div>
                            <div className='flex w-full'>
                                <div className='flex w-[55%] gap-4'>
                                    <div className='h-[100%] w-[60%]'
                                        onClick={() => { setChooseProductColor(true) }}
                                    >
                                        <img src={top_product_detail_1_black} alt="" className={chooseProductColor ? 'border border-black p-1' : 'border border-white p-1'} />
                                    </div>
                                    <div className='h-[18%] w-[60%]'
                                        onClick={() => { setChooseProductColor(false) }}
                                    >
                                        <img src={clownz_grunge_tshirt_white_1} alt="" className={!chooseProductColor ? 'border border-black p-1' : 'border border-white p-1'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>Size:</div>
                            <div>
                                <div className='w-[55%] flex'>
                                    <div className='w-1/3 border border-black h-24 m-1 flex justify-center items-center'>M</div>
                                    <div className='w-1/3 flex justify-center items-center bg-yellow-100'>
                                        <div className=''>L</div>
                                        <div className='opacity-[20%]  text-[70px] -ml-6'>X</div>
                                    </div>
                                    <div className='w-1/3 flex justify-center items-center bg-green-100'>
                                        <div className='w-1/3  flex justify-center items-center'>XL</div>
                                        <div className='opacity-[20%] text-[70px] -ml-10'>X</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#19ff3b]  hover:bg-[#ff4d4d] mt-5 h-14 flex justify-center items-center' onClick={() => { navigate("/checkout/id") }}>
                            <button className='font-bold'>
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                        <div className='mt-10'>
                            <img src={top_product_description_image} alt="" />
                        </div>
                        <div className='font-bold'>
                            <div className='mb-5'>Mô tả</div>
                            <div className='mb-5'>Chất liệu: Vải cotton 230 gsm</div>
                            <div className='mb-5'>Màu sắc : Đen, Trắng </div>
                            <div className='mb-5'>Form dáng : T-shirt Regular</div>
                            <div className='mb-5'>Cảm hứng thiết kế :  Mẫu T-shirt mặt trước in nhiều chữ ClownZ tràn thân trước với hiệu ứng blur, chảy sơn theo phong cách grunge, mang đậm cá tính nổi loạn trong tính cách của thương hiệu.</div>
                            <div className='mb-5'>Công nghệ in ấn / thiết kế : In kéo lụa</div>
                            <div className='mb-5'>Chi tiết đặc biệt : In tràn thân trước </div>
                        </div>
                    </div>
                </div >

            </div >
            <div className=''>
                <div className='flex justify-center gap-10 text-[30px] mb-10 first-letter:
                max-[500px]:text-[20px]
                '>
                    <div onClick={() => { setExtraProduct(true) }} className={extraProduct ? 'underline underline-offset-8' : ''}>Có thể bạn cũng thích</div>
                    <div onClick={() => { setExtraProduct(false) }} className={!extraProduct ? 'underline underline-offset-8' : ''}>Mặc với</div>
                </div>
                <div className='flex justify-center'>
                    {extraProduct ? (
                        <div className='flex justify-center'>
                            <div className='w-[95%] grid grid-cols-[1fr_1fr_1fr_1fr] 
                            max-[1300px]:grid-cols-[1fr_1fr_1fr]
                            max-[950px]:grid-cols-[1fr_1fr]
                            
                            max-[500px]:grid-cols-[1fr]
                            max-[500px]:w-[95%]
                            
                        '>

                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className='bg-[#a6aaae] h-20 flex items-center'>
                    <div className='flex ml-[5%] gap-2'>
                        <div className='flex justify-center items-center'><FaPhoneAlt /> </div>
                        <div>HOTLINE ĐẶT HÀNG : </div>
                        <div className='text-red-500'>0123456789</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;