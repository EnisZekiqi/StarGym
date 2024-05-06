import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDarkMode } from "./DarkModeContext";

export const TextParallaxContentExample = () => {
    const { darkMode } = useDarkMode();
  return (
    <div 
    style={{backgroundColor:darkMode ? "#FAFBF9":"#050604"}}
    className="">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent  />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent2 />
      </TextParallaxContent>
    </div>
  );
};

const FuzzyOverlay = () => {
  const { darkMode } = useDarkMode();
return (
  <motion.div
    initial={{ transform: "translateX(-10%) translateY(-10%)" }}
    animate={{
      transform: "translateX(10%) translateY(10%)",
    }}
    transition={{
      repeat: Infinity,
      duration: 0.2,
      ease: "linear",
      repeatType: "mirror",
    }}
    // You can download these PNGs here:
    // https://www.hover.dev/black-noise.png
    // https://www.hover.dev/noise.png
    style={{
      backgroundImage: 'url("https://www.hover.dev/black-noise.png")',
      // backgroundImage: 'url("/noise.png")',
    }}
    className="pointer-events-none absolute -inset-[100%] opacity-[7.5%]"
  />
);
};
const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[90vh] md:h-[120vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
        color:"#E9F0E5"
      }}
      ref={targetRef}
      id="about"
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center "
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};
const ExampleContent = ({open , props}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });


  const scale = useTransform (scrollYProgress,[0.25, 0.5,0.75,1], [1,1,0.50,0.25])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5,0.75,1], [1,1,0.25,0.25]);
  const { darkMode } = useDarkMode();
    return(
      <motion.div
      style={{
        opacity
      }}
      ref={targetRef}
      className="mx-auto grid grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 md:max-w-5xl">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        StarGym is for everybody you should try it out 
      </h2>
      <div
      className="col-span-1 md:col-span-8">
        <p 
        style={{color:'#525252'}}
        className="mb-4 text-xl text-neutral-600 md:text-2xl">
         StarGym was opened in <b>2008 </b> for everyone who want to achive their body goals,
          we want our costumers to enjoy their experience in the gym and their success is our primary goal
        </p>
        <div className=" flex gap-4 mt-8 mb-8 text-md text-neutral-600 md:text-2xl">
          <div className="ex flex gap-4 items-center">
            <div 
            style={{backgroundColor:'#525252'}}
            className="rounded-xl h-1/2 md:h-full bg-neutral-600 font-bold w-1/3 px-1 py-2 md:py-3">
             <p style={{color:"#E9F0E5"}} className="text-center">+16</p>
            </div>
            <p className="font-normal text-lg">
              Years of experience
            </p>
          </div>
          <div className="wok flex gap-4 items-center">
          <div 
          style={{backgroundColor:'#525252'}}
          className="rounded-xl h-1/2 md:h-full bg-neutral-600 font-bold w-1/3 px-1 py-3 md:py-3">
             <p style={{color:"#E9F0E5"}} className="text-center">112</p>
            </div>
            <p className="font-normal text-lg">
              Employees and Workers
            </p>
          </div>
        </div>
        <button 
       
        className={`btnsign2 w-full px-9 py-4 text-xl ${darkMode ? 'btnsign2' : 'btnsign3'} md:w-fit`}>
          Learn more
        </button>
      </div>
    </motion.div>
    )
};
const ExampleContent2 = ({open , props}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });


  const scale = useTransform (scrollYProgress,[0.25, 0.5,0.75,1], [1,1,0.50,0.25])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5,0.75,1], [1,1,0.25,0.25]);
  const { darkMode } = useDarkMode();
    return(
      <motion.div
      style={{
        opacity
      }}
      ref={targetRef}
      className="mx-auto grid grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 md:max-w-5xl">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        StarGym offers you the best quality
      </h2>
      <div
      className="col-span-1 md:col-span-8">
        <p 
        style={{color:'#525252'}}
        className="mb-4 text-xl text-neutral-600 md:text-2xl">
       We want every costumer to feel secure , safe and happy in our enviroments , that 
       is why we provideyou with the best quality in every aspect , including the 
       personal staff we have 
        </p>
        <button 
       
        className={`btnsign2 w-full px-9 py-4 text-xl ${darkMode ? 'btnsign2' : 'btnsign3'} md:w-fit`}>
          Learn more
        </button>
      </div>
    </motion.div>
    )
};