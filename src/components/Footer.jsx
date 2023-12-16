

import { FaShippingFast } from "react-icons/fa";
import { IoGiftSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr]
        max-[950px]:grid-cols-[1fr_1fr]
        max-[500px]:grid-cols-[1fr]
        ">
            <div className="flex justify-center
             max-[500px]:mt-10
            ">
                <div className="w-10/12">
                    <div className="text-[50px] mb-10 font-bold">ClownZ</div>
                    <div className="flex justify-start items-center mb-4 gap-4">
                        <div>
                            <FaShippingFast />
                        </div>
                        <div>Ship COD  toàn quốc</div>
                    </div>
                    <div className="flex justify-start items-center gap-4">
                        <div>
                            <IoGiftSharp />
                        </div>
                        <div>
                            FREESHIP đơn hàng từ 700.000đ
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center
            max-[500px]:mt-10
            ">
                <div className="w-10/12 grid gap-y-10">
                    <div className="font-bold">LIÊN HỆ</div>
                    <div className="grid gap-y-4">
                        <div className="flex items-center gap-x-4">
                            <div><IoHome /></div>
                            <div>CLOWNZ STORE</div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div><FaMapLocationDot /></div>
                            <div>45 Núi Trúc, Ba Đình, HN</div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div><FaMapLocationDot /></div>
                            <div>19 Hồ Đắc Di, Đống Đa, HN</div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div><IoMdMail /></div>
                            <div>vuong@gmail.com</div>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div><FaPhoneAlt /></div>
                            <div>058660 8660</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center
            max-[950px]:mt-10
            ">
                <div className="w-10/12">
                    <div className="mb-10 font-bold">CHÍNH SÁCH</div>
                    <div className="grid gap-y-4">
                        <div>*CHÍNH SÁCH THÀNH VIÊN</div>
                        <div>*CHÍNH SÁCH ĐỔI TRẢ</div>
                        <div>*CHÍNH SÁCH VẬN CHUYỂN</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center
            max-[950px]:mt-10
            ">
                <div className="w-10/12">
                    <div className="mb-10 font-bold">ĐĂNG KÍ NHẬN TIN</div>
                    <div>
                        <div className="mb-4">
                            Nhận thông tin sản phẩm mới nhất, tin khuyến mãi và nhiều hơn nữa.
                        </div>
                        <div className="flex">
                            <input className="bg-[#f0f0f0] h-10 w-1/2 text-center" placeholder="Email của bạn" />
                            <button className="bg-[#699C5D] w-1/2 text-white">ĐĂNG KÍ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;