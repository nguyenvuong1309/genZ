import { useNavigate } from "react-router-dom";




const ResetPasswordPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center my-10">
            <div className="w-[70%]">
                <div className="flex justify-center text-xl">ĐẶT LẠI MẬT KHẨU</div>
                <div className="flex justify-center text-sm mt-5">Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</div>
                <div className="flex justify-center mt-5">
                    <div className="w-[80%]">
                        <div className="w-">EMAIL</div>
                        <input type="email" placeholder="Nhập Địa chỉ Email" className="w-full bg-slate-100 p-3" />
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <button className="text-white px-20 py-4 bg-black hover:bg-slate-800">LẤY LẠI MẬT KHẨU</button>
                </div>
                <div className="flex justify-center mt-5 gap-2">
                    <div>QUAY LẠI</div>
                    <div className="text-red-500 hover:text-black" onClick={() => { navigate("/account/login") }}>TẠI ĐÂY</div>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage;