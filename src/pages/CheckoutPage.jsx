


import { useNavigate } from "react-router-dom";
import top_product_image from "../assets/TopProduct/top_product_image.webp"
import { IoIosArrowBack } from "react-icons/io";



const CheckOutPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center">
            <div className="w-[85%]">
                <div className="grid grid-cols-[6fr_4fr] pt-32 justify-between">
                    <div className="w- flex justify-between w-[97%]">
                        <div className="w-[48%]">
                            <div className="flex justify-between">
                                <div className=" font-bold">Thông tin nhận hàng</div>
                                <div className="text-blue-400"> Đăng nhập</div>
                            </div>
                            <input type="email" placeholder="Email" className="w-full border border-slate-400  rounded-sm p-2 my-2" />
                            <input type="text" placeholder="Họ và tên" className="w-full border border-slate-400  rounded-sm p-2 my-2" />
                            <input type="email" placeholder="Số điện thoại" className="w-full border border-slate-400  rounded-sm p-2 my-2" />
                            <input type="email" placeholder="Địa chỉ" className="w-full border border-slate-400  rounded-sm p-2 my-2" />
                            <input type="email" placeholder="Tỉnh thành" className="w-full border border-slate-400  rounded-sm p-2 my-2" />
                            <input type="email" placeholder="Quận huyện" className="w-full border border-slate-400  rounded-sm p-2 my-2" />
                            <input type="email" placeholder="Phường xã" className="w-full border border-slate-400  rounded-sm p-2 my-2" />
                            <textarea placeholder="Ghi chú (tùy chọn)" className="w-full border border-slate-400  rounded-sm p-2 my-2" />
                        </div>
                        <div className="w-[48%]">
                            <div className="font-bold">Vận chuyển</div>
                            <div className="font-bold">Thanh toán</div>
                            <div className="border border-slate-400 p-2 rounded-md">
                                Thanh toán khi giao hàng (COD)
                            </div>
                        </div>
                    </div>
                    <div className="font-bold w-[97%]">
                        Đơn hàng
                        <div className="flex justify-between items-center border border-t-2 border-x-0 border-b-0 pt-8 pb-2">
                            <div className="flex items-center gap-4">
                                <div className="w-[12%] border border-black px-1 rounded-lg"><img src={top_product_image} /></div>
                                <div>
                                    <div>ClownZ Grunge T-shirt</div>
                                    <div className="font-thin">White/L</div>
                                </div>
                            </div>
                            <div className="font-thin">200.000đ</div>
                        </div>
                        <div className="grid grid-cols-[7fr_2fr] justify-between items-center border border-x-0 border-b-0 border-t-2 pt-8">
                            <div className="w-[97%]">
                                <input type="email" placeholder="Nhập mã giảm giá" className="w-full border border-slate-400  rounded-sm p-2 my-2" />
                            </div>
                            <div className="w-full">
                                <button className="text-white bg-blue-300 w-full p-2">Áp dụng</button>
                            </div>
                        </div>
                        <div className="border border-x-0 border-b-0 border-t-2 pt-8">
                            <div className=" my-2 font-light">Tạm tính</div>
                            <div className=" my-2 font-light">Phí vận chuyển</div>
                            <div className=" my-2 font-medium">{'Free đơn hàng > 700k'}</div>
                        </div>
                        <div className="border border-x-0 border-b-0 border-t-2">
                            <div className="font-thin my-4">Tổng cộng</div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-blue-400">
                                    <IoIosArrowBack />
                                    <div className="font-thin" onClick={() => { navigate("/cart") }}>Quay về giỏ hàng</div>
                                </div>
                                <button className="px-3 py-2 bg-blue-500 text-white">ĐẶT HÀNG</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default CheckOutPage;