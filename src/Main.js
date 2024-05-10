import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Cookies from 'js-cookie';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { motion,AnimatePresence } from "framer-motion";
import { useDarkMode } from "./DarkModeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { Dispatch, SetStateAction} from "react";
import { IconType } from "react-icons";
const Main = () => {
  const [nickname, setNickname] = useState(Cookies.get('nickname') || '');
  const avatarURL = Cookies.get('avatar');
  const { darkMode } = useDarkMode()

//////edit profile
  const [edit, setEdit] = useState(false);
  const [xs,setXs]=useState(true)
  const toggleEdit = () => {
    setEdit(prevMode => !prevMode);
    setXs(false)
  };
///////////////////

  const { toggleDarkMode } = useDarkMode();

  const handleClick = () => {
    toggleDarkMode();
  }; 
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#FAFBF9" : "#050604",
        color: darkMode ? "#131A0F" : "#E9F0E5"
      }}
      className="main"
    >
      <div className="flex justify-between">
        <div className="flex gap-6 items-center">
          <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
          <a href="#about"> <p className="font-semibold">Diets</p></a>
          <a href="#about"> <p className="font-semibold">Planprogram</p></a>
          <a href="#about"> <p className="font-semibold">Suplements</p></a>
        </div>
        <div className="flex items-center gap-6">
          <div className="nonomi3">
            <button style={{ backgroundColor: "transparent", display: darkMode ? "none" : "block" }} onClick={handleClick}><LightModeIcon sx={{ color: "#FAFBF9" }} /></button>
            {darkMode ? (
              <button style={{ backgroundColor: "transparent" }} onClick={handleClick}><DarkModeIcon sx={{ color: "#050604" }} /></button>
            ) : ""
            }
          </div>
          <div className="flex flex-col">
          <div className=" flex items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
        >
          <span className="font-medium text-sm">{nickname}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%", border: darkMode ? "0.5px solid rgba(5, 6, 4,0.7)" : "0.5px solid rgba(250, 251, 249,0.7)" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-44 overflow-hidden"
        >
         <div onClick={toggleEdit}>
         <Option setOpen={setOpen} Icon={FiEdit} text="Edit"  />
         </div>
          <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
          <Option setOpen={setOpen} Icon={FiShare} text="Share" />
          <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
        </motion.ul>
      </motion.div>
    </div>
          </div>
          <Avatar sx={{ marginRight: "5px" }}> {avatarURL && <img src={avatarURL} alt="Avatar" />}</Avatar>
        </div>
      </div>
     {xs && 
      <p>123123123</p>
     }
      {edit &&
        <p>Edit Profile</p>
      }
      <div className="empty"></div>
      <div className="empty"></div>
      <div className="empty"></div>
    </div>
  );
}

const StaggeredDropDown = ({ edit, toggleEdit }) => {
  const { darkMode } = useDarkMode()
  const [open, setOpen] = useState(false);
  const [nickname, setNickname] = useState(Cookies.get('nickname') || '');

  return (
    <div className=" flex items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
        >
          <span className="font-medium text-sm">{nickname}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%", border: darkMode ? "0.5px solid rgba(5, 6, 4,0.7)" : "0.5px solid rgba(250, 251, 249,0.7)" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-44 overflow-hidden"
        >
          <Option setOpen={setOpen} Icon={FiEdit} text="Edit" onClick={toggleEdit} />
          <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
          <Option setOpen={setOpen} Icon={FiShare} text="Share" />
          <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
        </motion.ul>
      </motion.div>
    </div>
  );
};
const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

export default Main;