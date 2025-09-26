import React from 'react'
import "./Home.css"
import man from "../../assets/don.png"
import {Typewriter} from "react-simple-typewriter"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
function Home() {
  const socialLinks = {
    github: "https://github.com/soumyajit08-web",
    linkedin: "https://www.linkedin.com/in/soumyajit088",
    instagram: "https://www.instagram.com/mafia_don_08?igsh=MW9tbWVscWxpZnN4Ng==",
    whatsapp:" https://wa.me/qr/DZPSPTTW3T7ZG1 ",
  };
  useGSAP(()=>{
  let tl1=gsap.timeline();
  tl1.from(".line1",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:80,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:80,
    duration:1,
    opacity:0
  })
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
})
const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/soumyajit-cv.pdf"; // Update filename if needed
    link.download = "Soumyajit_Das_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="home">
    <div className="lefthome">
      <div className="homedetails">
        <div className="line1">I'M</div>
        <div className="line2">SOUMYAJIT DAS</div>
        <div className="line3">
          <Typewriter
              words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "EDITOR"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />

        </div>
        <button onClick={handleDownload}>HIRE ME</button>
        <div className="social-icons">
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <FaLinkedin />
            </a>
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon github"
            >
              <FaGithub />
            </a>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href={socialLinks.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon whatsapp"
            >
              <FaWhatsapp />
            </a>
            
          </div>
      </div>
      </div>  
    <div className="righthome">
      <img src={man} alt="" />
    </div>
    </div>
  )
}

export default Home
