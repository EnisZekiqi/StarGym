import React from "react";
import Marquee from "react-fast-marquee"; // Assuming you're using a similar Marquee package
import { useState,useEffect,useRef } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "./DarkModeContext";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className="relative w-64 cursor-pointer overflow-hidden rounded-xl border mr-3 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] p-4  bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {

  const { darkMode } = useDarkMode();
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

  return (
    <div>
      <motion.div
    variants={{
      hidden:{opacity:0,y:75},
      visible:{opacity:1,y:0},
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once:true}}
    transition={{duration:0.5,delay:0.25}}
    id='clients' className="Clients">
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
        style={{color:darkMode ? "#131A0F":"#525252"}}
        className='font-normal text-md text-center'>Costumers</motion.p>
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
        style={{color:darkMode ? "#131A0F":"#525252"}}
        className='font-normal text-md text-center'>Reviews</motion.p>
        </div>
       </div>
      </motion.div>
    <div className="relative mt-4 flex gap-3 h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
       
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 blur-xl left-0 w-1/3 "
      style={{backgroundColor:darkMode ? "rgba(250, 251, 249,0.5)":"",zIndex:100}}
      ></div>
      <div className="pointer-events-none absolute inset-y-0  blur-xl right-0 w-1/3"
       style={{backgroundColor:darkMode ? "rgba(250, 251, 249,0.5)":"",zIndex:100}}
      ></div>
    </div>
            <div className="empty3"/>
            <div className='vija flex justify-between items-center'
            style={{height:'50px'}}
            >
            <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
            <div className="flex gap-6 mr-6 items-center">
                <InstagramIcon sx={{color:darkMode ? "#475E36":"#B2C9A1",scale:"1.3"}}/>
                <FacebookIcon sx={{color:darkMode ? "#475E36":"#B2C9A1",scale:"1.3"}}/>
                <LinkedInIcon sx={{color:darkMode ? "#475E36":"#B2C9A1",scale:"1.3"}}/>
            </div>
            </div>
    </div>
  );
}
