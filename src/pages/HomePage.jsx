


import main from '../assets/main.jpg';
import homepage_top_image from '../assets/homepage_top_image.webp'
import homepage_bottom_image from '../assets/homepage_bottom_image.webp'
import homepage_accessary_image from '../assets/homepage_accessary_image.webp'
import homepage_about_image from '../assets/homepage_about_image.webp'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';




const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className='max-[1300px]:pt-10'>
            <div onClick={() => { navigate('/stand-for-northside') }}>
                <img src={main} alt="" />
            </div>
            <div className='flex justify-center mt-5'>
                <div className='grid grid-cols-[1fr_1fr_1fr] gap-4 w-[98%]'>
                    <div onClick={() => { navigate("/top") }}>
                        <img src={homepage_top_image} alt="" />
                    </div>

                    <div onClick={() => { navigate("/bottom") }}>
                        <img src={homepage_bottom_image} alt="" />
                    </div>
                    <div onClick={() => { navigate("/accessory") }}>
                        <img src={homepage_accessary_image} alt="" />
                    </div>

                </div>
            </div>
            <img src={homepage_about_image} alt="" className='mt-5 mb-20' />
        </div>
    )
}

export default HomePage;