import {motion} from "framer-motion"
import Groth from './images/Growth.svg'
import Groth2 from './images/Growth (1).svg'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

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
    return ( 
        <div className="Intro flex justify-center items-center gap-10 md:gap-0 md:justify-between flex-col md:flex-row  container mx-auto px-10">
           <motion.div 
           variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0},
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true}}
          transition={{duration:0.5,delay:0.25}}
           className="flex flex-col justify-center">
           <h1 className="text-4xl ml-5 md:ml-0 sm:text-5xl font-extrabold">Complete your</h1>
            <h1 className="ml-8  md:ml-4 text-4xl sm:text-5xl font-extrabold">Fitness Goals</h1>   
            <motion.div
            className="flex gap-6 mt-4 ml-5">
                <motion.a  
                whileHover={{ scale: 1.2 }}
                href="#diets"><p>Diets</p></motion.a>
                <motion.a 
                 whileHover={{ scale: 1.2 }}
                href="#planprogram"><p>Planprogram</p></motion.a>
                <motion.a
                 whileHover={{ scale: 1.2 }}
                href="#supplements"><p>Supplements</p></motion.a>
            </motion.div>
           </motion.div>
           <div className="gowi">
            <div>
                {
                    darkMode ? 
                    <img width="300px" height="300px" src={Groth} alt="" />:
                    <img width="300px" height="300px" src={Groth2} alt="" />
                }
            </div>
           </div>
        </div>
     );
}
 
export default Intro;
