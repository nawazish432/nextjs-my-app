import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Fullstack = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500'>
<div clud-jpg/>
{/*LEFT*/}
<div className='relative s-20 flex flex-1 flex-col xl w:1/2'>
 <Image src="/FULLSTACK.jfif "
alt="Learning"
width={200}
height={200}
className="absolute left-[-20px] top-[-100px] w-100 lg:w-[-200px]"
/>
<h1 className="bold-52 lg:bold-88">Full Stack Development</h1>
<p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
<h3 className=' text-black bold-18 lg:bold-30' >What is Full Stack</h3>
A full-stack web developer is a person who can develop both client and server software.

In addition to mastering HTML and CSS, he/she also knows how to:

Program a browser (e.g. using JavaScript, jQuery, Angular, or Vue)
Program a server (e.g. using PHP, ASP, Python, or Node)
Program a database (e.g. using SQL, SQLite, or MongoDB)


<h3 className=' text-black bold-18 lg:bold-30'>How to Become a Full Stack Developer</h3>

According to Stack Overflows 2020 Developer Study, at least fifty percent of developers identify as full stack professionals, while 55.2 percent identify as back end, and 37.1 percent as front end.
<h3 className='text-black bold-18 lg:bold-30'>How Long It will take to become Front End Developer</h3>

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
      160K
        <span className='regular-16 lg:regular-20 ml-1 underline'>Excellent Reviews</span>
  </p>
  </div>  
  <div className='flex w-full gap-3 sm:flex-row'>
    <Button 
            type="button"
            title="Download App"
            variant="btn_dark_green"/>
    <Button 
            type="button" 
            title="How we work?" 
            icon="/play.jfif"
            variant="btn_dark_green" 
          />
  </div>
</div>
    </section>
  )  
}


export default Fullstack
