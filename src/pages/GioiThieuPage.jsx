



import clownz_logo from '../assets/clownz-logo.webp'
import gioi_thieu from '../assets/gioi-thieu.webp'




const GioiThieuPage = () => {
    return (
        <div className="pt-36">
            <div className="flex justify-center font-bold">Giới thiệu</div>
            <div className='flex justify-center'> <div className='w-[7%]'><img src={clownz_logo} alt="" /></div></div>
            <div></div>
            <div className='flex justify-center'>
                <div className='w-[61%] mt-5'>Câu chuyện bắt đầu vào năm 2011 của Hà Nội, khi chúng tôi - những con người yêu Hip-hop và thời trang đường phố tụ họp lại.
                    Một vài người là B-Boy và C-Walker, một số khác là Beatboxer. Nhưng tất cả đều có chung một câu hỏi:“Chúng ta có thể làm gì
                    cho cộng đồng những người yêu Streetwear và Hip-hop?</div>
            </div>
            <div className='flex justify-center mt-10'>
                <div className=' w-[80%]'>
                    <img src={gioi_thieu} alt="" />
                </div>
            </div>
            <div className="flex justify-center font-bold mt-5">Brand Vision</div>
            <div className='flex justify-center mt-5'>
                <div className='w-[61%]'>Một trong những đại diện lớn nhất của thời trang & văn hoá hiphop thủ đô, trong suốt những năm qua "chú hề" liên tục chuyển mình, mang đến nhiều niềm vui, sự mới mẻ</div>
            </div>

            <div className='flex justify-center mt-3'>
                <div className='w-[61%]'>Và sẽ không dừng lại ở đó, ClownZ mong muốn trở thành 1 phần quan trọng trong việc phát triển, phổ biến văn hoá hiphop nói riêng & là đại diện nổi bật của tinh thần đột phá trong thời trang đường phố Việt Nam</div>
            </div>
            <div className="flex justify-center font-bold mt-5">Brand Mission</div>
            <div className='flex justify-center mt-5'>
                <div className='w-[61%]'>Chúng tôi đam mê với việc truyền tải nền văn hoá Hip-hop, Streetwear lâu đời từ Âu Mỹ tới với những khách hàng Việt Nam. Để mỗi sản phẩm được bán ra, ngoài sự chau chuốt về chất lượng và thiết kế, chúng tôi còn đem vào đó một tinh thần vui vẻ, màu sắc và thật nhiều giá trị phía sau </div>
            </div>
            <div className="flex justify-center font-medium mt-7 mb-20">ClownZ stand for Northside</div>
        </div>
    )
}

export default GioiThieuPage;