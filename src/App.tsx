import Card from './Components/Card'
import Modal from './Components/ui/Modal/Modal'
import Button from './Components/ui/Buttons/Button'
import Input from './Components/ui/Input'
import { productValidation } from './Validation'
import { useState,ChangeEvent } from 'react'
import { formInputList, IProduct, productList } from "./Data";
import ErrorMessage from './Components/ErrorMessage'


function App() {

 /*_________ CONSTANT _______*/
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    imageAlt: "",
    className: "",
    price: ""
  }

  /*_________ STATES _______*/
  const [isOpen, setIsOpen] = useState(false);

  const [error, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: ""
  })

  const [product, setProduct] = useState <IProduct>(
    defaultProductObj
  );

  /*_________ HANDLER _______*/
  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
    const { value, name } = e.target;
    setProduct ({
      ...product,
      [name]: value
    })

    setErrors ({
      ...error,
      [name]: value
    })
    
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
    
    console.log("Send Data to server");

    
    // productList.push(product);
  }

  const onCancelHandler = () => {
    setProduct(defaultProductObj)
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


  /*_________ RENDER _______*/

  return (
    <>
    
      <div className='container mx-auto pt-4'>
        
        <Button bg='bg-blue-700' hover='hover:bg-blue-800' value='Add Product' width='w-full' onClick={openModal}/>
        <Card /> 
      </div>

      <Modal closeModal={closeModal} isOpen={isOpen} title='Add New Product'> 


        <form className='flex-col flex items-center space-x-2' onSubmit={onSubmitHandler}>
          <div className='w-full pb-4'>
            {renderInputList}
          </div>

          <div className='flex space-x-1 w-full'>
            <Button bg='bg-blue-600' hover='hover:bg-blue-800' value='Submit' width='w-full'/>
            <Button bg='bg-gray-400' hover='hover:bg-gray-500' value='Cancel' width='w-full' onClick={onCancelHandler}/>
          </div>

        </form>

      </Modal>
    </>
  )
}

export default App
