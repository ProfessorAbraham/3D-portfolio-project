import React from 'react';
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles";
import {services} from "../constants";
import { fadeIn  , textVariant} from "../utils/motion" ;
import { SectionWrapper } from "../hoc";

function ServiceCard(props){
  return(
    <Tilt className = "xs:w-[250px] w-full">
    <motion.div 
      variants = {fadeIn("right","spring",0.5*[props.index],0.75)}
      className = "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div options = {{
        max:45,
        scale:1,
        speed:450
      }}
      className = "bg-tertiary rounded-[15px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src = {props.icon} alt ={props.title} 
        className="w-16 h-16 object-contain" />
        <h3 className = "text-white text-[20px] font-bold text-center">{props.title}</h3>
      </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
  <>
   <motion.div variants = {textVariant()}>
    <p className = {styles.sectionSubText} >
      Introduction
    </p>
    <h2 className = {styles.sectionHeadText}>
    Overview.
    </h2>
   </motion.div>
   <motion.p 
   variants = {fadeIn("","",0.1,1)}
   className = "mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
   >
    Hey there! I'm harsh a 3rd year EC student from RV college of engineering , Bangalore. Apart from EC,  I'm very much interested in full-stack Web Development , I'm skilled in frontend frameworks like HTML , css , Javascript and React and backend technologies like Node js , express js , SQL  and mongoDB. I'm a quick learner and can collaborate closely with people to create efficient, scalable and user-friendly solutions that solve real-world problems.
Let's work together to bring your ideas to life!
   </motion.p>
   <div className = " mt-20 mb-20 flex flex-wrap  gap-10" >
    {services.map((service , index) =>{
      return(
      <ServiceCard title = {service.title} key = {index} index = {index} {...service} />
    );})}
   </div>
  </>
  );
}

export default SectionWrapper(About,"about");
