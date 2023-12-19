



//import top_product_image from '../assets/TopProduct/top_product_image'
import { useState } from 'react'
import top_product_image from '../assets/TopProduct/top_product_image.webp'
import top_product_image_1 from '../assets/TopProduct/top_product_image_1.webp'
import { useNavigate } from "react-router-dom";
import ProductItem from '../components/ProductItem';


const TopProductPage = () => {
    const [hoverImage, setHoverImage] = useState(false);
    const navigate = useNavigate();
    return (
        // <div className="flex justify-center mt-20 mb-20">
        //     <div className="grid grid-cols-[1fr_1fr_1fr_1fr] w-[95%]"
        //         onClick={() => { navigate("/id"); }}
        //     >
        //         <div
        //             className="w-[92%] h-[99%] mb-20"
        //             onMouseEnter={() => {
        //                 setTimeout(() => {
        //                     setHoverImage(!hoverImage)
        //                 }, 200);
        //             }}
        //             onMouseLeave={() => {
        //                 setTimeout(() => {
        //                     setHoverImage(!hoverImage)
        //                 }, 200);
        //             }}
        //         >
        //             {hoverImage ?
        //                 (<img src={top_product_image_1} alt="" />)
        //                 :
        //                 (<img src={top_product_image} alt="" />)
        //             }
        //             <div className='h-[20%] bg-slate-400 relative h-ful'>
        //                 {hoverImage ? (
        //                     <div className='absolute right-0 bottom-0 w-full h-[50%] hover:bg-black hover:text-white'>
        //                         <div
        //                             className='border-x-2 border-t-2 border-black w-full h-full flex justify-center items-center'
        //                             onClick={() => { navigate("/id"); }}
        //                         >
        //                             Chi tiết
        //                         </div>
        //                     </div>
        //                 ) : (
        //                     <div className='ml-2'>
        //                         <div className='absolute bottom-[70%]'>CLOWNZ GRUNGE T-SHIRT</div>
        //                         <div className='absolute bottom-[40%]'>TEE & POLO SHIRTS</div>
        //                         <div className='absolute bottom-[10%]'>200.000đ</div>
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className='flex justify-center pt-32 mb-5'>
                <div className='w-11/12 flex justify-between text-lg'>
                    <div>Danh mục</div>
                    <div>Tìm theo +</div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-11/12 grid grid-cols-[1fr_1fr_1fr_1fr]
                     max-[500px]:grid-cols-1
                    '>
                    <ProductItem />
                </div>
            </div>
        </>
    )
}

export default TopProductPage;