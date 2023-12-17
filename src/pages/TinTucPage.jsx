


import tin_tuc from '../assets/TopProduct/tin-tuc.webp'
import tin_tuc_1 from '../assets/TopProduct/tin-tuc-1.webp'
import tin_tuc_2 from '../assets/TopProduct/tin-tuc-2.webp'


const TinTucPage = () => {
    return (
        <div className='pt-36'>
            <div className=' relative'>
                <img src={tin_tuc} alt="" />
                <div className='absolute bg-slate-700 top-[48%] right-[10%] px-[6%] py-[0.3%] text-white hover:bg-black'>Khám phá</div>
            </div>
            <div className='flex justify-center font-bold text-[30px] mt-10'>Tin tức</div>
            <div className='flex justify-center mb-20'>
                <div className='w-[92%]'>
                    <div>Tin tức</div>
                    <div className="grid grid-cols-[1fr_1fr]">
                        <div className='grid grid-cols-[1fr_1fr]'>
                            <img src={tin_tuc_1} alt="" />
                            <div>
                                <div className='text-2xl mx-4'>𝐂𝐥𝐨𝐰𝐧𝐙 𝐱 𝐒𝐚𝐢𝐠𝐨𝐧 𝐒𝐰𝐚𝐠𝐠𝐞𝐫 𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧</div>
                                <button className='mx-4 mt-5 px-10 py-1 border borer-slate-100 font-thin hover:bg-slate-400 hover:text-white'>Xem thêm</button>
                            </div>
                        </div>
                        <div className='grid grid-cols-[1fr_1fr]'>
                            <img src={tin_tuc_2} alt="" />
                            <div>
                                <div className='text-2xl mx-4'>ClownZ x Rap Nhà Làm | Homemade Rapper Collection</div>
                                <button className='mx-4 mt-5 px-10 py-1 border borer-slate-100 font-thin hover:bg-slate-400 hover:text-white'>Xem thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TinTucPage;  