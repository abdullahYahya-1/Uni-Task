import React from 'react'
import imgL from './imgL.gif'
import '../App.css';

function Body() {
  return (
    <div>

    <div style={{backgroundImage: `url(${imgL})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className={"container-fluid b-con"} >

         <div className='text'>
            <p className='text-center'>Welcome to my portfolio website! I'm a web developer with a passion for building beautiful and functional websites. Whether you're looking for a simple blog, an e-commerce store, or a complex web application, I have the skills and experience to bring your vision to life. On this site, you'll find examples of my work, as well as information about my education, skills, and professional experience. Please take a look around and feel free to get in touch if you have any questions or if you're interested in working together!
                </p>
                </div>
         
    </div> 


    </div>
  )
}

export default Body

