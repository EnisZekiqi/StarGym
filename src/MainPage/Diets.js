import NavbarGeneral from "./NavbarGeneral";
import Cookies from 'js-cookie';
import { useDarkMode } from "../DarkModeContext";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaAppleAlt } from "react-icons/fa";
import { useState } from "react";
const Diets = () => {

    const { darkMode } = useDarkMode()

    const [healthy,setHealthy]=useState(false) /// hover only 
    const [mass,setMass]=useState(false) /// hover only 

    const [healthyContent,setHealthyContent]=useState(false)
    const [massContent,setMassContent]=useState(false)



    return ( 
        <div className="h-screen"
        style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}>
            <NavbarGeneral/>
            <div className="empty"></div>
            <div style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}} className="container mx-auto px-0 md:px-8 flex flex-col items-center md:items-stretch gap-8">
                <h1 className="text-4xl font-bold">Diets</h1>
                <p className="text-md font-normal -mt-6">Avilable Diets get one now</p>
                <div className="flex justify-around flex-col md:flex-row gap-8 md:gap-0">
                    <div className="helthydiet flex flex-col items-center justify-center"
                    onClick={()=>setHealthyContent(prevMode =>!prevMode)}
                    style={{
                        backgroundColor: 'rgb(71,94,54,5%)',
                        borderRadius: '10px',
                        boxShadow: '0 0.4rem #94b57d',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                        border: '0.2px solid rgba(82, 82, 82,0.3)',
                        width: '175px',
                        height:'175px',
                         display:massContent ? "none" :""
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 1rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(-0.5rem)';
                        setHealthy(true)
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0.4rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(0)';
                        setHealthy(false)
                      }}
                    >
                  <FaAppleAlt 
                    style={{
                        color: healthy || healthyContent ? '#94b57d' : (darkMode ? "#050604" : "#FAFBF9"),
                        transition: 'color 0.5s linear, transform 0.5s linear',
                        transform: `scale(${healthy ? 2.3 : 2.0}) rotate(${healthy ? 15 : 0}deg)`
                      }}
                  />
                  {(healthy || healthyContent) && 
                        <div
                        className="mt-2 flex items-end justify-center"
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: healthy || healthyContent ? 1 : 0
                        }}
                        >
                        <h1 className="font-light text-md">Healthy Diet</h1>
                        </div>
                    }
                    
                    </div>
                    <div className="massdiet flex flex-col items-center justify-center"
                      onClick={()=>setMassContent(prevMode =>!prevMode)}
                    style={{
                        backgroundColor: 'rgb(71,94,54,5%)',
                        borderRadius: '10px',
                        boxShadow: '0 0.4rem #94b57d',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                        border: '0.2px solid rgba(82, 82, 82,0.3)',
                        width: '175px',
                      height:'175px',
                         display:healthyContent ? "none" :""
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 1rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(-0.5rem)';
                        setMass(true)
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0.4rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(0)';
                        setMass(false)
                      }}
                    >
                   <FaPizzaSlice  
                   style={{
                        color: mass  || massContent ? '#94b57d' : (darkMode ? "#050604" : "#FAFBF9"),
                        transition: 'color 0.5s linear, transform 0.5s linear',
                        transform: `scale(${mass ? 2.3 : 2.0}) rotate(${mass ? 15 : 0}deg)`
                      }}/>

                      {(mass || massContent) && 
                        <div
                        className="mt-2 flex items-end justify-center"
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: mass || massContent ? 1 : 0
                        }}
                        >
                        <h1 className="font-light text-md">Mass Diet</h1>
                        </div>
                    }
                    </div>
                </div>
                {healthyContent && 
                <p>123123</p>
                }
            </div>
            <div className="empty"  style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}></div>
           <div className="empty"  style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}></div>
        </div>
     );
}
 
export default Diets;