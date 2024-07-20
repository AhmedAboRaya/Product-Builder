import ProductCard from './Components/ProductCard'
import {productList, IProduct} from './Data'

function App() {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 rounded-xl p-3 m-3'>
      {productList.map((product : IProduct)=> (
                <ProductCard 
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    imageURL={product.imageURL}
                    imageAlt={product.imageAlt}
                    className={product.className}
                    price={product.price}
                />
            ))}

    </div>
  )
}

export default App
