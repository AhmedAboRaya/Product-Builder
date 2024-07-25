import { Github, Linkedin, Facebook  } from 'lucide-react';

const Footer = () => {
    return (
        <div className="w-full bg-gray-300 py-10 px-7 text-center">
            <h1 className='text-xl font-extrabold text-blue-700'>Ahmed Abo-Raya</h1>
            <div className='flex flex-row space-x-4 justify-center mt-4'>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100016644704372" className='text-blue-700 hover:text-red-600 pb-1 hover:border-b-2 border-red-600'><Facebook /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/AhmedAboRaya" className='text-blue-700 hover:text-red-600 pb-1 hover:border-b-2 border-red-600'><Linkedin /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ahmed-abo-raya-3a3112217/" className='text-blue-700 hover:text-red-600 pb-1 hover:border-b-2 border-red-600'><Github /></a>
            </div>   
        </div>
    )
}

export default Footer