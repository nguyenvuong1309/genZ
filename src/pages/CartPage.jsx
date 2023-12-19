



import { useNavigate } from "react-router-dom";
import top_product_image from "../assets/TopProduct/top_product_image_1.webp"
import { useState } from "react";






const CartPage = () => {
    const navigate = useNavigate();
    const [numberOfProduct, setNumberOfProduct] = useState(0);
    return (
        <>
            {
                false ? (
                    <div>
                        <div className="flex justify-center pt-32">
                            <div className="w-[90%] flex gap-2 items-end mt-10">
                                <div className="text-[22px]">GIỎ HÀNG</div>
                                <div className="text-[15px]">( sản phẩm)</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[13%]">
                                <img src="https://bizweb.dktcdn.net/100/414/728/themes/867455/assets/empty-cart.png?1698225267798" className="w-full" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div>
                                <button className="flex px-10 py-4 bg-black text-white hover:bg-slate-600 mt-5 mb-10" onClick={() => { navigate("/") }}>
                                    TIẾP TỤC MUA SẮM
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center pt-32 pb-32">
                        <div className="w-[95%]">
                            <div className="flex items-end gap-2">
                                <div className="text-2xl">GIỎ HÀNG </div>
                                <div className="font-thin">(2 sản phẩm)</div>
                            </div>
                            <div className="grid grid-cols-[6fr_4fr]">
                                <div className="flex justify-between items-center">
                                    <div className="w-[15%]"><img src={top_product_image} alt="" /></div>
                                    <div>
                                        <div>ClownZ Grunge T-shirt - White / L</div>
                                        <div className="text-red-500">Xóa</div>
                                    </div>
                                    <div className="text-red-500">200.000₫</div>
                                    <div className="border border-black flex gap-4 px-4 items-center">
                                        <div className="caret-transparent" onClick={() => { numberOfProduct > 0 ? setNumberOfProduct(numberOfProduct - 1) : null }}>-</div>
                                        <div className="border border-x-1 border-y-0 px-2 caret-transparent">{numberOfProduct}</div>
                                        <div className="caret-transparent" onClick={() => { setNumberOfProduct(numberOfProduct + 1) }}>+</div>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="w-[70%]">
                                        <div className="grid w-full">
                                            <div className="flex justify-between w-full pb-8">
                                                <div className="">
                                                    Tạm tính:
                                                </div>
                                                <div className="">
                                                    299.000đ
                                                </div>
                                            </div>
                                            <div className="border border-x-0 border-b-0 border-t-2 flex justify-between w-full pt-8 items-center">
                                                <div>
                                                    Thành tiền:
                                                </div>
                                                <div className="font-bold text-red-500 text-2xl">
                                                    299.000đ
                                                </div>
                                            </div>
                                            <div className="grid pt-10">
                                                <button className="bg-black text-white py-4">THANH TOÁN NGAY</button>
                                                <button className="text-black mt-8 py-4 border border-black" onClick={() => { navigate("/all-sale") }}>TIẾP TỤC MUA HÀNG</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default CartPage;