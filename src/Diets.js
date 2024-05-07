import NoFoodIcon from '@mui/icons-material/NoFood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import {motion,AnimatePresence,useInView,useAnimation} from "framer-motion"
import { useState,useEffect,useRef } from 'react';
import { useDarkMode } from "./DarkModeContext";
import { FiCreditCard, FiMail, FiUser, FiUsers,FiActivity} from "react-icons/fi";
import { MdNoFood } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa6";
import DoneIcon from '@mui/icons-material/Done';
import { FaCrown } from "react-icons/fa6";
import LogInAccessJr from './LogInAccessJr'

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
  const [healthy,setHealthy]=useState(false)
  
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
 
 const [ open,setOpen]=useState(false)

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
                  duration:1,delay:0.3, staggerChildren: 0.3
                }}}
                exit={{opacity:0,display:"none",transition:{
                  duration:0.5
                }}}
                viewport={{once:true}}
                className="healthy flex flex-col md:flex-row justify-center md:justify-between gap-20 items-center">
                    <div class="card2">
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}}
                      class="circle2"><p 
                      style={{color:darkMode ? "#E9F0E5":"#131A0F"}}
                      className="text-center font-semibold mt-1">Basic</p></div>
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}} 
                      class="circle" Icon={MdNoFood}></div>
                         <div class="card-inner">
                        <div className="flex flex-col gap-4 mt-4 items-start">
                          <h3 className='text-center font-normal text-2xl mt-5 ml-4'>Enterprise</h3>
                          <h1 className='text-start font-bold text-3xl ml-4'>$0 /<b className='font-normal text-sm'>month</b></h1>
                          <ul className='ml-4 flex flex-col gap-2'>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Basic in web support</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>2 users in your account</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Limited Diets</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Basic Diets</li>
                            <li className='opacity-0'><DoneIcon sx={{marginRight:'5px'}}/></li>
                          </ul>
                          <div className="w-full flex items-center justify-center">
                          <LogInAccessJr/>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div style={{
                    boxShadow:'box-shadow: 0px 2px 16px 4px rgba(178,201,161,0.75)'
                  }} class="card2">
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}}
                      class="circle2"><FaCrown style={{color:darkMode ?"#050604":"#FAFBF9",marginTop:'-16px',width:'30px',transform:'rotate(-20deg)',scale:'1.2'}} /><p 
                      style={{color:darkMode ? "#E9F0E5":"#131A0F"}}
                      className="text-center font-semibold mt-1">Pro</p></div>
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}} 
                      class="circle"></div>
                      <div class="card-inner">
                        <div className="flex flex-col gap-4 mt-4 items-start">
                          <h3 className='text-center font-normal text-2xl mt-5 ml-4'>Professional</h3>
                          <h1 style={{
                            color:darkMode ? "#475E36":"#B2C9A1"
                          }} className='text-start font-bold text-3xl ml-4'>$49 /<b className='font-normal text-sm'>month</b></h1>
                          <ul className='ml-4 flex flex-col gap-2'>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Email in app support</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>10 users on your account</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Unlimited access</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Choose trainer</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Unlimited Diets</li>
                          </ul>
                          <div className="w-full flex items-center justify-center">
                          <LogInAccessJr/>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="card2">
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}}
                      class="circle2"><p 
                      style={{color:darkMode ? "#E9F0E5":"#131A0F"}}
                      className="text-center font-semibold mt-1">Basic2</p></div>
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}} 
                      class="circle"></div>
                       <div class="card-inner">
                        <div className="flex flex-col gap-4 mt-4 items-start">
                          <h3 className='text-center font-normal text-2xl mt-5 ml-4'>Enterprise</h3>
                          <h1 className='text-start font-bold text-3xl ml-4'>$499 /<b className='font-normal text-sm'>month</b></h1>
                          <ul className='ml-4 flex flex-col gap-2'>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Phone support</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Unlimited account users</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Unlimited access</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Choose 2+ trainer</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>10 free suplements</li>
                          </ul>
                          <div className="w-full flex items-center justify-center">
                          <LogInAccessJr/>
                          </div>
                        </div>
                      </div>
                  </div>
                </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence>
                {mass && 
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1,transition:{
                  duration:1,delay:0.3, staggerChildren: 0.3
                }}}
                exit={{opacity:0,display:"none",transition:{
                  duration:0.5
                }}}
                viewport={{once:true}}
                className="healthy flex flex-col md:flex-row justify-center md:justify-between gap-20 items-center">
                    <div class="card2">
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}}
                      class="circle2"><p 
                      style={{color:darkMode ? "#E9F0E5":"#131A0F"}}
                      className="text-center font-semibold mt-1">Basic</p></div>
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}} 
                      class="circle" Icon={MdNoFood}></div>
                         <div class="card-inner">
                        <div className="flex flex-col gap-4 mt-4 items-start">
                          <h3 className='text-center font-normal text-2xl mt-5 ml-4'>Enterprise</h3>
                          <h1 className='text-start font-bold text-3xl ml-4'>$0 /<b className='font-normal text-sm'>month</b></h1>
                          <ul className='ml-4 flex flex-col gap-2'>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Basic in app support</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>2 users in your account</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Limited Planprograms</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>1 free suplements</li>
                            <li className='opacity-0'><DoneIcon sx={{marginRight:'5px'}}/></li>
                          </ul>
                          <div className="w-full flex items-center justify-center">
                          <button 
                          style={{width:"fit-content"}}
                          className={`btnsign2  text-lg ${darkMode ? 'btnsign2' : 'btnsign3'} px-2 py-2`}>Show More</button>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div style={{
                    boxShadow:'box-shadow: 0px 2px 16px 4px rgba(178,201,161,0.75)'
                  }} class="card2">
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}}
                      class="circle2"><p 
                      style={{color:darkMode ? "#E9F0E5":"#131A0F"}}
                      className="text-center font-semibold mt-1">Pro</p></div>
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}} 
                      class="circle"></div>
                      <div class="card-inner">
                        <div className="flex flex-col gap-4 mt-4 items-start">
                          <h3 className='text-center font-normal text-2xl mt-5 ml-4'>Professional</h3>
                          <h1 style={{
                            color:darkMode ? "#475E36":"#B2C9A1"
                          }} className='text-start font-bold text-3xl ml-4'>$49 /<b className='font-normal text-sm'>month</b></h1>
                          <ul className='ml-4 flex flex-col gap-2'>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Email in app support</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>10 users on your account</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Unlimited access</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Choose Food as per liking</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>2 free suplements</li>
                          </ul>
                          <div className="w-full flex items-center justify-center">
                          <button 
                          style={{width:"fit-content"}}
                          className={`btnsign2  text-lg ${darkMode ? 'btnsign2' : 'btnsign3'} px-2 py-2`}>Show More</button>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div class="card2">
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}}
                      class="circle2"><p 
                      style={{color:darkMode ? "#E9F0E5":"#131A0F"}}
                      className="text-center font-semibold mt-1">Basic2</p></div>
                      <div 
                      style={{background:darkMode ? "#475E36":"#B2C9A1"}} 
                      class="circle"></div>
                       <div class="card-inner">
                        <div className="flex flex-col gap-4 mt-4 items-start">
                          <h3 className='text-center font-normal text-2xl mt-5 ml-4'>Enterprise</h3>
                          <h1 className='text-start font-bold text-3xl ml-4'>$499 /<b className='font-normal text-sm'>month</b></h1>
                          <ul className='ml-4 flex flex-col gap-2'>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Phone support</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Unlimited account users</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Unlimited access</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>Choose 2+ trainer</li>
                            <li><DoneIcon sx={{marginRight:'5px'}}/>10 free suplements</li>
                          </ul>
                          <div className="w-full flex items-center justify-center">
                          <button 
                          style={{width:"fit-content"}}
                          className={`btnsign2  text-lg ${darkMode ? 'btnsign2' : 'btnsign3'} px-2 py-2`}>Show More</button>
                          </div>
                        </div>
                      </div>
                  </div>
                </motion.div>
                }
                </AnimatePresence>
            </div>
        </motion.div>
     );
}
 
export default Diets;