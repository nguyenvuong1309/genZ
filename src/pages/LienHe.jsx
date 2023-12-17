



import clowz_address_nuitruc from '../assets/clownz_address_nuitruc.webp';
import clowz_address_hodacdi from '../assets/clownz_address_hodacdi.webp';



const LienHe = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="grid grid-cols-[2fr_4fr_4fr]">
                <div className="ml-[30%]">
                    <div className="font-bold text-[40px]">CLOWNZ</div>
                    <div className="mt-5">
                        <div className="my-3">Trang chủ</div>
                        <div className='flex justify-between items-center'>
                            <div className="my-3">NEW ARRIVAL</div>
                            <div>+</div>
                        </div>
                        <div className='ml-[5%]'>
                            <div className='flex justify-between'>
                                <div>TOP</div>
                                <div>+</div>
                            </div>
                            <div className='flex justify-between'>
                                <div>BOTTOM</div>
                                <div>+</div>
                            </div>
                            <div className='flex justify-between'>
                                <div>ACCESSORY</div>
                                <div>+</div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className="my-3">Sản phẩm</div>
                            <div>+</div>
                        </div>
                        <div className="my-3">BUBBLE GUM</div>
                        <div className="my-3">STAND FOR NORTHSIDE</div>
                        <div className="my-3">ALL SALE</div>
                        <div className="my-3">Về chúng tôi</div>
                        <div className="my-3">Blog</div>
                        <div className="my-3">Liên hệ</div>
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