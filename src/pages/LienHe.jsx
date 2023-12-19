



import clowz_address_nuitruc from '../assets/clownz_address_nuitruc.webp';
import clowz_address_hodacdi from '../assets/clownz_address_hodacdi.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const LienHe = () => {
    const navigate = useNavigate();
    const [newArrival, setNewArrival] = useState(false);
    const [sanPham, setSanPham] = useState(false)
    const [newArrivalTop, setNewArrivalTop] = useState(false);
    const [newArrivalBottom, setNewArrivalBottom] = useState(false);
    const [newArrivalAccessory, setNewArrivalAccessory] = useState(false);
    const [sanPhamTop, setSanPhamTop] = useState(false);
    const [sanPhamBottom, setSanPhamBottom] = useState(false);
    const [sanPhamAccessory, setSanPhamAccessory] = useState(false);

    const setNewArrivalState = () => {
        if (newArrival) {
            setNewArrivalTop(false);
            setNewArrivalBottom(false);
            setNewArrivalAccessory(false);
        }
        setNewArrival(!newArrival)
    }
    const setSanPhamState = () => {
        if (newArrival) {
            setSanPhamTop(false);
            setSanPhamBottom(false);
            setSanPhamAccessory(false);
        }
        setSanPham(!sanPham)
    }
    return (
        <div className="pt-32 pb-20">
            <div className="grid grid-cols-[2fr_4fr_4fr]">
                <div className="ml-[30%]">
                    <div className="font-bold text-[40px]">CLOWNZ</div>
                    <div className="mt-5">
                        <div className="my-3 hover:text-red-500" onClick={() => { navigate("/") }}>Trang chủ</div>
                        <div className='flex justify-between items-center'>
                            <div className="my-2 hover:text-red-500">NEW ARRIVAL</div>
                            <div onClick={() => { setNewArrivalState() }} className='font-bold text-2xl caret-transparent'>{newArrival ? '-' : '+'}</div>
                        </div>
                        <div className={newArrival ? 'ml-[5%]' : 'ml-[5%] absolute hidden'}>
                            <div className='flex justify-between my-3 hover:text-red-500'><div>TOP</div><div onClick={() => { setNewArrivalTop(!newArrivalTop) }}>+</div> </div>
                            <div className={newArrivalTop ? 'ml-[10%]' : 'ml-[10%] hidden absolute'}>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>T-Shirt</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Shirt & Polo</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Hoodie & Sweatshirt</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Jacket</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Women</div>
                            </div>

                            <div className='flex justify-between my-3 hover:text-red-500'><div>BOTTOM</div><div onClick={() => { setNewArrivalBottom(!newArrivalBottom) }}>+</div> </div>
                            <div className={newArrivalBottom ? 'ml-[10%]' : 'ml-[10%] hidden absolute'}>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Pants</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Shorts</div>
                            </div>

                            <div className='flex justify-between my-3 hover:text-red-500'><div>ACCESSORY</div><div onClick={() => { setNewArrivalAccessory(!newArrivalAccessory) }}>+</div></div>
                            <div className={newArrivalAccessory ? 'ml-[10%]' : 'ml-[10%] hidden absolute'}>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Bag & Backpack</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Hat</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Others</div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className="my-2 hover:text-red-500">Sản phẩm</div>
                            <div onClick={() => { setSanPhamState() }} className='font-bold text-2xl caret-transparent'>{sanPham ? '-' : '+'}</div>
                        </div>
                        <div className={sanPham ? 'ml-[5%]' : 'ml-[5%] absolute hidden'}>
                            <div className='flex justify-between my-3 hover:text-red-500'><div>TOP</div><div onClick={() => { setSanPhamTop(!sanPhamTop) }}>+</div> </div>
                            <div className={sanPhamTop ? 'ml-[10%]' : 'ml-[10%] hidden absolute'}>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Stand for northside</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>T-Shirt</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Shirt & Polo</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Hoodie & Sweatshirt</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Jacket</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Women</div>
                            </div>

                            <div className='flex justify-between my-3 hover:text-red-500'><div>BOTTOM</div><div onClick={() => { setSanPhamBottom(!sanPhamBottom) }}>+</div> </div>
                            <div className={sanPhamBottom ? 'ml-[10%]' : 'ml-[10%] hidden absolute'}>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Pants</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Shorts</div>
                            </div>

                            <div className='flex justify-between my-3 hover:text-red-500'><div>ACCESSORY</div><div onClick={() => { setSanPhamAccessory(!sanPhamAccessory) }}>+</div></div>
                            <div className={sanPhamAccessory ? 'ml-[10%]' : 'ml-[10%] hidden absolute'}>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Bag & Backpack</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Hat</div>
                                <div className='my-3 font-thin hover:text-red-500' onClick={() => { navigate("/all-sale") }}>Others</div>
                            </div>
                        </div>
                        <div className="my-2 hover:text-red-500" onClick={() => { navigate("/bubble-gum") }}>BUBBLE GUM</div>
                        <div className="my-3 hover:text-red-500" onClick={() => { navigate("/stand-for-northside") }}>STAND FOR NORTHSIDE</div>
                        <div className="my-3 hover:text-red-500" onClick={() => { navigate("/all-sale") }}>ALL SALE</div>
                        <div className="my-3 hover:text-red-500" onClick={() => { navigate("/gioithieu") }}>Về chúng tôi</div>
                        <div className="my-3 hover:text-red-500" onClick={() => { navigate("/tin-tuc") }}>Blog</div>
                        <div className="my-3 hover:text-red-500" onClick={() => { navigate("/lienhe") }}>Liên hệ</div>
                    </div>
                </div>

                <div></div>

                <div>
                    <div className="w-[70%]">
                        <div>CÔNG TY TNHH 2 THÀNH VIÊN CLOWNZ</div>
                        <div className="flex justify-between items-center mt-5">
                            <div>
                                {`Điện thoại : 058660 8660`}
                            </div>
                            <div><button className="px-10 py-2 bg-slate-700 text-white hover:bg-black">Gọi ngay</button></div>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div>
                                {`Email:  duong@clownz.vn`}
                            </div>
                            <div><button className="px-10 py-2 bg-slate-700 text-white hover:bg-black">Gửi ngay</button></div>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div>
                                {`Chatbot:  Messenger`}
                            </div>
                            <div><button className=" px-[33px] py-2 bg-slate-700 text-white hover:bg-black">Nhắn ngay</button></div>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <div>Giờ mở cửa</div>
                            <div className="font-bold">Mon - Sun | 09:30 ~ 21:30</div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className="flex">
                            <div className="w-[45%]">
                                <img src={clowz_address_nuitruc} alt="" />
                            </div>
                            <div className="w-[50%] ml-[3%]">
                                <div className='font-bold'>CLOWN NÚI TRÚC</div>
                                <div className='mt-4'>45 Núi Trúc, Ba Đình, HN</div>
                                <div className='flex gap-2 mt-4'>
                                    <div>Mở cửa: </div>
                                    <div className='font-bold'>Mon - Sun | 09:30 ~ 21:30</div>
                                </div>
                                <div className='flex gap-2 mt-4'>
                                    <div>Phone: </div>
                                    <div className='font-bold'>058660 8660</div>
                                </div>
                                <button className='px-10 py-2 bg-slate-700 hover:bg-black mt-3 text-white'>
                                    Xem cửa hàng
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <div className="flex">
                            <div className="w-[45%]">
                                <img src={clowz_address_hodacdi} alt="" />
                            </div>
                            <div className="w-[50%] ml-[3%]">
                                <div className='font-bold'>CLOWN HỒ ĐẮC DI</div>
                                <div className='mt-2'>19 Hồ Đắc Di, Đống Đa, HN</div>
                                <div className='flex gap-2 mt-2'>
                                    <div>Mở cửa: </div>
                                    <div className='font-bold'>Mon - Sun | 09:30 ~ 21:30</div>
                                </div>
                                <div className='flex gap-2 mt-2'>
                                    <div>Phone: </div>
                                    <div className='font-bold'>058660 8660</div>
                                </div>
                                <button className='px-10 py-2 bg-slate-700 hover:bg-black mt-3 text-white'>
                                    Xem cửa hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LienHe;