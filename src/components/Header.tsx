import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'


const Header = () => {

  return (
    <div className='px-[180px] py-[30px] flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
            <Image
                src="icon.svg"
                width={56}
                height={56}
                alt="logo"
            />
            <h1 className='text-lg font-bold'>GEN<br/>FINTECH</h1>
        </div>
        <div className='flex space-x-4'>
            <Link href='/'><Button className='bg-white text-gray-700 text-lg hover:bg-green-600 hover:text-white'>Home</Button></Link>
            <Link href='#about-us'><Button className='bg-white text-gray-700 text-lg hover:bg-green-600 hover:text-white'>About Us</Button></Link>
            <Link href='/AI'><Button className='bg-white text-gray-700 text-lg hover:bg-green-600 hover:text-white'>AI</Button></Link>
        </div>
    </div>
  )
}

export default Header