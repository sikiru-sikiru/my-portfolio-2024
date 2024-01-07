"use client"
import Image from 'next/image';
import { BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import sik from "../public/sik.png";
import gallery from "../public/gallery.png";
import code from "../public/code.png";
import thumb from "../public/thumb.png";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.jpeg";
import img4 from "../public/img4.png";
import {useState, useEffect} from 'react';



export default function Home() {

const[darkMode, setDarkMode] = useState(false);

  return (

      <div className={darkMode ? "dark" : ""}>
      <head>
        
        <html lang="en">
          <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          
        </body>
        </html>
      </head>
          

    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>

      <section className='min-h-screen' >

     <nav className='py-6 mb-12 flex justify-between items-center'>
      <h1 className='text-lg font dark:text-white font-semibold'>DevelopedBySikiru</h1>
      <ul className='flex items-center'>
        <li className='cursor-pointer text-2xl mr-5 dark:text-white' onClick={() => setDarkMode (!darkMode)}><BsFillMoonStarsFill/></li>
        <li className='bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md px-4 py-2'><a className=''  href="">Resume</a></li>
      </ul>

     </nav>

      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-400 font-medium md:text-6xl'>Sikiru Momodu</h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-white' >Developer and Designer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>If you are reading this that means you are interested in my work hit me up with you designs and app ideas, let's get hacking✌🏼</p>
      </div>

      <div className='text-5xl flex justify-center gap-8 text-gray-700 dark:text-white'>
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillYoutube/>
      </div>
        <div className='flex justify-center'>
        <div className='relative bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:h-96 md:w-96 py-10'>
        
        <Image src={sik} alt='sikiru' layout='fill' objectFit='cover'/>

      </div>
        </div>
      
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1 mt-10 font-medium dark:text-white'>Services I Offer</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Since the begining of my journey as a freelance designer and developer i have done work for <span className='text-teal-500'> agencies </span> 
           consulted for <span className='text-teal-500'>startups</span> and colaborated with talented people to create digital products for both business and consumer use</p>

          <p className='text-md py-2 mb-10 leading-8 text-gray-800 dark:text-white'>I offer from a wide range of services including programming and teaching </p>

        </div>

        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white' >
            <div className='flex justify-center'>
            <Image src={gallery} alt='3d gallery image' width={100} height={100} className='flex justify-center'/>
            </div>
             <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
             <p className='py-2'>creating elegant designs suited for your needs following core design theory</p>
             <h4 className='py-4 text-teal-600'>Design tools i use</h4>
             <p className='text-gray-800 py-1'>illustrator</p>
             <p className='text-gray-800 py-1'>Figma</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white' >
            <div className='flex justify-center'>
            <Image src={code} alt='3d gallery image' width={100} height={100} className='flex justify-center'/>
            </div>
             <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
             <p className='py-2'>creating elegant designs suited for your needs following core design theory</p>
             <h4 className='py-4 text-teal-600'>Design tools i use</h4>
             <p className='text-gray-800 py-1'>illustrator</p>
             <p className='text-gray-800 py-1'>Figma</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white' >
            <div className='flex justify-center'>
            <Image src={thumb} alt='3d gallery image' width={100} height={100} className='flex justify-center'/>
            </div>
             <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
             <p className='py-2'>creating elegant designs suited for your needs following core design theory</p>
             <h4 className='py-4 text-teal-600'>Design tools i use</h4>
             <p className='text-gray-800 py-1'>illustrator</p>
             <p className='text-gray-800 py-1'>Figma</p>
          </div>

        </div>
      </section>

      <section>
        <div>
          <h3 className='py-1 mt-10 text-3xl font-medium dark:text-white'>Portofolio</h3>

          <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Since the begining of my journey as a freelance designer and developer i have done work for <span className='text-teal-500'> agencies </span> 
           consulted for <span className='text-teal-500'>startups</span> and colaborated with talented people to create digital products for both business and consumer use</p>

          <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>I offer from a wide range of services including programming and teaching </p>

        </div>

        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          
          <div className='basis-1/3 flex-1'>
              <Image src={img1} alt='web designproject' className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1'>
              <Image src={img2} alt='web designproject' className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1'>
              <Image src={img3} alt='web designproject' className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1'>
              <Image src={img4} alt='web designproject' className='rounded-lg object-cover' width={100} height={100} layout='responsive' />
          </div>

        </div>
      </section>

    </main>

    </div>
  )
}

