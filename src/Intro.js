
import Groth from './images/Growth.svg'
import Groth2 from './images/Growth (1).svg'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import whey from './images/whey-removebg-preview.png'
import star from './images/star-svgrepo-com.svg'
import star2 from './images/star-svgrepo-com (1).svg'

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
        <div className="Intro w-full flex mb-4 justify-center md:justify-center items-center gap-10 md:gap-14 flex-col-reverse md:flex-row  container mx-auto px-10">
           <motion.div 
           variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0},
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true}}
          transition={{duration:0.5,delay:0.25}}
           className="flex flex-col justify-center items-center md:items-stretch  ">
            <motion.div
              variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1,y:0},
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true}}
              transition={{duration:0.5,delay:0.25}}

            className="absolute blur-sm inset-0  md:flex hidden items-start mt-52 justify-center pointer-events-none"> {/* Wrapper for decorative text */}
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
          
         <FuzzyOverlayExample/>
  

        </div>
     );
}
 
function Logo() {
    const { darkMode } = useDarkMode();

    const mull  = darkMode ? "framer-5mk8w01":"framer-5mk8w0"
    const mull1 =darkMode ? "framer-1qys7kvv":"framer-1qys7kv"

    return (
        <div className="logo-container flex justify-center items-center relative z-10">
        <div className="framer-49gp17" data-framer-name="Badge" name="Badge">
        <div className={` ${mull}`} data-border="true" data-framer-name="Outer" name="Outer"></div>
        <div className={` ${mull1}`}data-border="true" data-framer-name="Inner" name="Inner"></div>
        <div className="framer-n2f9q3-container" data-framer-name="Arc 1" name="Arc 1">
          <div draggable="false" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <svg className="transform-origin-center-center" viewBox="0 0 100 100" overflow="visible" style={{ width: '144px', marginLeft: '8px', marginTop: '5px', height: '100%', position: 'absolute', inset: '0px', transformOrigin: 'center center', willChange: 'transform' }}>
              <path id="curve-ey5bo0" d="M 0 50 L 0 30 A 1 1 0 0 1 100 30 L 100 50 L 100 70 A 1 1 0 0 1 0 70 L 0 30" strokeWidth="none" fill="transparent"></path>
              <text>
                <textPath href="#curve-ey5bo0" startOffset="0" dominantBaseline="hanging" style={{ width: '144px', fontSize: '10px', fontStyle: 'normal', fontWeight: '500', letterSpacing: '0.27em', lineHeight: '1em', fill: darkMode ? "#050604":"#FAFBF9" }}>
                  ✦Welcome to StarGym ✦
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <div className="framer-113te4o-container" data-framer-name="Arc 2" name="Arc 2">
          <div draggable="false" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <svg className="transform-origin-center-center" viewBox="0 0 100 100" overflow="visible" style={{ width: '100%', height: '100%', position: 'absolute', inset: '0px', transformOrigin: 'center center', willChange: 'transform' }}>
              <path id="curve-40ufq5" d="M 0 50 L 0 70 A 1 1 0 1 0 100 70 L 100 30 A 1 1 0 1 0 0 30 L 0 50" strokeWidth="none" fill="transparent"></path>
              <text>
                <textPath href="#curve-40ufq5" startOffset="14.5" dominantBaseline="text-top" style={{ fontSize: '10px', fontStyle: 'normal', fontWeight: '500', letterSpacing: '0.27em', lineHeight: '1em', fill: darkMode ? "#050604":"#FAFBF9" }}>
                  Achive your dream body
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <div data-framer-component-type="SVG" data-framer-name="Logo" name="Logo" className="framer-1rbdseg" style={{ imageRendering: 'pixelated', flexShrink: 0, backgroundSize: '100% 100%', backgroundImage: 'url("images/star-svgrepo-com.svg")' }}>
           {darkMode ? 
             <img src={star2} alt="" />:
             <img src={star} alt="" />   
        }
        </div>
      </div>
      <div className="background-div flex top-18 left-40 right-0 rotate-180 w-1/2 h-1/2" style={{ backgroundColor: darkMode ? "#475E36" : "#B2C9A1" }}></div>
        </div>
    );
  }
  
  const FuzzyOverlayExample = () => {
    return (
      // NOTE: An overflow of hidden will be required on a wrapping
      // element to see expected results
      <div className="relative overflow-hidden">
        <ExampleContent />
        <FuzzyOverlay />
      </div>
    );
  };
  
  const FuzzyOverlay = () => {
    return (
      <motion.div
        initial={{ transform: "translateX(-10%) translateY(-10%)" }}
        animate={{
          transform: "translateX(10%) translateY(10%)",
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: "linear",
          repeatType: "mirror",
        }}
        // You can download these PNGs here:
        // https://www.hover.dev/black-noise.png
        // https://www.hover.dev/noise.png
        style={{
          backgroundImage: 'url("/black-noise.png")',
          // backgroundImage: 'url("/noise.png")',
        }}
        className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
      />
    );
  };
  
  const ExampleContent = () => {
    return (
      <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
        <p className="text-center text-6xl font-black text-neutral-50">
          Fuzzy Overlay Example
        </p>
        <p className="text-center text-neutral-400">
          This is a basic example of using a lo-fi fuzzy overlay 📺
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
            Pricing
          </button>
          <button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
            Try it free
          </button>
        </div>
      </div>
    );
  };
export default Intro;
