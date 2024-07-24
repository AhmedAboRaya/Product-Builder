import Card from './Components/Card'
import Modal from './Components/ui/Modal/Modal'
import Button from './Components/ui/Buttons/Button'
import Input from './Components/ui/Input'
import ErrorMessage from './Components/ErrorMessage'
import CircleColor from './Components/ui/CircleColor'
import { productValidation } from './Validation'
import { useState,ChangeEvent } from 'react'
import { formInputList, IProduct, colors, productList } from "./Data";
import ProductCard from './Components/ProductCard'
import { txtSlice } from './Utility/functions'
import { v4 as uuidv4 } from 'uuid';



function App() {

 /*_________ CONSTANT _______*/
  const defaultProductObj : IProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [""]
  }

  /*_________ STATES _______*/
  const [isOpen, setIsOpen] = useState(false);

  const [error, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  })

  const [product, setProduct] = useState <IProduct>(
    defaultProductObj
  );

  const [tempColor, setTempColors] = useState<string[]>([])

  const [products, setProducts] = useState<IProduct[]>(productList)
  


  /*_________ HANDLER _______*/
  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
    const { value, name } = e.target;
    setProduct ({
      ...product,
      [name]: value
    });

    setErrors ({
      ...error,
      [name]: ""
    });
    
  };

  const onSubmitHandler = (event:ChangeEvent<HTMLInputElement>) => {
    event?.preventDefault();

    const errors = productValidation({
      description: product.description,
      title: product.title,
      price: product.price,
      imageURL: product.imageURL
    });
    console.log(errors);

    const hasErrorMsg = Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");
    
    if(!hasErrorMsg){
      setErrors(errors);
      return;
    }
    
    setProducts(prev => [ { ...product, id:uuidv4(), colors: tempColor }, ...prev] )
    setTempColors([""]);
    setProduct(defaultProductObj)
    closeModal();
    console.log("Send Data to server");

    
    // productList.push(product);
  }

  const onCancelHandler = () => {
    setProduct(defaultProductObj)
    closeModal();
    console.log("Cancel");
  }


  /*_________ RENDER INPUT FORM _______*/
  const renderInputList = formInputList.map( input =>(
    <div className='flex flex-col' key={input.id}>
      <label htmlFor={input.id} className='ml-1 mb-1 font-semibold text-black'> {input.label} </label>
      <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={ onChangeHandler }/>
      <ErrorMessage msg={error[input.name]}/>
    </div>

  ));

  /*_________ RENDER COLORS IN INPUT FORM _______*/
  const renderColors = colors.map( color => <CircleColor key={color} color={color} onClick={() => {
    if(tempColor.includes(color)){
      // tempColor = tempColor.filter(element => element !== color);
      setTempColors(prev => prev.filter(element => element !== color))
      return;
    }
      
    setTempColors(prev => [...prev, color])
  }} />)



  /*_________ RENDER _______*/

  return (
    <>
    
      <div className='container mx-auto pt-4'>
        
        <Button bg='bg-blue-700' hover='hover:bg-blue-800' value='Add Product' width='w-full' onClick={openModal}/>
        {/* <Card />  */}


        <div className='grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 md:grid-cols-2 md:gap-4 lg:gap-4 xl:gap-4 lg:grid-cols-3 xl:grid-cols-4 rounded-xl p-3 m-3'>
          {products.map((product : IProduct)=> (
                    <ProductCard 
                        key={product.id}
                        title={product.title}
                        description={txtSlice(product.description,70)}
                        imageURL={product.imageURL}
                        imageAlt={"Error in image"}
                        className={"rounded-md border-2"}
                        price={product.price}
                        colors={product.colors}
                    />
                ))}
        </div>



      </div>

      <Modal closeModal={closeModal} isOpen={isOpen} title='Add New Product'> 


        <form className='flex-col flex  space-x-2'>
          <div className='w-full pb-4'>
            {renderInputList}
          </div>
          
          <div className='flex flex-row justify-start space-x-1 flex-wrap'>
            {renderColors}
          </div>

          <div className='flex flex-row justify-start space-x-1 flex-wrap'>
            {tempColor.map( color => 
              <span key={color} className='p-[2px] text-white text-sm mb-1 rounded-md' style={{ backgroundColor: color }}>{color}</span>
            )}
          </div>
          
          
          <div className='flex space-x-1 w-full'>
            <Button bg='bg-blue-600' hover='hover:bg-blue-800' value='Submit' width='w-full' onClick={onSubmitHandler}/>
            <Button bg='bg-gray-400' hover='hover:bg-gray-500' value='Cancel' width='w-full' onClick={onCancelHandler}/>
          </div>
          
        </form>

        

      </Modal>
    </>
  )
}

export default App
