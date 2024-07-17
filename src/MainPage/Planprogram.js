import NavbarGeneral from "./NavbarGeneral";
import { useDarkMode } from "../DarkModeContext";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavbarGeneralPlanprogram from "./NavbarGeneralPlanprogram";
import Cookies from 'js-cookie';
import { Snackbar } from "@mui/material";
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const PlanProgram = () => {
    const { darkMode } = useDarkMode()

    const [offer1 ,setOffer1]=useState(false)
    const [offer2 ,setOffer2]=useState(false)
    const [offer3 ,setOffer3]=useState(false)
    const [workoutData, setWorkoutData] = useState([]);
    const [workoutSuccess,setworkoutSuccess]=useState(false)
    const [workoutSuccessMessage,setWorkoutSuccessMessage]=useState('')

    const navigate =useNavigate()

    const workoutPlans = {
      offer1: "High Intensity Workout",
      offer2: "Endurance Workout",
      offer3: "Weight Loss Workout",
  };

  const handleStartWorkout = (offer) => {
    const selectedPlan = workoutPlans[offer];

    // Define workout data for each offer
    let workoutData = [];
    switch (offer) {
        case 'offer1':
            workoutData = [
                { date: 'Monday', percentage: 45, workout: 'Chest & Triceps' },
                { date: 'Tuesday', percentage: 50, workout: 'Back & Biceps' },
                { date: 'Wednesday', percentage: 35, workout: 'Rest Day' },
                { date: 'Thursday', percentage: 75, workout: 'Shoulder & Forearm' },
                { date: 'Friday', percentage: 65, workout: 'Legs' },
            ];
            break;
        case 'offer2':
            workoutData = [
                { date: 'Monday', percentage: 40, workout: 'Chest & Back' },
                { date: 'Tuesday', percentage: 55, workout: 'Biceps & Triceps' },
                { date: 'Wednesday', percentage: 30, workout: 'Rest Day' },
                { date: 'Thursday', percentage: 70, workout: 'Shoulder & Forearm' },
                { date: 'Friday', percentage: 60, workout: 'Legs' },
            ];
            break;
        case 'offer3':
            workoutData = [
                { date: 'Monday', percentage: 50, workout: 'Chest & Biceps' },
                { date: 'Tuesday', percentage: 60, workout: 'Back & Triceps' },
                { date: 'Wednesday', percentage: 45, workout: 'Shoulder' },
                { date: 'Thursday', percentage: 80, workout: 'Rest Day' },
                { date: 'Friday', percentage: 70, workout: 'Biceps ,Triceps & Forearm' },
            ];
            break;
        default:
            break;
    }

    // Save selected plan to cookie
    Cookies.set('selectedWorkout', selectedPlan, { expires: 30 });
    Cookies.set('workoutData', JSON.stringify(workoutData), { expires: 30 });

    setOpen(true)
    setworkoutSuccess(true)
    setWorkoutSuccessMessage(`Planprogram ${selectedPlan} chosen successfully!`)
    setTimeout(() => {
      setworkoutSuccess(false);
      setWorkoutSuccessMessage('');
  }, 3000);

  if(workoutSuccess){
    navigate('/planprogram')
  }


    // Toggle the offer state to show the chart
    switch (offer) {
        case 'offer1':
            setOffer1(true);
            setOffer2(false);
            setOffer3(false);
            break;
        case 'offer2':
            setOffer1(false);
            setOffer2(true);
            setOffer3(false);
            break;
        case 'offer3':
            setOffer1(false);
            setOffer2(false);
            setOffer3(true);
            break;
        default:
            break;
    }
};

const [open,setOpen]=useState(false)

const handleClose=()=>{
  setOpen(false)
}

 const btnBuy = darkMode ? "btnThjesht":"btnThjesht2"

    return ( 
        <div 
        className="h-screen"
        style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}
        >
            <NavbarGeneralPlanprogram/>
            <div className="empty"></div>
            <div style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}} className="container mx-auto px-0 md:px-8 flex flex-col items-center md:items-stretch gap-8">
                <h1 className="text-4xl font-bold">Planprogram</h1>
                <p className="text-md font-normal -mt-6">Avilable Workouts get one now</p>
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 md:gap-2"
                style={{
                    justifyContent:(offer1 || offer2 || offer3) ? "start":""
                }}
                >
                    <div className="cardoffer1 offer-card"
                    onClick={()=>setOffer1(prevMode =>!prevMode)}
                    
                      style={{
                        backgroundColor: 'rgb(71,94,54,5%)',
                        borderRadius: '10px',
                        boxShadow: '0 0.4rem #94b57d',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                        border: '0.2px solid rgba(82, 82, 82,0.3)',
                        width: '370px',
                        minWidth: '310px',
                         display:(offer2 || offer3) ? "none":"block"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 1rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(-0.5rem)';
                      
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0.4rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(0)';
                      
                      }}
                    >
                        <p className="pl-2 pt-2 font-semibold text-lg"> High Intensity Workout</p>
                        <p className="pl-2 pt-2 pb-2 pr-2 font-light">
                            High Intesity workout has the ability to give you power and muscle grow at the same time with less rest between sets but less workouts
                        </p>
                    </div>
                    <div className="cardoffer2 offer-card"
                      onClick={() =>setOffer2(prevMode =>!prevMode)}
                      style={{
                        backgroundColor: 'rgb(71,94,54,5%)',
                        borderRadius: '10px',
                        boxShadow: '0 0.4rem #94b57d',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                        border: '0.2px solid rgba(82, 82, 82,0.3)',
                        width: '370px',
                        minWidth: '310px',
                        display:(offer1 || offer3) ? "none":"block"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 1rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(-0.5rem)';
                       
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0.4rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(0)';
                      
                      }}
                      
                    >
                        <p className="pl-2 pt-2 font-semibold text-lg"> Endurance Workout</p>
                        <p className="pl-2 pt-2 pb-2 pr-2 font-light">
                           Endurance workout means having a stable workout to endure your muscles for maximum performance in next sessions 
                        </p>
                        
                    </div>
                    <div className="cardoffer3 offer-card"
                      onClick={() => setOffer3(prevMode =>!prevMode)}
                      style={{
                        backgroundColor: 'rgb(71,94,54,5%)',
                        borderRadius: '10px',
                        boxShadow: '0 0.4rem #94b57d',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                        border: '0.2px solid rgba(82, 82, 82,0.3)',
                        width: '370px',
                        minWidth: '310px',
                        display:(offer1 || offer2) ? "none":"block"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 1rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(-0.5rem)';
                        
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0.4rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(0)';
                        
                      }}
                    >
                        <p className="pl-2 pt-2 font-semibold text-lg"> Weight Loss Workout</p>
                        <p className="pl-2 pt-2 pb-2 pr-2 font-light">
                          Weight loss workout has many workout and many sets to burn as much calories possible , in the meanitime lossing fat 
                        </p>
                    </div>
                   <AnimatePresence>
                   {offer1 && 
                    <div className="offer-text offer-text-1"
                    >
                      <div className="flex flex-col gap-2 pr-2 pl-2">
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Monday </h3>
                        <p className="font-light text-sm">Chest & Triceps </p>
                        <p className="font-light text-xs">3 Workouts & 3 sets each</p>
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Tuesday </h3>
                        <p className="font-light text-sm">Back & Biceps</p>
                        <p className="font-light text-xs">3 Workouts & 3 sets each</p>
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Wednesday </h3>
                        <p className="font-light text-sm">Rest Day</p>
                        
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Thursday </h3>
                        <p className="font-light text-sm">Shoulder & Forearm </p>
                        <p className="font-light text-xs">3 Workouts & 2 supersets each</p>
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Friday </h3>
                        <p className="font-light text-sm">Legs </p>
                        <p className="font-light text-xs">4 Workouts & 3 sets each</p>
                       </div>
                       <button className={` ${btnBuy}  mt-4`} onClick={() => handleStartWorkout('offer1')}>
                        Start the Planprogram</button>
                      </div>
                    </div>
                    }
                    {offer2 && 
                    <div className="offer-text offer-text-1"
                    >
                      <div className="flex flex-col gap-2 pr-2 pl-2">
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Monday </h3>
                        <p className="font-light text-sm">Chest & Back </p>
                        <p className="font-light text-xs">3 Workouts & 3 sets each</p>
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Tuesday </h3>
                        <p className="font-light text-sm">Biceps & Biceps</p>
                        <p className="font-light text-xs">3 Workouts & 3 sets each</p>
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Wednesday </h3>
                        <p className="font-light text-sm">Rest Day</p>
                        
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Thursday </h3>
                        <p className="font-light text-sm">Shoulder & Forearm </p>
                        <p className="font-light text-xs">3 Workouts & 2 supersets each</p>
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Friday </h3>
                        <p className="font-light text-sm">Legs </p>
                        <p className="font-light text-xs">4 Workouts & 3 sets each</p>
                       </div>
                       <button className={` ${btnBuy}  mt-4`} onClick={() => handleStartWorkout('offer2')}>
                        Start the Planprogram</button>
                      </div>
                    </div>
                    }
                    {offer3 && 
                    <div className="offer-text offer-text-1"
                    >
                      <div className="flex flex-col gap-2 pr-2 pl-2">
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Monday </h3>
                        <p className="font-light text-sm">Chest & Biceps </p>
                        <p className="font-light text-xs">3 Workouts & 3 sets each</p>
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Tuesday </h3>
                        <p className="font-light text-sm">Back & Triceps</p>
                        <p className="font-light text-xs">3 Workouts & 3 sets each</p>
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Wednesday </h3>
                        <p className="font-light text-sm">Shoulder</p>
                        <p className="font-light text-xs">3 Workouts & 2 supersets each</p>
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Thursday </h3>
                        <p className="font-light text-sm">Rest Day </p>
                        
                       </div>
                       <div className="flex gap-2 items-center">
                        <h3 className="font-semibold text-md">Friday </h3>
                        <p className="font-light text-sm">Legs </p>
                        <p className="font-light text-xs">4 Workouts & 3 sets each</p>
                       </div>
                       <button className={` ${btnBuy}  mt-4`} onClick={() => handleStartWorkout('offer3')}>
                        Start the Planprogram</button>
                      </div>
                    </div>
                    }
                   </AnimatePresence>
                   {workoutSuccess &&
                   <Snackbar
                   open={open}
                   autoHideDuration={6000}
                   onClose={handleClose}
                   message="Note archived"
                   
                 >
                     <Alert
                   severity="success"
                   variant="filled"
                   sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
                   >
                   <p>  {workoutSuccessMessage}</p>
                   </Alert>
                     </Snackbar>
                   }
                </div>
            </div>
           <div className="empty"  style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}></div>
           <div className="empty"  style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}></div>
        </div>
     );
}
 
export default PlanProgram;