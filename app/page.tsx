import Image from 'next/image';
import { BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import sik from "../public/sik.png"

export default function Home() {
  return (
    <main className='bg-white px-10'>

      <section className='min-h-screen' >

     <nav className='py-8 mb-12 flex justify-between items-center'>
      <h1 className='text-lg font'>DevelopedBySikiru</h1>
      <ul className='flex items-center'>
        <li className='cursor-pointer text-2xl mr-5'><BsFillMoonStarsFill/></li>
        <li className='bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md px-4 py-2'><a className=''  href="">Resume</a></li>
      </ul>

     </nav>

      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-400 font-medium'>Sikiru Momodu</h2>
        <h3 className='text-2xl py-2'>Developer and Designer</h3>
        <p className='text-md py-5 leading-8 text-gray-800'>If you are reading this that means you are inerested in my work hit me up with you designs amd app ideas, let's get hacking</p>
      </div>

      <div className='text-5xl flex justify-center gap-8 text-gray-700'>
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillYoutube/>
      </div>

      <div className='relative bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden'>
        
        <Image src={sik} alt='sikiru' layout='fill' objectFit='cover' />

      </div>
      </section>

      <section>
        
      </section>

    </main>
  )
}
