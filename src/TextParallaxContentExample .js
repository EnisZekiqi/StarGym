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
        <ExampleContent />
      </TextParallaxContent>
    </div>
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
      <div className="relative h-[100vh] md:h-[120vh]">
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
      }}
      ref={targetRef}
      id="about"
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};
const ExampleContent = () => {

  const { darkMode } = useDarkMode();
    return(
      <div className="mx-auto grid grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 md:max-w-5xl">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Additional content explaining the above card here
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
          maiores voluptate est ut saepe accusantium maxime doloremque nulla
          consectetur possimus.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          reiciendis blanditiis aliquam aut fugit sint.
        </p>
        <button 
        className={`btnsign2 w-full px-9 py-4 text-xl ${darkMode ? 'btnsign2' : 'btnsign3'} md:w-fit`}>
          Learn more
        </button>
      </div>
    </div>
    )
};
  const ExampleContent2 = () => (
    <div className="mx-auto grid grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 md:max-w-5xl">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Additional content explaining the above card here
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
          maiores voluptate est ut saepe accusantium maxime doloremque nulla
          consectetur possimus.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          reiciendis blanditiis aliquam aut fugit sint.
        </p>
        <button className="btnsign w-full  px-9 py-4 text-xl  md:w-fit">
          Learn more
        </button>
      </div>
    </div>
  );