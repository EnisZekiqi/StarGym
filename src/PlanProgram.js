import NoFoodIcon from '@mui/icons-material/NoFood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import {motion,AnimatePresence} from "framer-motion"
import { useState } from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { useDarkMode } from "./DarkModeContext";
import personal from './images/home-personal-training@2x.jpg'
import cardio from './images/home-cardio@2x.jpg'
const Planprogram = () => {


  const containerVariants = {
    initial: {opacity: 0, x: -20},
    animate: { opacity: 1, x: 0,
      transition: {
        staggerChildren: 0.2 // Adjust the delay between each child animation
      }
    }
  };
  const childVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  };

    const [bb,setBb]=useState(true)
    const [weight,setWeight]=useState(false)
    const [sport,setSport]=useState(false)
    
    const toggleBb =()=>{  ///toggle for healthy 
        setBb(prevMode =>!prevMode)
        setWeight(false)
        setSport(false)
    };
////////////

        const toggleWeight =()=>{   /// toggle fros mass 
            setBb(false)
            setWeight(prevMode =>!prevMode)
            setSport(false)
        }
//////////////


        const toggleSport = ()=>{     /// toggle fro fat
            setBb(false)
            setWeight(false)
            setSport(prevMode =>!prevMode)
        }
 /////////////////

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
        id="planprogram" className="planprogram  flex flex-col  md:flex-row container mx-auto px-12">
                 <div className="flex  flex-col items-center md:items-stretch gap-4">
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
                <path d="M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2m10-4v5h-2V4H4v2H2V1h2v2h16V1h2m-7 10.26V23h-2v-5h-2v5H9V11.26C6.93 10.17 5.5 8 5.5 5.5V5h2v.5C7.5 8 9.5 10 12 10s4.5-2 4.5-4.5V5h2v.5c0 2.5-1.43 4.67-3.5 5.76z" />
                </svg>
            </div>
            <h3 style={{color:darkMode ? "#131A0F":"#E9F0E5"}} className="font-extrabold text-xl">Planprogram</h3>
            <div className="text-diet w-full md:w-1/2">
            <p style={{color:darkMode ? "#525252":"#525252"}} className="font-normal text-lg mb-2 text-center w-full md:w-2/3 md:text-left"> With Planprogram you can achive results as increasing muscle mass , asthetic shape of the body and much more </p>
            </div>
              <div className="turbna flex flex-col mt-8 justify-center items-center gap-20 ">
                <div className="personal flex flex-col-reverse  md:flex-row-reverse gap-8 items-center">
                <div className="flex flex-col items-end">
                      <h1 className='font-semibold text-xl md:text-2xl text-center w-full md:w-1/2'>
                        PERSONAL TRAINING
                      </h1>
                      <p  className='font-light text-xl md:text-lg text-center w-full md:w-1/2 mt-4'>
                      Reach your fitness goals faster by working with one of our expert personal trainers. Your trainer will monitor your progress by accessing your profile through Kinective Live to create a customized, highly effective training experience
                      </p>
                  </div>
                  <img className='cover rounded-md -mr-0 md:-mr-60' width="400px" height="400px" src={personal} alt="" />
                </div>  
                <div className="personal flex flex-col-reverse md:flex-row gap-8 items-center">
                <div className="flex flex-col items-start ">
                      <h1 className='font-semibold text-xl md:text-2xl text-center w-full md:w-1/2'>
                      CARDIO & WEIGHT TRAINING
                      </h1>
                      <p  className='font-light text-xl md:text-lg text-center w-full md:w-1/2 mt-4'>
                      Sync your heart rate monitor to Kinective Live and do your own thing in areas designated for free weights and app-connected Technogym selectorized and cardio machines
                      </p>
                  </div>
                  <img className='cover rounded-md -ml-0 md:-ml-60 ' width="400px" height="400px" src={cardio} alt="" />
                </div>  
              </div>
           </div>
            
        </motion.div>
     );
}
 
export default Planprogram;