import NoFoodIcon from '@mui/icons-material/NoFood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import {motion,AnimatePresence,useScroll,useTransform,useSpring,useParallax} from "framer-motion"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState,useRef } from 'react';
import prework from './images/prework-removebg-preview.png'
import Example from './Example';
import { useDarkMode } from "./DarkModeContext";


const Suplements = () => {

    const { scrollY } = useScroll();
  const springConfig = { stiffness: 300, damping: 30 };

  const targetRef=useRef(null)

 
  const { darkMode } = useDarkMode();

    return ( 
        <motion.div
        variants={{
          hidden:{opacity:0,y:75},
          visible:{opacity:1,y:0},
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true}}
        transition={{duration:0.5,delay:0.25}}
        id='supplements' className="Suplements flex flex-col  container mx-auto px-12">
          <div className="flex  flex-col items-center md:items-stretch gap-4">
           <div
           style={{
            backgroundColor:darkMode ? "#475E36" :"#B2C9A1"
           }}
           className="mola flex justify-center items-start"> 
           <svg
            style={{fill : darkMode ? "#FAFBF9":"#050604"}}
            viewBox="0 0 512 512"
            className='mt-3'
            fill="#FAFBF9"
            height="35px"
            width="35px"
            >
            <path d="M480 448h-12a4 4 0 01-4-4V273.51a4 4 0 00-5.24-3.86 104.92 104.92 0 01-28.32 4.78c-1.18 0-2.3.05-3.4.05a108.22 108.22 0 01-52.85-13.64 8.23 8.23 0 00-8 0 108.18 108.18 0 01-52.84 13.64 106.11 106.11 0 01-52.46-13.79 8.21 8.21 0 00-8.09 0 108.14 108.14 0 01-53.16 13.8 106.19 106.19 0 01-52.77-14 8.25 8.25 0 00-8.16 0 106.19 106.19 0 01-52.77 14c-1.09 0-2.19 0-3.37-.05h-.06a104.91 104.91 0 01-29.28-5.09 4 4 0 00-5.23 3.8V444a4 4 0 01-4 4H32.5c-8.64 0-16.1 6.64-16.48 15.28A16 16 0 0032 480h447.5c8.64 0 16.1-6.64 16.48-15.28A16 16 0 00480 448zm-256-68a4 4 0 01-4 4h-88a4 4 0 01-4-4v-64a12 12 0 0112-12h72a12 12 0 0112 12zm156 68h-72a4 4 0 01-4-4V316a12 12 0 0112-12h56a12 12 0 0112 12v128a4 4 0 01-4 4zM492.57 170.28l-42.92-98.49C438.41 47.62 412.74 32 384.25 32H127.7c-28.49 0-54.16 15.62-65.4 39.79l-42.92 98.49c-9 19.41 2.89 39.34 2.9 39.35l.28.45c.49.78 1.36 2 1.89 2.78.05.06.09.13.14.2l5 6.05a7.45 7.45 0 00.6.65l5 4.83.42.36a69.65 69.65 0 009.39 6.78v.05a74 74 0 0036 10.67h2.47a76.08 76.08 0 0051.89-20.31l.33-.31a7.94 7.94 0 0110.89 0l.33.31a77.3 77.3 0 00104.46 0 8 8 0 0110.87 0 77.31 77.31 0 00104.21.23 7.88 7.88 0 0110.71 0 76.81 76.81 0 0052.31 20.08h2.49a71.35 71.35 0 0035-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 00488 212.17l1.74-2.63q.26-.4.48-.84c1.66-3.38 10.56-20.76 2.35-38.42z" />
            </svg>
            </div>
            <h3 style={{color:darkMode ? "#131A0F":"#E9F0E5"}} className="font-extrabold text-xl">Supplements</h3>
            <div className="text-diet w-full md:w-1/2">
            <p style={{color:darkMode ? "#131A0F":"#525252"}} className="font-normal text-lg mb-2 text-center md:text-left"> Supplements are some needed for faster achivements and faster results in your progress , those are categorised like for performance for weight loss and for mass gain</p>
            </div>
           </div>
           <div className="llojet items-center justify-center mt-8 md:mt-0">
           </div>
        </motion.div>
     );

}
 
export default Suplements;