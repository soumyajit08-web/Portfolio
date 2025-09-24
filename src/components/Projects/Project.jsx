import React from 'react'
import Card from '../Card/Card'
import "./Project.css"
import va from "../../assets/va.png"
import Quizapp from "../../assets/Quizapp.png"
import weatherapp from "../../assets/Weatherapp.png"
import clockapp from "../../assets/Clockapp.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Project() {
  useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
   
})
  return (
    <div id="project">
      <h1 id="para">2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card title="VIRTUAL ASSISTANT" image={va} />
        <Card title="QUIZ MASTER APP" image={Quizapp}/>
        <Card title="WEATHER APP" image={weatherapp}/>
        <Card title="INTERACTIVE CLOCK APP" image={clockapp}/>
      </div>
    </div>
  )
}

export default Project
