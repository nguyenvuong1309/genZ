


import { useNavigate } from "react-router-dom";








const RegisterPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center my-10">
            <div className="w-[70%]">
                <div className="flex justify-center text-xl">ĐĂNG KÝ TÀI KHOẢN</div>
                <div className="flex justify-center text-sm mt-5">Nếu chưa có tài khoản vui lòng đăng ký tại đây</div>

                <div className="flex justify-center gap-10 mt-5">
                    <div className="text-white bg-blue-600 p-2 hover:bg-blue-400">facebook</div>
                    <div className="text-white bg-red-600 p-2 hover:bg-red-400">google</div>
                </div>

                <div className="flex justify-center mt-5">
                    <div className="w-[80%]">
                        <div className="w-">HỌ</div>
                        <input type="text" placeholder="Nhập Họ" className="w-full bg-slate-100 p-3" />
                    </div>
                </div>

                <div className="flex justify-center mt-5">
                    <div className="w-[80%]">
                        <div>TÊN</div>
                        <input type="text" placeholder="Nhập Tên" className="w-full bg-slate-100 p-3" />
                    </div>
                </div>

                <div className="flex justify-center mt-5">
                    <div className="w-[80%]">
                        <div>SỐ ĐIỆN THOẠI</div>
                        <input type="phone" placeholder="Nhập Số điện thoại" className="w-full bg-slate-100 p-3" />
                    </div>
                </div>

                <div className="flex justify-center mt-5">
                    <div className="w-[80%]">
                        <div>EMAIL</div>
                        <input type="email" placeholder="Nhập Địa chỉ email" className="w-full bg-slate-100 p-3" />
                    </div>
                </div>

                <div className="flex justify-center mt-5">
                    <div className="w-[80%]">
                        <div>MẬT KHẨU</div>
                        <input type="password" placeholder="Nhập Mật khẩu" className="w-full bg-slate-100 p-3" />
                    </div>
                </div>

                <div className="flex justify-center mt-5">
                    <button className="text-white px-20 py-4 bg-black hover:bg-slate-800">TẠO TÀI KHOẢN</button>
                </div>
                <div className="flex justify-center text-red-500 mt-5 hover:text-black text-[13px]" onClick={() => { navigate("/account/login") }}>ĐĂNG NHẬP</div>
            </div>
        </div>
    )
}

export default RegisterPage;