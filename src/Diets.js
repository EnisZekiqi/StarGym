import NoFoodIcon from '@mui/icons-material/NoFood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import {motion,AnimatePresence,useInView,useAnimation} from "framer-motion"
import { useState,useEffect,useRef } from 'react';
import { useDarkMode } from "./DarkModeContext";
import { FiCreditCard, FiMail, FiUser, FiUsers,FiActivity} from "react-icons/fi";
import { MdNoFood } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa6";

const Diets = () => {

  const containerVariants = {
    initial: {opacity: 0, x: -10},
    animate: { opacity: 1, x: 0,
      transition: {
        staggerChildren: 0.2 // Adjust the delay between each child animation
      }
    }
  };
  const childVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 }
  };

    const [healthy,setHealthy]=useState(false)
    const [mass,setMass]=useState(false)
    const [fat,setFat]=useState(false)
    
    const toggleHealthy =()=>{  ///toggle for healthy 
        setHealthy(prevMode =>!prevMode)
        setMass(false)
        setFat(false)
    };
////////////

        const toggleMass =()=>{   /// toggle fros mass 
            setHealthy(false)
            setMass(prevMode =>!prevMode)
            setFat(false)
        }
//////////////


        const toggleFat = ()=>{     /// toggle fro fat
            setHealthy(false)
            setMass(false)
            setFat(prevMode =>!prevMode)
        }
 /////////////////
 const { darkMode } = useDarkMode();
 const { toggleDarkMode } = useDarkMode();

 const ref =useRef(null)

 
 const HoverDevCards = () => {

  const { darkMode } = useDarkMode();
   return (
     <div className="py-4">
       <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
         <Card
           title="Healthy Diet"
           subtitle="Check offers"
           Icon={MdNoFood}
           onClick={toggleHealthy}
         />
         <Card onClick={toggleMass} title="Mass Diet" subtitle="Check offers" href="#" Icon={FaPizzaSlice} />
         
       </div>
     </div>
   );
 };
 
 const Card = ({ title, subtitle, Icon, href,onClick }) => {
  const { darkMode } = useDarkMode();
  const gradientClass = darkMode ? "bg-gradient-to-r from-emerald to-emerald" : "bg-gradient-to-r from-cyan to-cyan";
  const gradientColor = darkMode ? "text-emerald group-hover:text-pink" :"text-cyan group-hover:text-rose"
   return (
     <a
     onClick={onClick}
       style={{backgroundColor:darkMode? "#FAFBF9":"#050604"}}
       className="w-full -mt-4 mb-8 p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group"
     >
       <div
       style={{backgroundColor:darkMode ?"#050604":"#FAFBF9"}}
       className={`absolute inset-0 ${gradientClass} translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300`}/>

       <Icon
       style={{color:darkMode? "rgba(233, 240, 229,0.25)":"rgba(5, 6, 4,0.25)"}}
       className="absolute z-10 -top-12 -right-12 text-9xl  group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
       <Icon
       className={`-mt-4 mb-6 text-2xl ${gradientColor} translate-y-[100%] transition-colors relative z-10 duration-300`}/>
       <h3 className={`font-semibold  ${gradientColor} text-md md:text-lg text-neutral-600 group-hover:text-white relative z-10 duration-300`}>
         {title}
       </h3>
       <p className={`text-neutral-600 ${gradientColor} font-semibold text-sm md:text-md group-hover:text-violet-200 relative z-10 duration-300`}>
         {subtitle}
       </p>
     </a>
   );
 };
 

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
        id="diets" className="diets flex flex-col  container mx-auto px-12">
           <motion.div 
           
           className="flex  flex-col items-center md:items-stretch gap-4">
           <div
           style={{
            backgroundColor:darkMode ? "#475E36" :"#B2C9A1"
           }}
           className="mola flex justify-center items-start"> 
            <svg
            style={{fill : darkMode ? "#FAFBF9":"#050604"}}
            viewBox="0 0 24 24"
            className="mt-3"
            fill="#FAFBF9"
            height="35px"
            width="35px"
            >
            <path d="M20 10c2 3-3 12-5 12s-2-1-3-1-1 1-3 1-7-9-5-12 5-3 7-2V5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5V3h2v5c2-1 5-1 7 2z" />
            </svg>
            </div>
            <h3 style={{color:darkMode ? "#131A0F":"#E9F0E5"}} className="font-extrabold text-xl">Diets</h3>
            <div className="text-diet w-full md:w-1/2">
            <p style={{color:darkMode ? "#525252":"#525252"}} className="font-normal mb-2 text-lg text-center md:text-left"> Diets are important for your health and also for your fitness achivements , our diets are classified into some categories so you can achive the best result possible</p>
            </div>
           <motion.div
             
           className="flex gap-0 md:gap-8 mt-8 md:mt-4">
           <HoverDevCards/>
           </motion.div>
           </motion.div>
            <div className="obeja mt-12 md:mt-0">
                <AnimatePresence>
                {healthy && 
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1,transition:{
                  duration:1,delay:0.3
                }}}
                exit={{opacity:0,display:"none",transition:{
                  duration:0.5
                }}}
                viewport={{once:true}}
                className="healthy">
                    <h3 className='font-semibold text-xl text-center'>Healthy Diet</h3>
                    <h5 className='text-start font-semibold mt-8 ml-2 text-lg'>Tips</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - Do not get thirsty</li>
                        <li> - Do not skip breakfast</li>
                        <li> - Get active</li>
                        <li> - Eat less salt: no more than 6g a day for adults</li>
                      </ul>
                    </div>
                    <h5 className='text-start font-semibold mt-4 ml-2 text-lg'>Foods</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - Fish and portion of oily fish</li>
                        <li> - Lots of fruit and vegetables</li>
                        <li> - Protein Foods</li>
                        <li> - Low carb foods</li>
                      </ul>
                    </div>
                </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence>
                {mass && 
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                exit={{opacity:0,display:"none"}}
                viewport={{once:true}}
                className="healthy">
                    <h3 className='font-semibold text-xl text-center'>Mass Diet</h3>
                    <h5 className='text-start font-semibold mt-8 ml-2 text-lg'>Tips</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - Cheat meals</li>
                        <li> - Eat more than the avg wheight calories</li>
                        <li> - Heavy Workout</li>
                        <li> - Dairy products</li>
                      </ul>
                    </div>
                    <h5 className='text-start font-semibold mt-4 ml-2 text-lg'>Foods</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - Eggs</li>
                        <li> - Whole grains</li>
                        <li> - Protein Foods</li>
                        <li> - High carb foods</li>
                      </ul>
                    </div>
                </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence>
                {fat && 
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                exit={{opacity:0,display:"none"}}
                viewport={{once:true}}
                className="healthy">
                    <h3 className='font-semibold text-xl text-center'>Lose Fat Diet</h3>
                    <h5 className='text-start font-semibold mt-8 ml-2 text-lg'>Tips</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - Less high carb foods</li>
                        <li> - 2 to 3 times breakfast</li>
                        <li> - Choose high caloric workouts</li>
                        <li> - More frequent workouts</li>
                      </ul>
                    </div>
                    <h5 className='text-start font-semibold mt-4 ml-2 text-lg'>Foods</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - Salad</li>
                        <li> - Beef meat</li>
                        <li> - Patatoes</li>
                        <li> - Rice</li>
                      </ul>
                    </div>
                </motion.div>
                }
                </AnimatePresence>
            </div>
        </motion.div>
     );
}
 
export default Diets;