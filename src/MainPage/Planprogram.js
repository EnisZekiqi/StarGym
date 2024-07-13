import NavbarGeneral from "./NavbarGeneral";
import { useDarkMode } from "../DarkModeContext";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavbarGeneralPlanprogram from "./NavbarGeneralPlanprogram";
import Cookies from 'js-cookie';

const PlanProgram = () => {
    const { darkMode } = useDarkMode()

    const [offer1 ,setOffer1]=useState(false)
    const [offer2 ,setOffer2]=useState(false)
    const [offer3 ,setOffer3]=useState(false)


    const workoutPlans = {
      offer1: "Workout plan for offer 1",
      offer2: "Workout plan for offer 2",
      offer3: "Workout plan for offer 3",
  };

  const handleStartWorkout = (offer) => {
    const selectedPlan = workoutPlans[offer];

    // Define workout data for each offer
    let workoutData = [];
    switch (offer) {
        case 'offer1':
            workoutData = [
                { date: 'Monday', 'Chest & Triceps': 45 },
                { date: 'Tuesday', 'Back & Biceps': 50 },
                { date: 'Wednesday', 'Rest Day': 35 },
                { date: 'Thursday', 'Shoulder & Forarm': 75 },
                { date: 'Friday', 'Legs': 65 },
            ];
            break;
        case 'offer2':
            workoutData = [
                { date: '2024-07-01', percentage: 40 },
                { date: '2024-07-02', percentage: 55 },
                { date: '2024-07-03', percentage: 30 },
                { date: '2024-07-04', percentage: 70 },
                { date: '2024-07-05', percentage: 60 },
            ];
            break;
        case 'offer3':
            workoutData = [
                { date: '2024-07-01', percentage: 50 },
                { date: '2024-07-02', percentage: 60 },
                { date: '2024-07-03', percentage: 45 },
                { date: '2024-07-04', percentage: 80 },
                { date: '2024-07-05', percentage: 70 },
            ];
            break;
        default:
            break;
    }

    // Save selected plan to cookie
    Cookies.set('selectedWorkoutPlan', selectedPlan);
    Cookies.set('workoutData', JSON.stringify(workoutData));

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
    return ( 
        <div 
        className="h-screen"
        style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}
        >
            <NavbarGeneralPlanprogram/>
            <div className="empty"></div>
            <div className="container mx-auto px-0 md:px-8 flex flex-col items-center md:items-stretch gap-8">
                <h1 className="text-4xl font-bold">Planprogram</h1>
                <p className="text-md font-normal -mt-6">Avilable Offers get one now</p>
                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-2"
                style={{
                    justifyContent:(offer1 || offer2 || offer3) ? "start":""
                }}
                >
                    <div className="cardoffer1 offer-card"
                    onClick={() => handleStartWorkout('offer1')}
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
                        <p className="pl-2 pt-2"> Personal Training</p>
                    </div>
                    <div className="cardoffer2 offer-card"
                      onClick={() => handleStartWorkout('offer2')}
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
                        <p className="pl-2 pt-2 font-semibold text-lg"> Personal Training</p>
                        <p className="pl-2 pt-2 pr-2 font-light">
                            Personal Training gives you access to have a experienced coach from our gym 
                            to train you and give advices about you physical body
                        </p>
                        <h1 className="pl-2 pt-3 pb-2 text-center font-bold"
                        style={{color:darkMode ? "#475E36":"#B2C9A1"}}
                        >49 $ / month</h1>
                    </div>
                    <div className="cardoffer3 offer-card"
                      onClick={() => handleStartWorkout('offer3')}
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
                        <p className="pl-2 pt-2"> Personal Training</p>
                    </div>
                   <AnimatePresence>
                   {offer1 && 
                    <div className="offer-text offer-text-1">
                        offer1
                    </div>
                    }
                    {offer2 && 
                    <div className="offer-text offer-text-2">
                        offer2
                    </div>
                    }
                    {offer3 && 
                    <div className="offer-text offer-text-3">
                        offer3
                    </div>
                    }
                   </AnimatePresence>
                </div>
            </div>
            <div className="empty"></div>
        </div>
     );
}
 
export default PlanProgram;