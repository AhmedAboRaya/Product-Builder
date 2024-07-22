import Card from './Components/Card'
import Modal from './Components/ui/Modal/Modal'
import Button from './Components/ui/Buttons/Button'
import Input from './Components/ui/Input'
import { useState } from 'react'
import { formInputList } from "./Data";


function App() {

  /*_________ STATE _______*/
  let [isOpen, setIsOpen] = useState(false)

  /*_________ HANDLER _______*/
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  /*_________ RENDER INPUT FORM _______*/
  const renderInputList = formInputList.map( input =>(
    <div className='flex flex-col'>
      <label htmlFor={input.id} className='ml-1 mb-1 font-semibold text-black'> {input.label} </label>
      <Input type={input.type} id={input.id} name={input.name} />
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


        <div className='flex-col flex items-center space-x-2'>
          <div className='w-full pb-4'>
            {renderInputList}
          </div>
          <Button bg='bg-blue-600' hover='hover:bg-blue-800' value='Submit' width='w-full'/>
          <Button bg='bg-gray-400' hover='hover:bg-gray-500' value='Cancel' width='w-full' onClick={closeModal}/>
        </div>

      </Modal>
    </>
  )
}

export default App
