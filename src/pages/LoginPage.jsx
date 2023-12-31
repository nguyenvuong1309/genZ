import { useNavigate } from "react-router-dom";








const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center py-32">
            <div className="w-[70%]">
                <div className="flex justify-center text-xl">ĐĂNG NHẬP BẰNG TÀI KHOẢN</div>
                <div className="flex justify-center gap-10 mt-5">
                    <div className="text-white bg-blue-600 p-2 hover:bg-blue-400">facebook</div>
                    <div className="text-white bg-red-600 p-2 hover:bg-red-400">google</div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="w-[80%]">
                        <div className="w-">EMAIL</div>
                        <input type="email" placeholder="Nhập Địa chỉ Email" className="w-full bg-slate-100 p-3" />
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="w-[80%]">
                        <div>TÀI KHOẢN</div>
                        <input type="password" placeholder="Nhập Mật khẩu" className="w-full bg-slate-100 p-3" />
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <button className="text-white px-20 py-4 bg-black hover:bg-slate-800">ĐĂNG NHẬP</button>
                </div>
                <div className="flex justify-center text-red-500 mt-5 hover:text-black" onClick={() => { navigate("/account/forgetpassword") }}>Quên mật khẩu?</div>
                <div className="flex justify-center mt-5 gap-2">
                    <div>BẠN CHƯA CÓ TÀI KHOẢN. ĐĂNG KÝ </div>
                    <div className="text-red-500 hover:text-black" onClick={() => { navigate("/account/register") }}>TẠI ĐÂY</div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;