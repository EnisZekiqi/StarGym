import React from "react";
import { motion } from "framer-motion";
import blacknoise from './images/black-noise.png'
import { useDarkMode } from "./DarkModeContext";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useState } from "react";

const FuzzyOverlayExample = () => {
    const { darkMode } = useDarkMode();
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
    const { darkMode } = useDarkMode();
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
        backgroundImage: 'url("https://www.hover.dev/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[7.5%]"
    />
  );
};

const ExampleContent = () => {
    const { darkMode } = useDarkMode();

  return (
    <div className="relative grid h-screen place-content-center space-y-6 opacity-70  bg-neutral-950 p-8">
      <p className="text-center text-6xl font-black text-neutral-50">
        Your Fitness Yourney
      </p>
      <p className="text-center text-neutral-400">
       Complete your fitness goals
      </p>
      <div className="flex items-center justify-center gap-3">
        <BasicBreadcrumbs/>
      </div>
    </div>
  );
};

const BasicBreadcrumbs =()=> {
    const { darkMode } = useDarkMode();
    const [open,setOpen]=useState(false)
    return (
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
         <div   onMouseEnter={()=>setOpen(true)}  onMouseLeave={()=>setOpen(false)}>
         <Link className="dit"  sx={{textDecoration:"none",color:darkMode ? "#050604":"#FAFBF9"}}  href="#diets">
            Diets
          </Link>
          <span 
                style={{
                  transform: open ? "scaleX(1)": "scaleX(0)"
                }}
                className='vija2 absolute -bottom-2 left-2 right-2 origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
         </div>
          <Link
          
            sx={{textDecoration:"none",
                color:darkMode ? "#050604":"#FAFBF9"
        }}
            
            href="#planprogram"
          >
           Planprogram
          </Link>
          <Link sx={{textDecoration:"none",
                color:darkMode ? "#050604":"#FAFBF9"
            
        }}
        href="#supplements"
        >Suplements</Link>
        </Breadcrumbs>
      </div>
    );
  }

export default FuzzyOverlayExample;