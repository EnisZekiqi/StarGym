
import Groth from './images/Growth.svg'
import Groth2 from './images/Growth (1).svg'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { useDarkMode } from "./DarkModeContext";
const variant ={
    initial:{
        opacity:0,
        x:-10,
    },
    animate:{
        opacity:1,
        x:0,
        transition: {
            staggerChildren: 0.5
          }
    }
}



const Intro = () => {
    const { darkMode } = useDarkMode();
const { toggleDarkMode } = useDarkMode();
const colorChange = darkMode ? "text-rose":"text-pink"
const targetRef = useRef(null);


    return ( 
        <div className="Intro flex mb-4 justify-center items-center gap-10 md:gap-0 flex-col md:flex-row  container mx-auto px-10">
           <motion.div 
           variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0},
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true}}
          transition={{duration:0.5,delay:0.25}}
           className="flex flex-col justify-center items-center md:items-stretch ">
            <motion.div
              variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1,y:0},
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true}}
              transition={{duration:0.5,delay:0.25}}

            className="absolute blur-sm inset-0 flex items-start mt-28 justify-center pointer-events-none"> {/* Wrapper for decorative text */}
                    <h1 className={` text-6xl mt-16 md:mt-0 md:text-9xl ${colorChange} font-extrabold opacity-15 `}>StarGym</h1> {/* Decorative text */}
                </motion.div>
           <h1 className="text-4xl  md:ml-0 sm:text-5xl font-extrabold">Complete your</h1>
            <h1 className=" text-center  md:ml-4 text-4xl sm:text-5xl font-extrabold">Fitness Goals</h1>   
            <motion.div
            style={{backgroundColor:darkMode ? "#475E36":"#B2C9A1", color:darkMode ? "#E9F0E5":"#131A0F"}}
            className="flex divide-x-2 divide-white-400 rounded-xl px-4 py-4 items-center justify-center gap-6 mt-4 ">
                <motion.a 
               
                whileHover={{ scale: 1.2 }}
                href="#diets"><p className="text-center">Diets</p></motion.a>
                <motion.a 
                 
                 whileHover={{ scale: 1.2 }}
                href="#planprogram"><p className="text-center ml-3">Planprogram</p></motion.a>
                <motion.a
                 
                 whileHover={{ scale: 1.2 }}
                href="#supplements"><p className="text-center ml-2">Supplements</p></motion.a>
            </motion.div>
           </motion.div>
         {/* Decorative text 
         <div className="gowi">
            <div>
                {
                    darkMode ? 
                    <img width="300px" height="300px" src={Groth} alt="" />:
                    <img width="300px" height="300px" src={Groth2} alt="" />
                }
            </div>
           </div>
         */}  
         <div className="empty"></div>
        </div>
     );
}
 
export default Intro;
