import NoFoodIcon from '@mui/icons-material/NoFood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import {motion,AnimatePresence} from "framer-motion"
import { useState } from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import RunCircleIcon from '@mui/icons-material/RunCircle';
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


    return ( 
        <div id="planprogram" className="planprogram  flex flex-col  md:flex-row container mx-auto px-12">
                 <div className="flex  flex-col items-center md:items-stretch gap-4">
           <div className="mola flex justify-center items-start"> 
                    <svg
                viewBox="0 0 24 24"
                className="mt-3"
                fill="#FAFBF9"
                height="35px"
                width="35px"
                >
                <path d="M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2m10-4v5h-2V4H4v2H2V1h2v2h16V1h2m-7 10.26V23h-2v-5h-2v5H9V11.26C6.93 10.17 5.5 8 5.5 5.5V5h2v.5C7.5 8 9.5 10 12 10s4.5-2 4.5-4.5V5h2v.5c0 2.5-1.43 4.67-3.5 5.76z" />
                </svg>
            </div>
            <h3 style={{color:"#111211"}} className="font-extrabold text-xl">Planprogram</h3>
            <div className="text-diet w-full md:w-1/2">
            <p style={{color:"#111211"}} className="font-normal mb-2 text-center md:text-left"> With Planprogram you can achive results as increasing muscle mass , asthetic shape of the body and much more </p>
            </div>
           <motion.div
            initial={{ x: -50 ,opacity:0}}
            whileInView={{ x: 0,opacity:1 }}
            transition={{
               staggerChildren:1,
               duration:0.5
             }}
             viewport={{amount:"all",once:true}}
           className="flex gap-0 md:gap-8  mt-8 md:mt-4">
           <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{
                scale: 0.8,
              }}
              variants={childVariants}
            wwhileInView="animate"
             onClick={toggleBb}
           className="flex cursor-pointer flex-col rounded-md items-center gap-4 justify-center h-20 w-28">
           <FitnessCenterIcon sx={{transform:"scale(1.3)" ,color:"#475E36"
          , color:bb ? "#57946F":"#475E36"}} />
           <p className='font-semibold'>BodyBuilding</p>
           </motion.div>
           <motion.div
           onClick={toggleWeight}
             whileHover={{ scale: 1.1 }}
             whileTap={{
                scale: 0.8,
              }}
              variants={childVariants}
              wwhileInView="animate"
           className="flex cursor-pointer flex-col items-center rounded-md gap-4 justify-center h-20 w-28">
           <RunCircleIcon sx={{transform:"scale(1.3)" ,color:"#475E36"  , color:weight ? "#57946F":"#475E36"}} />
           <p className='font-semibold'>Weight Loss</p>
           </motion.div>
           <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{
                scale: 0.8,
              }}
             onClick={toggleSport}
             variants={childVariants}
            wwhileInView="animate"
           className="flex cursor-pointer flex-col items-center rounded-md gap-4 justify-center  h-20 w-28">
           <PoolIcon sx={{transform:"scale(1.3)" ,color:"#475E36"  , color:sport ? "#57946F":"#475E36"}} />
           <p className='font-semibold'>Sports</p>
           </motion.div>
           </motion.div>
           </div>
            <div className="obeja mt-12 md:mt-0">
                <AnimatePresence>
                {bb && 
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                exit={{opacity:0,display:"none"}}
                viewport={{once:true}}
                className="healthy">
                    <h3 className='font-semibold text-xl text-center'>BodyBuilding</h3>
                    <h5 className='text-start font-semibold mt-8 ml-2 text-lg'>Do</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - For beginner 3 to 4 days workouts</li>
                        <li> - Start with duable weights</li>
                        <li> - Go with 12 reps and down to 10</li>
                        <li> - Rest 40 seconds </li>
                      </ul>
                    </div>
                    <h5 className='text-start font-semibold mt-4 ml-2 text-lg'>Do Not </h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - Push yourself in the beggining</li>
                        <li> - Rest appropriate time </li>
                        <li> - Eat meals in time </li>
                        <li> - Do not train in empty stomach</li>
                      </ul>
                    </div>
                </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence>
                {weight && 
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                exit={{opacity:0,display:"none"}}
                viewport={{once:true}}
                className="healthy">
                    <h3 className='font-semibold text-xl text-center'>Weight Loss</h3>
                    <h5 className='text-start font-semibold mt-8 ml-2 text-lg'>Do</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - 5 times workout in a week</li>
                        <li> - Focus more on cardio</li>
                        <li> - Workout with high reps</li>
                        <li> - Rest 30 seconds</li>
                      </ul>
                    </div>
                    <h5 className='text-start font-semibold mt-4 ml-2 text-lg'>Do not</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - Avoid less time on workouts</li>
                        <li> - Use appropriate meals</li>
                        <li> - Not pushing yourself</li>
                      </ul>
                    </div>
                </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence>
                {sport && 
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                exit={{opacity:0,display:"none"}}
                viewport={{once:true}}
                className="healthy">
                    <h3 className='font-semibold text-xl text-center'>Sports</h3>
                    <h5 className='text-start font-semibold mt-8 ml-2 text-lg'>Do</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - Choose a favourite sport</li>
                        <li> - Choose foods that are required</li>
                        <li> - For weight loss use heavy sports</li>
                        <li> - For mass gainer use actractive sports</li>
                      </ul>
                    </div>
                    <h5 className='text-start font-semibold mt-4 ml-2 text-lg'>Do not</h5>
                    <div className="flex flex-col">
                      <ul className='ml-4 mt-1'>
                        <li> - Choose a sport you don't like</li>
                        <li> - Eat in time and appropiate meals</li>
                        <li> - Choose safe sports</li>
                      </ul>
                    </div>
                </motion.div>
                }
                </AnimatePresence>
            </div>
        </div>
     );
}
 
export default Planprogram;