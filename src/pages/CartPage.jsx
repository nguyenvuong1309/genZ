import { useNavigate } from "react-router-dom";







const CartPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-center">
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
    )
}

export default CartPage;