
import profile2 from './images/profile2.jpg'
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
const Clients = () => {

    const [client1,setClient1]=useState(true)
    const [client2,setClient2]=useState(null)
    const[client3,setClient3]=useState(null)
    const [client4,setClient4]=useState(null)
    const[client5,setClient5]=useState(null)
    const [client6,setClient6]=useState(null)
    const[client7,setClient7]=useState(null)

    const trigger1 =()=>{  ///  trigger for client1 
        setClient1(prevMode=>!prevMode)
        setClient2(false)
        setClient3(false)
        setClient4(false)
        setClient5(false)
        setClient6(false)
        setClient7(false)
    }
    /////////////


    const trigger2 =()=>{  /// trigger for client2
        setClient1(false)
        setClient2(prevMode=>!prevMode)
        setClient3(false)
        setClient4(false)
        setClient5(false)
        setClient6(false)
        setClient7(false)
    }
///////////////////
    const trigger3 =()=>{ ////////////trigger for client3 
        setClient1(false)
        setClient2(false)
        setClient3(prevMode=>!prevMode)
        setClient4(false)
        setClient5(false)
        setClient6(false)
        setClient7(false)
    }
    ///////////////
    const trigger4 =()=>{
        setClient1(false)
        setClient2(false)
        setClient3(false)
        setClient4(prevMode=>!prevMode)
        setClient5(false)
        setClient6(false)
        setClient7(false)
    }

    const triggerRight = ()=>{
        const container = document.querySelector('.kllient');
        container.classList.add('scroll-transition')
        container.scrollLeft += 300; // Adjust the scroll amount as needed
    }

    const triggerLeft = ()=>{
        const container = document.querySelector('.kllient');
        container.classList.add('scroll-transition')
        container.scrollLeft -= 300; // Adjust the scroll amount as needed
    }


    return ( 
        <div className="Clients">
            <h1 className="text-center font-extrabold text-3xl">Clients</h1>
 
            <div style={{maxWidth:"100%"}} className="kllient gap-6 overflow-x-auto flex mt-12">
                <div
                onClick={trigger1}
                style={{
                    backgroundColor:client1 ? "#475E36":"#475e363b",
                    color:client1 ? "#FAFBF9":"#131A0F",
                    boxShadow:client1 ? "-1px -1px 8px 5px rgba(71,94,54,0.75)" :"none",
                    width:client1 ? "330px":"300px",
                    transition:"0.5s ease"
                }}
                className="client1 ml-4 flex-none">
                <Avatar sx={{backgroundColor:client1 ?"#FAFBF9":"#475E36",marginTop:2,color:client1 ?"#131A0F":"#FAFBF9"}}   alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className="flex flex-col mt-5">
                    <h2 className='font-bold text-lg text-center'>Took some convincing</h2>
                    <h2 className='font-bold text-lg text-center'>but now that we're on StarGym </h2>
                    <h2 className='font-bold text-lg text-center'>we're never going back</h2>
                    <p className='font-normal text-md mt-12 text-center'>Ramy Rashford </p>
                    {client1 && 
                    <div className="flex items-center justify-center mt-5 gap-2">
                        <p className='font-extralight'>Rated</p>
                            <div>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            </div>
                    </div>
                    }
                </div>
                </div>
                <div className="client2  flex-none"
                 onClick={trigger2}
                style={{
                    backgroundColor:client2 ? "#475E36":"#475e363b",
                    color:client2 ? "#FAFBF9":"#131A0F",
                    boxShadow:client2 ? "-1px -1px 8px 5px rgba(71,94,54,0.75)" :"none",
                    width:client2 ? "330px":"300px",
                    transition:"0.5s ease"
                }}
                >
                <Avatar sx={{backgroundColor:client2 ?"#FAFBF9":"#475E36",marginTop:2,color:client2 ?"#131A0F":"#FAFBF9"}}   alt="Jeremy Sharp" src="/static/images/avatar/1.jpg" />
                <div className="flex flex-col mt-5">
                    <h2 className='font-bold text-lg text-center'>So so happy we found</h2>
                    <h2 className='font-bold text-lg text-center'>you guys !! i'd bet you </h2>
                    <h2 className='font-bold text-lg text-center'>have saved me</h2>
                    <p className='font-normal text-md mt-12 text-center'>Jeremy Sharp </p>
                    {client2 && 
                    <div className="flex items-center justify-center mt-5 gap-2">
                        <p className='font-extralight'>Rated</p>
                            <div>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarHalfIcon/>
                            </div>
                    </div>
                    }
                </div>
                </div>
                <div className="client3  flex-none"
                 onClick={trigger3}
                 style={{
                    backgroundColor:client3 ? "#475E36":"#475e363b",
                    color:client3 ? "#FAFBF9":"#131A0F",
                    boxShadow:client3 ? "-1px -1px 8px 5px rgba(71,94,54,0.75)" :"none",
                    width:client3 ? "330px":"300px",
                    transition:"0.5s ease"
                }}
                >
                <Avatar sx={{backgroundColor:client3 ?"#FAFBF9":"#475E36",marginTop:2,color:client3 ?"#131A0F":"#FAFBF9"}}   alt="Chris Batho" src="/static/images/avatar/1.jpg" />
                <div className="flex flex-col mt-5">
                    <h2 className='font-bold text-lg text-center'>I switched from another</h2>
                    <h2 className='font-bold text-lg text-center'>to StarGym long time ago </h2>
                    <h2 className='font-bold text-lg text-center'>and it was worth it</h2>
                    <p className='font-normal text-md mt-12 text-center'>Chris Batho </p>
                    {client3 && 
                    <div className="flex items-center justify-center mt-5 gap-2">
                        <p className='font-extralight'>Rated</p>
                            <div>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            </div>
                    </div>
                    }
                </div>
                </div>
                <div className="client4  flex-none"
                onClick={trigger4}
                style={{
                   backgroundColor:client4 ? "#475E36":"#475e363b",
                   color:client4 ? "#FAFBF9":"#131A0F",
                   boxShadow:client4 ? "-1px -1px 8px 5px rgba(71,94,54,0.75)" :"none",
                   width:client4 ? "330px":"300px",
                   transition:"0.5s ease"
               }}
                >
                <Avatar sx={{backgroundColor:client4 ?"#FAFBF9":"#475E36",marginTop:2,color:client4 ?"#131A0F":"#FAFBF9"}}   alt="Maria Rodrigues" src="/static/images/avatar/1.jpg" />
                <div className="flex flex-col mt-5">
                    <h2 className='font-bold text-lg text-center'>It's so simple and easy</h2>
                    <h2 className='font-bold text-lg text-center'>to get your goals and </h2>
                    <h2 className='font-bold text-lg text-center'>your achivements </h2>
                    <p className='font-normal text-md mt-12 text-center'>Maria Rodriguez </p>
                    {client4 && 
                    <div className="flex items-center justify-center mt-5 gap-2">
                        <p className='font-extralight'>Rated</p>
                            <div>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarHalfIcon/>
                            </div>
                    </div>
                    }
                </div>
                </div>
                <div className="client5  flex-none">
                    5
                </div>
                <div className="client6  flex-none">
                    6
                </div>
                <div className="client7  flex-none">
                    7
                </div>
               
                
            </div>
            <div className="flex">
                <button onClick={triggerLeft}>Left</button>
                <button onClick={triggerRight}>Right</button>
            </div>
        </div>
     );
}
 
export default Clients;
