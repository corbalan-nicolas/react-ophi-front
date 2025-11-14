const ProductCardList = ({children}) => {
    return (
        <div  className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4'>
            {children}
        </div>
    )
}

export default ProductCardList;