import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import prework from './images/prework-removebg-preview.png'
import pre from './images/pre-removebg-preview.png'
import whey from './images/whey-removebg-preview.png'
import mass from './images/mass.webp'
import creat from './images/creat.webp'
import bcaa from './images/bcaa.webp'
import vega from './images/vega.webp'
import casein from './images/casein.webp'
import amino from './images/amino.webp'
import { useDarkMode } from "./DarkModeContext";

const Example = () => {

  const { darkMode } = useDarkMode();
  
  return (
    <div style={{backgroundColor: darkMode ?"#475E36":"#B2C9A1"}} className=" mt-12">
      <div className="flex h-36 items-center justify-center">
        <span style={{color:darkMode ?"#E9F0E5":"#131A0F"}} className="font-semibold uppercase">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-36 items-center justify-center">
        <span style={{color:darkMode ? "#E9F0E5":"#131A0F"}} className="font-semibold uppercase ">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const { darkMode } = useDarkMode();
  return (
    <section ref={targetRef} style={{backgroundColor:"#131A0F"}} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p style={{color:"#FAFBF9"}} className="ddd p-8 text-6xl font-black uppercase backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    img:pre,
    title: "PREworkout",
    id: 1,
  },
  {
    img:whey,
    title: "Whey",
    id: 2,
  },
  {
    img:casein,
    title: "Casein",
    id: 3,
  },
  {
    img:creat,
    title: "Creatine",
    id: 4,
  },
  {
    img:bcaa,
    title: "Bcaa",
    id: 5,
  },
  {
    img:vega,
    title: "VeganWhey",
    id: 6,
  },
  {
    img:amino,
    title: "AminoAcids",
    id: 7,
  },
];