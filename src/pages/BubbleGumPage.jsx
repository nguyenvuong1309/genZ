


import ProductItem from "../components/ProductItem";




const BubbleGumPage = () => {
    return (
        <>
            <div className='flex justify-center pt-36 mb-5'>
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
                </div>
            </div>
        </>
    )
}

export default BubbleGumPage;