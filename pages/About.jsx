import React from 'react'
// import { useNavigate } from 'react-router-dom'

const About = () => {
  // const navigate = useNavigate();
  return (
    <div className='container p-2 md:px-12 lg:px-40 lg:text-xl h-[100vh]'>
      <h2 className='text-center p-4'>About Me</h2>
      <div className='bg-gray-100 rounded-lg p-2'>
       <div className='syntax p-4 text-left'>
        I am a front-end developer I use HTML,
             CSS, JavaScript and the most famouse library 
             react and also the handsome framework of css 
             Tailwind to build the client side of a website.
             They are responsible for building the visual
             elements on a page, such as the layout, buttons,
             menus, forms, and other features that users
             will see and interact with when they visit
             a webpage. In contrast with back-end
             developers, who handle the business
             logic and data management requirements
             that power websites from behind the
             scenes, I have a firm grasp of web design
             fundamentals and the overall user experience
             of a website.
        </div>
        <div className='p-4'>
          <b>Contact</b> <br />
          <b>Whatsapp: +93793350791</b> <br />
          <i>Email:<br /> abdurashid.bigzad1999@gmil.com</i> 
        </div>
      </div>
      <div className='text-center pt-12 flex flex-col justify-center'>
          <a className='text-yellow-800 hover:text-yellow-500'
           href='https://rashidbik-a8ep.vercel.app/'>https://rashidbik-a8ep.vercel.app</a> <br />
          <div>
           <button className='btn bg-yellow-600 w-[200px] hover:shadow-yellow-200 '
           onClick={()=> navigate('/')}>back</button>
          </div>
      </div>
    </div>
  )
}

export default About
