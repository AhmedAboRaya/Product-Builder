import { InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    
}


const Input = ({ ...rest }: IProps) => {
    return (
        <input {...rest} className='border-2 
        rounded-lg 
        mb-3 p-1 
        shadow-md
        focus:border-blue-600 
        focus:outline-none
        focus:ring-1
        focus:ring-blue-600
        text-md' />
    )
}

export default Input