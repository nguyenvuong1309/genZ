

import stand_for_north_side from '../assets/stand_for_northside.webp';
import ProductItem from '../components/ProductItem';


const StandForNorthSide = () => {
    return (
        <div>
            <div className='flex justify-center pt-36'>
                <img src={stand_for_north_side} alt="" />
            </div>
            <div className='flex justify-center mt-5 mb-5'>
                <div className='w-11/12 flex justify-between text-lg'>
                    <div>Danh mục</div>
                    <div>Tìm theo +</div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-11/12 grid grid-cols-[1fr_1fr_1fr_1fr]
                max-[1300px]:grid-cols-[1fr_1fr_1fr]
                max-[1000px]:grid-cols-[1fr_1fr]
                max-[500px]:grid-cols-1
                '>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </div>
    )
}

export default StandForNorthSide;