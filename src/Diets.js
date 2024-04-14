import NoFoodIcon from '@mui/icons-material/NoFood';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import {motion,AnimatePresence} from "framer-motion"
import { useState } from 'react';

const Diets = () => {


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

    return ( 
        <div id="diets" className="diets flex flex-col md:flex-row container mx-auto px-12">
           <div className="flex w-fit flex-col items-center md:items-stretch gap-4">
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
            <div className="text-diet w-full md:w-1/3">
            <p style={{color:"#111211"}} className="font-normal mb-2"> Diets are important for your health and also for your fitness achivements , our diets are classified into some categories so you can achive the best result possible</p>
            </div>
           <div className="flex gap-8  mt-8 md:mt-4">
           <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{
                scale: 0.8,
              }}
             onClick={toggleHealthy}
           className="flex cursor-pointer flex-col items-center gap-4 justify-center">
           <NoFoodIcon sx={{transform:"scale(1.3)" ,color:"#475E36"}} />
           <p className='font-semibold'>Healthy Diet</p>
           </motion.div>
           <motion.div
           onClick={toggleMass}
             whileHover={{ scale: 1.1 }}
             whileTap={{
                scale: 0.8,
              }}
           className="flex cursor-pointer flex-col items-center gap-4 justify-center">
           <LunchDiningIcon sx={{transform:"scale(1.3)" ,color:"#475E36"}} />
           <p className='font-semibold'>Mass Diet</p>
           </motion.div>
           <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{
                scale: 0.8,
              }}
             onClick={toggleFat}
           className="flex cursor-pointer flex-col items-center gap-4 justify-center">
           <SoupKitchenIcon sx={{transform:"scale(1.3)" ,color:"#475E36"}} />
           <p className='font-semibold'>Loose Fat Diet</p>
           </motion.div>
           </div>
           </div>
            <div className="obeja mt-12 md:mt-0">
                <AnimatePresence>
                {healthy && 
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                exit={{opacity:0}}
                className="healthy">
                    Healthy diet
                </motion.div>
                }
                </AnimatePresence>
            </div>
        </div>
     );
}
 
export default Diets;