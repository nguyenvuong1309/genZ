import ProductItem from "../components/ProductItem";





const BottomProductPage = () => {
    return (
        <>
            <div className="flex justify-center pt-32 mb-20">
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] w-[95%]
                max-[500px]:grid-cols-1
                ">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </>
    )
}

export default BottomProductPage;

