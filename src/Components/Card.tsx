interface IProps {

}
import { productList, IProduct } from "../Data"
import ProductCard from "./ProductCard"
import { txtSlice } from "../Utility/functions"

const Card = ({}: IProps) => {
    return (
        <div className='grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 md:grid-cols-2 md:gap-4 lg:gap-4 xl:gap-4 lg:grid-cols-3 xl:grid-cols-4 rounded-xl p-3 m-3'>
          {productList.map((product : IProduct)=> (
                    <ProductCard 
                        key={product.id}
                        title={product.title}
                        description={txtSlice(product.description,70)}
                        imageURL={product.imageURL}
                        imageAlt={"Error in image"}
                        className={"rounded-md border-2"}
                        price={product.price}
                    />
                ))}
        </div>
      )
}

export default Card