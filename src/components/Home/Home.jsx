import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import {Typewriter} from "react-simple-typewriter"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
function Home() {
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
      </div>
      </div>  
    <div className="righthome">
      <img src={man} alt="" />
    </div>
    </div>
  )
}

export default Home
