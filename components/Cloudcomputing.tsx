import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Cloudcomputing = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500'>
<div clud-jpg/>
{/*LEFT*/}
<div className='relative s-20 flex flex-1 flex-col xl w:1/2'>
 <Image src="/clud.jpg "
alt="Learning"
width={200}
height={200}
className="absolute left-[-20px] top-[-100px] w-100 lg:w-[-200px]"
/>
<h1 className="bold-52 lg:bold-88">Road Mape for Cloud Computing</h1>
<p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
<h3 className=' text-black bold-18 lg:bold-30' >Step 1: Learn the Basics</h3>
Before diving into cloud computing, it’s important to have a strong foundation in computer science fundamentals.

<h3 className=' text-black bold-18 lg:bold-30'>Step 2: Learn Cloud Computing</h3>
Once you have a good understanding of computer science fundamentals, you can move on to learning about cloud computing.
<h3 className='text-black bold-18 lg:bold-30'>Step 3: Develop Skills in Cloud Computing</h3>
To become job-ready in Cloud Computing, it’s important to develop specific skills in areas such as Cloud Security, DevOps, and Big Data.
<h3 className='text-black bold-18 lg:bold-30'> Step 4: Practice, Practice, Practice</h3>
Learning about cloud computing is just the first step. It's important to practice what you've learned and gain practical experience.
</p>
<div className='my-11 flex flex-wrap gap-5'>
  <div className='flex items-centre gap-2'>
  {Array(5).fill(1).map((_, index)=>(
  <Image
  src="/star.png"
  key={index}
  alt="star"
  width={24}
  height={24}/>
  ))} 
  </div>
  <p className='bold-16 lg:bold-20 text-blue-70 '>
      200K
        <span className='regular-16 lg:regular-20 ml-1 underline'>Excellent Reviews</span>
  </p>
  </div>  
  <div className='flex w-full gap-3 sm:flex-row'>
    <Button 
            type="button"
            title="Download App"
            variant="btn_green"/>
    <Button 
            type="button" 
            title="How we work?" 
            icon="/play.jfif"
            variant="btn_white_text" 
          />
  </div>
</div>
    </section>
  )  
}

export default Cloudcomputing
