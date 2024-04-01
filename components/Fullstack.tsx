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
To become a full stack developer, you’ll need to familiarize yourself with two basic web development concepts: the front end and the back end.

The front end, also known as client-side or customer-facing side, refers to all the elements of a computer application that users interact with directly. By contrast, the back end encompasses all the behind-the-scenes tech that computes business logic, fulfills user requests, and permanently stores sensitive data.

You can think of the front end as the tip of an iceberg, while the bulk of the unseen back end extends far below the water’s surface.

Front end developers create and optimize visible parts of a website, making components responsive to different viewing environments, such as smartphones, tablets, and desktops. They use client-facing programming languages, like HTML, CSS, and JavaScript, to render an engaging site.

On the other hand, back end development requires programmers to build and refine the internal software that operates a company’s databases, servers, and proprietary software. Back end developers are responsible for creating the pathways to deliver information to and from users who operate front end interfaces.

This is where full stack development comes in. “Full stack” refers to the entirety of a site or application’s front and back end architecture. As you might expect, full stack professionals are capable of addressing both sides of the proverbial equation. 

Rise, Fall, and Resurgence
At the onset of the Internet age, most web developers were dubbed full stack developers. In the 1970s and 80s, it was common for a single person to craft a software program from start to finish because there weren’t many layers of complexity between the computer’s hardware and the programmer.

However, as applications became increasingly elaborate, full stack development began to waver in its ubiquity. The advent of client-server computing in the nineties, coupled with the rising popularity of the net, necessitated the emergence of trained specialists. Programmers were subdivided based on the company’s stack: Networks, the front end, databases, and servers were all managed by distinct departments.

The diversified trend only started to reverse in the late 2000s. New technologies became streamlined, allowing aspiring developers to construct a fully fledged application in a shorter period. Gone were the days of the Java stack and Oracle databases — instead, high-powered databases like MySQL, PHP, and Ruby on Rails claimed the spotlight.

In recent years, the rarefied full stack developer has become significantly more critical. Employers understand their centrality; after all, every team benefits from at least one individual with a holistic knowledge of a project’s parts. Full stack developers have a special knack for drawing together various tech tiers into a neatly packaged application.

In short, full stack developers are responsible for the following activities:

Working with a website from start to final launch
Prototyping, creating, and building websites along with user interface teams
Designing user interactions through robust front end architecture
Managing database and server administration duties
Communicating with end-users to determine product effectiveness
According to Stack Overflow’s 2020 Developer Study, at least fifty percent of developers identify as full stack professionals, while 55.2 percent identify as back end, and 37.1 percent as front end.
<h3 className='text-black bold-18 lg:bold-30'>How Long It will take to become Front End Developer</h3>
Becoming a full stack developer involves mastering both the front end and back end of web development. Here are the essential steps to embark on this rewarding journey:

Identify the Skills You Need to Learn:
Understand the basics of front-end (client-side) and back-end (server-side) development.
Familiarize yourself with programming languages like HTML, CSS, and JavaScript for the front end, and Node.js, Python, or Java for the back end.
Determine Your Ideal Timeline:
Decide whether you want to learn full stack development in a shorter timeframe (e.g., a coding bootcamp) or take a more extended self-paced approach.
Start Learning in a Format That Suits You:
Explore online courses, tutorials, and coding bootcamps.
Practice building small projects to reinforce your learning.
Begin Building Your Portfolio:
Create a portfolio showcasing your projects. Include both front-end and back-end work.
Highlight your problem-solving skills, creativity, and ability to build functional applications.
Start the Job Search:
Look for entry-level positions or internships.
Network with other developers and attend tech events.
Ace the Interview:
Prepare for technical interviews by practicing coding challenges.
Showcase your passion for development and your ability to work on full-stack projects.
Remember, becoming a full stack developer doesn’t have to be overwhelming. With dedication and consistent effort, you can acquire the skills needed to thrive in this dynamic field! 🚀

If you’re curious about the time commitment, some coding bootcamps offer intensive programs where you can learn the most in-demand web development skills in 12 or 24 weeks1. So go ahead, take that first step toward becoming a versatile full stack developer! 💻
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
      160K
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


export default Fullstack
