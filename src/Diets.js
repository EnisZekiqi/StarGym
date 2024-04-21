import NoFoodIcon from '@mui/icons-material/NoFood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import {motion,AnimatePresence} from "framer-motion"
import { useState } from 'react';

const Diets = () => {

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

    const [healthy,setHealthy]=useState(true)
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

    return ( 
        <div id="diets" className="diets flex flex-col  md:flex-row container mx-auto px-12">
           <div className="flex  flex-col items-center md:items-stretch gap-4">
           <div className="mola flex justify-center items-start"> 
            <svg
            viewBox="0 0 24 24"
            className="mt-3"
            fill="#FAFBF9"
            height="35px"
            width="35px"
            >
            <path d="M20 10c2 3-3 12-5 12s-2-1-3-1-1 1-3 1-7-9-5-12 5-3 7-2V5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5V3h2v5c2-1 5-1 7 2z" />
            </svg>
            </div>
            <h3 style={{color:"#111211"}} className="font-extrabold text-xl">Diets</h3>
            <div className="text-diet w-full md:w-1/2">
            <p style={{color:"#111211"}} className="font-normal mb-2 text-center md:text-left"> Diets are important for your health and also for your fitness achivements , our diets are classified into some categories so you can achive the best result possible</p>
            </div>
           <motion.div
             initial={{ x: -50 ,opacity:0}}
             whileInView={{ x: 0,opacity:1 }}
             transition={{
                staggerChildren:1,
                duration:0.5
              }}
              viewport={{amount:"all",once:true}}
           className="flex gap-8  mt-8 md:mt-4">
           <motion.div
            variants={childVariants}
            wwhileInView="animate"
             whileHover={{ scale: 1.1 }}
             whileTap={{
                scale: 0.8,
              }}
              viewport={{amount:"all",once:true}}
             onClick={toggleHealthy}
           className="flex cursor-pointer flex-col rounded-md items-center gap-4 justify-center h-20 w-28">
           <NoFoodIcon sx={{transform:"scale(1.3)" ,color:"#475E36"
          , color:healthy ? "#57946F":"#475E36"}} />
           <p className='font-semibold'>Healthy Diet</p>
           </motion.div>
           <motion.div
            variants={childVariants}
            whileInView="animate"
           onClick={toggleMass}
             whileHover={{ scale: 1.1 }}
             whileTap={{
                scale: 0.8,
              }}
              viewport={{amount:"all",once:true}}
           className="flex cursor-pointer flex-col items-center rounded-md gap-4 justify-center h-20 w-28">
           <LunchDiningIcon sx={{transform:"scale(1.3)" ,color:"#475E36"  , color:mass ? "#57946F":"#475E36"}} />
           <p className='font-semibold'>Mass Diet</p>
           </motion.div>
           <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{
                scale: 0.8,
              }}
             onClick={toggleFat}
             variants={childVariants}
             whileInView="animate"
             viewport={{amount:"all",once:true}}
           className="flex cursor-pointer flex-col items-center rounded-md gap-4 justify-center  h-20 w-28">
           <SoupKitchenIcon sx={{transform:"scale(1.3)" ,color:"#475E36"  , color:fat ? "#57946F":"#475E36"}} />
           <p className='font-semibold'>Lose Fat Diet</p>
           </motion.div>
           </motion.div>
           </div>
            <div className="obeja mt-12 md:mt-0">
                <AnimatePresence>
                {healthy && 
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                exit={{opacity:0,display:"none"}}
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
        </div>
     );
}
 
export default Diets;