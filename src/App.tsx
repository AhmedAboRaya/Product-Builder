import Card from './Components/Card'
import Modal from './Components/ui/Modal/Modal'
import Button from './Components/ui/Buttons/Button'
import { useState } from 'react'


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

  /*_________ RENDER _______*/

  return (
    <>
    
      <div className='container mx-auto pt-4'>
        <Button bg='bg-blue-700' value='Add Product' width='w-full' onClickFN={openModal}/>
        <Card /> 
      </div>

      <Modal closeModal={closeModal} isOpen={isOpen} title='Add New Product'> 


        <div className='flex items-center space-x-2'>
          <Button bg='bg-blue-600' value='Submit' width='w-full'/>
          <Button bg='bg-gray-500' value='Cancel' width='w-full' onClick={closeModal}/>
        </div>

      </Modal>
    </>
  )
}

export default App
