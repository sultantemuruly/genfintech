import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

function Hero() {
  return (
    <div className='px-[180px] py-[170px] flex items-center justify-between'>
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Leverage AI</h1>
                <h1 className='text-4xl font-bold'>for investment strategies.</h1>
            </div>
            <div className='flex justify-center py-10'>
                <Link href='/AI'><Button size='lg' className='bg-green-600 text-lg hover:bg-slate-100 hover:text-gray-700'>Get Started</Button></Link>
            </div>
        </div>
        <div>
            <Image
                src="hero-image.svg"
                width={537}
                height={315}
                alt="hero-image"
            />
        </div>
    </div>
  )
}

export default Hero