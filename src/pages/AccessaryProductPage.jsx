import ProductItem from "../components/ProductItem";





const AccessaryProductPage = () => {
    return (
        <>
            <div className="flex justify-center mt-20 mb-20">
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

export default AccessaryProductPage;