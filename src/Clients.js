
import profile2 from './images/profile2.jpg'
import Avatar from '@mui/material/Avatar';
import { useState,useEffect,useRef } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Clients = () => {

    const fade = {
        initial :{
            opacity:0,
            x:-20
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                staggerChildren:1,
                duration:1
            }
        }
    }

    const [reviewsCount, setReviewsCount] = useState(0);

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.5 } // Adjust the threshold as needed
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
  
    useEffect(() => {
      if (isVisible) {
        const interval = setInterval(() => {
          if (reviewsCount < 52117) {
            setReviewsCount(reviewsCount + 700);
          } else {
            clearInterval(interval);
          }
        }, 0.00001); // Adjust the speed of counting as needed
  
        return () => clearInterval(interval);
      }
    }, [isVisible, reviewsCount]);
    ///////////////////////////////

    const [reviewsCount2, setReviewsCount2] = useState(0);
    
    const [isVisible2, setIsVisible2] = useState(false);
    const ref2 = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible2(entry.isIntersecting);
        },
        { threshold: 0.5 } // Adjust the threshold as needed
      );
  
      if (ref2.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref2.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
  
    useEffect(() => {
      if (isVisible2) {
        const interval = setInterval(() => {
          if (reviewsCount2 < 32117) {
            setReviewsCount2(reviewsCount2 + 211);
          } else {
            clearInterval(interval);
          }
        }, 0.00001); // Adjust the speed of counting as needed
  
        return () => clearInterval(interval);
      }
    }, [isVisible2, reviewsCount2]);

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
    ////////////////////

    const trigger5 =()=>{
        setClient1(false)
        setClient2(false)
        setClient3(false)
        setClient4(false)
        setClient5(prevMode=>!prevMode)
        setClient6(false)
        setClient7(false)
    }
    //////////////////

    const trigger6 =()=>{
        setClient1(false)
        setClient2(false)
        setClient3(false)
        setClient4(false)
        setClient5(false)
        setClient6(prevMode=>!prevMode)
        setClient7(false)
    }
/////////////

const trigger7 =()=>{
    setClient1(false)
    setClient2(false)
    setClient3(false)
    setClient4(false)
    setClient5(false)
    setClient6(false)
    setClient7(prevMode=>!prevMode)
}

    const triggerRight = ()=>{
        const container = document.querySelector('.kllient');
        container.classList.add('scroll-transition')
        container.scrollLeft += 400; // Adjust the scroll amount as needed
    }

    const triggerLeft = ()=>{
        const container = document.querySelector('.kllient');
        container.classList.add('scroll-transition')
        container.scrollLeft -= 400; // Adjust the scroll amount as needed
    }


    return ( 
        <div className="Clients">
            <h1 className="text-center font-extrabold text-3xl">Clients</h1>

           <div  className='flex justify-center gap-6 mt-6'>
            <div ref={ref} className="flex flex-col ">
            <p className="font-semibold text-2xl"> {reviewsCount.toLocaleString()}</p>
            <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1,transition:{
                duration:1,
                delay:1
            }}}
            viewport={{once:true}}
            className='font-light text-md text-center'>Costumers</motion.p>
            </div>
            <div ref={ref2} className="flex flex-col ">
            <p className="font-semibold text-2xl"> {reviewsCount2.toLocaleString()}</p>
            <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:1,transition:{
                duration:1,
                delay:1
            }}}
            viewport={{once:true}}
            className='font-light text-md text-center'>Reviews</motion.p>
            </div>
           </div>
          <motion.div
            variants={fade}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            style={{maxWidth:"100%"}} className="kllient gap-6 overflow-x-auto flex mt-12">
                <div
                onClick={trigger1}
                style={{
                    backgroundColor:client1 ? "#475E36":"#475e363b",
                    color:client1 ? "#FAFBF9":"#131A0F",
                    boxShadow:client1 ? "-1px -1px 8px 5px rgba(71,94,54,0.75)" :"none",
                    width:client1 ? "330px":"300px",
                    transition:"0.5s ease"
                }}
                className="client1 ml-6 flex-none">
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
                <div className="client5  flex-none"
                onClick={trigger5}
                style={{
                   backgroundColor:client5 ? "#475E36":"#475e363b",
                   color:client5 ? "#FAFBF9":"#131A0F",
                   boxShadow:client5 ? "-1px -1px 8px 5px rgba(71,94,54,0.75)" :"none",
                   width:client5 ? "330px":"300px",
                   transition:"0.5s ease"
               }}
                >
                    <Avatar sx={{backgroundColor:client5 ?"#FAFBF9":"#475E36",marginTop:2,color:client5 ?"#131A0F":"#FAFBF9"}}   alt="Knet C.Dodds" src="/static/images/avatar/1.jpg" />
                <div className="flex flex-col mt-5">
                    <h2 className='font-bold text-lg text-center'>I'm impressed width</h2>
                    <h2 className='font-bold text-lg text-center'>with the quality theese </h2>
                    <h2 className='font-bold text-lg text-center'>guys are providing</h2>
                    <p className='font-normal text-md mt-12 text-center'>Kent C.Dodds </p>
                    {client5 && 
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
                <div className="client6  flex-none"
                onClick={trigger6}
                style={{
                   backgroundColor:client6 ? "#475E36":"#475e363b",
                   color:client6 ? "#FAFBF9":"#131A0F",
                   boxShadow:client6 ? "-1px -1px 8px 5px rgba(71,94,54,0.75)" :"none",
                   width:client6 ? "330px":"300px",
                   transition:"0.5s ease"
               }}
                >
                    <Avatar sx={{backgroundColor:client6 ?"#FAFBF9":"#475E36",marginTop:2,color:client6 ?"#131A0F":"#FAFBF9"}}   alt="Debbie O'Brien" src="/static/images/avatar/1.jpg" />
                <div className="flex flex-col mt-5">
                    <h2 className='font-bold text-lg text-center'>So friendly staff</h2>
                    <h2 className='font-bold text-lg text-center'>and lots of helpful tips </h2>
                    <h2 className='font-bold text-lg text-center'>that got me best results</h2>
                    <p className='font-normal text-md mt-12 text-center'>Debbie O'Brien </p>
                    {client6 && 
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
                <div className="client7  flex-none"
                onClick={trigger7}
                style={{
                   backgroundColor:client7 ? "#475E36":"#475e363b",
                   color:client7 ? "#FAFBF9":"#131A0F",
                   boxShadow:client7 ? "-1px -1px 8px 5px rgba(71,94,54,0.75)" :"none",
                   width:client7 ? "330px":"300px",
                   transition:"0.5s ease"
               }}
                >
                    <Avatar sx={{backgroundColor:client7 ?"#FAFBF9":"#475E36",marginTop:2,color:client7 ?"#131A0F":"#FAFBF9"}}   alt="Ben Furfie" src="/static/images/avatar/1.jpg" />
                <div className="flex flex-col mt-5">
                    <h2 className='font-bold text-lg text-center'>Very happy i found this place</h2>
                    <h2 className='font-bold text-lg text-center'>it has everything you need </h2>
                    <h2 className='font-bold text-lg text-center'>so check it out</h2>
                    <p className='font-normal text-md mt-12 text-center'>Ben Furfie</p>
                    {client7 && 
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
               
                
            </motion.div>
            <div className="flex gap-4 justify-center items-center">
                <motion.button 
                 whileTap={{
                    scale: 0.8
                  }}
                className='left-right' onClick={triggerLeft}><ArrowBackIosNewIcon sx={{color:"#FAFBF9",marginLeft:-1}}/></motion.button>
                <motion.button
                whileTap={{
                    scale: 0.8
                  }}
                className='left-right' onClick={triggerRight}><ArrowForwardIosIcon sx={{color:"#FAFBF9",marginLeft:1}}/></motion.button>
            </div>
            <div className="empty"/>
            <div className='vija flex justify-between'>
            <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
            <div className="flex gap-6 mr-6 items-center">
                <InstagramIcon sx={{color:"#475E36",scale:"1.3"}}/>
                <FacebookIcon sx={{color:"#475E36",scale:"1.3"}}/>
                <LinkedInIcon sx={{color:"#475E36",scale:"1.3"}}/>
            </div>
            </div>
        </div>
     );
}
 
export default Clients;
