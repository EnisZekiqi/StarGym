import { useState ,useRef,useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import Cookies from 'js-cookie';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { motion,AnimatePresence,MotionConfig } from "framer-motion";
import { useDarkMode } from "./DarkModeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IoIosNotifications } from "react-icons/io";
import MenuIcon from '@mui/icons-material/Menu';
import CollectionsIcon from '@mui/icons-material/Collections';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
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

  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#FAFBF9" : "#050604",
        color: darkMode ? "#131A0F" : "#E9F0E5"
      }}
      className="main"
    >
      <div className="flex justify-between">
        <div className="fonkJr flex gap-6 items-center">
          <h1 className=" font-bold ml-4 text-lg md:text-3xl mt-4 mb-4">StarGym</h1>
          <a href="#about"> <p className="font-semibold">Diets</p></a>
          <a href="#about"> <p className="font-semibold">Planprogram</p></a>
          <a href="#about"> <p className="font-semibold">Suplements</p></a>
        </div>
        <div className="fonk flex gap-6 items-center">
        <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
        <ThreeMenu/>
        </div>
        <div className="flex items-center gap-6">
          <div className="nonomi4">
            <button style={{ backgroundColor: "transparent", display: darkMode ? "none" : "block" }} onClick={handleClick}><LightModeIcon sx={{ color: "#FAFBF9" }} /></button>
            {darkMode ? (
              <button style={{ backgroundColor: "transparent" }} onClick={handleClick}><DarkModeIcon sx={{ color: "#050604" }} /></button>
            ) : ""
            }
          </div>
          <FadeMenu/>
          <div className="flex flex-col">
          <div className=" flex items-center justify-center bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(prevOpen => !prevOpen)}
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
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-46 -ml-4 overflow-hidden"
        >
         <div onClick={toggleEdit}>
         <Option setOpen={setOpen} Icon={FiEdit} text="Edit"  />
         </div>
          <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
          <Option setOpen={setOpen} Icon={FiShare} text="Share" />
          <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
          <motion.div
            variants={itemVariants}
          className="darkModevogel">
          <div className="flex gap-2">
          <button className="text-xs font-medium whitespace-nowrap" style={{ backgroundColor: "transparent", display: darkMode ? "none" : "block",marginLeft:'5px' }} onClick={handleClick}><MdOutlineLightMode  sx={{ color: "#FAFBF9" }} /></button>
          <p style={{ backgroundColor: "transparent", display: darkMode ? "none" : "block" }} className="text-xs font-medium whitespace-nowrap">Light Mode</p>
          </div>
            {darkMode ? (
              <div className="flex gap-2">
                <button className="text-xs font-medium whitespace-nowrap" style={{ backgroundColor: "transparent",marginLeft:'5px' }} onClick={handleClick}><MdOutlineDarkMode  sx={{ color: "#050604" }} /></button>
                <p style={{ backgroundColor: "transparent" }} className="text-xs font-medium whitespace-nowrap">Dark Mode</p>
              </div>
            ) : ""
            }
          </motion.div>
        </motion.ul>
      </motion.div>
    </div>
          </div>
         <div className="avas"> <Avatar sx={{ marginRight: "5px" }}> {avatarURL && <img src={avatarURL} alt="Avatar" />}</Avatar></div>
        </div>
      </div>
     <div className="mt-24 container mx-auto px-4">
     {xs && 
      <p>123123123</p>
     }
     </div>
      <div className="container mt-24 mx-auto px-4">
      {edit &&
        <EditProfile/>
      }
      </div>
      
      <div className="empty"></div>
      <div className="empty"></div>
      <div className="empty"></div>
    </div>
  );
}


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

const FadeMenu = ()=>{
  const { darkMode } = useDarkMode()
  const [open2, setOpen2] = useState(false);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen2(false);
    }
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
<div className=" flex items-center justify-center bg-white">
  <motion.div animate={open2 ? "open" : "closed"} className="relative" ref={dropdownRef}>
    <button
       onClick={() => setOpen2(prevOpen => !prevOpen)}
      className="flex items-center gap-2 px-1 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
    >
      <span className="font-medium text-2xl drop-shadow-2xl"><IoIosNotifications className="drop-shadow-sm" /></span>
    </button>

    <motion.ul
      initial={wrapperVariants.closed}
      variants={wrapperVariants}
      style={{ originY: "top", translateX: "-50%", border: darkMode ? "0.5px solid rgba(5, 6, 4,0.7)" : "0.5px solid rgba(250, 251, 249,0.7)" }}
      className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-52 -ml-24 overflow-hidden"
    >
     <div>
      <motion.h3
      variants={itemVariants}
      className="text-sm font-medium text-center"
      >No notitification yet !</motion.h3>
     </div>
    </motion.ul>
  </motion.div>
</div>
  )
}

const ThreeMenu = ()=>{
  const { darkMode } = useDarkMode()
  const [open3, setOpen3] = useState(false);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen3(false);
    }
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
<div className=" flex items-center justify-center bg-white">
  <motion.div animate={open3 ? "open" : "closed"} className="relative" ref={dropdownRef}>
    <button
       onClick={() => setOpen3(prevOpen => !prevOpen)}
      className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
    >
      <span className="font-medium text-2xl drop-shadow-2xl"><MenuIcon className="-ml-2"/></span>
    </button>

    <motion.ul
      initial={wrapperVariants.closed}
      variants={wrapperVariants}
      style={{ originY: "top", translateX: "-50%", border: darkMode ? "0.5px solid rgba(5, 6, 4,0.7)" : "0.5px solid rgba(250, 251, 249,0.7)" }}
      className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-50 overflow-hidden"
    >
            <motion.li
          variants={itemVariants}
          onClick={() => setOpen3(false)}
          className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          <span className="text-center">Diets</span>
        </motion.li>
        <motion.li
          variants={itemVariants}
          onClick={() => setOpen3(false)}
          className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          <span>PlanProgram</span>
        </motion.li>
        <motion.li
          variants={itemVariants}
          onClick={() => setOpen3(false)}
          className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
        >
          <span>Suplements</span>
        </motion.li>
    </motion.ul>
  </motion.div>
</div>
  )
}

const DefaultContent = ()=>{
  return(
    <div>

    </div>
  )
}

const EditProfile = () =>{
  const { darkMode } = useDarkMode()
  const avatarURL = Cookies.get('avatar');
  const [nickname, setNickname] = useState(Cookies.get('nickname') || '');

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const[file,setFile]=useState(null)
  const targetFile =(e)=>{
    const selectedFile = e.target.files[0]; // Get the selected file

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const avatarDataURL = reader.result;
        setFile(avatarDataURL);
        Cookies.set('avatar', avatarDataURL); // Store the avatar image URL in cookies
      };
      reader.readAsDataURL(selectedFile);
    }
  }
  const ColorButton = styled(Button)(({ theme,darkMode }) => ({
    backgroundColor: darkMode ? 'rgba(5, 6, 4, 0.85)' : 'rgba(250, 251, 249, 0.85)',
    color: darkMode ? '#FAFBF9' : '#050604', // Text color
      border: 'none',
      width: '40px',
      minWidth:'40px',
      '&:hover': {
        backgroundColor:darkMode ? 'rgba(82, 82, 82,0.85)':'rgba(204, 204, 204,0.85)' // Hover background color
      }
  }));

  return(
    <div>
      <div className="flex gap-8 items-center ml-4 justify-center ">
     <div>
     <div id="defaultAvatar"  className="avatar flex text-center justify-center mt-4 font-semibold text-3xl">
          <Avatar sx={{scale:1.5}} style={{width:150,height:150}} src={file} />
          </div>
            <div className="flex -ml-6 ">
               <ColorButton
               sx={{ backgroundColor:darkMode ?"rgba(5, 6, 4,0.85)":"rgba(250, 251, 249,0.85)",border:'none',width:'fit-content'}}
               variant="contained"
      component="label"
      role={undefined}
      tabIndex={-1}
    >
      <CollectionsIcon sx={{color:darkMode?"#999999":"#525252",opacity:1 }}/>
      <VisuallyHiddenInput style={{ display: 'none' }}  onChange={targetFile} type="file" />
    </ColorButton>
            </div>
     </div>
            <div className="flex flex-col gap-2">
             <div className="flex items-center ml-4"> 
             <h3 className="font-semibold text-2xl">{nickname}</h3> 
             <div style={{
               backgroundColor: darkMode ? 'rgba(5, 6, 4, 0.85)' : 'rgba(250, 251, 249, 0.85)',
               color: darkMode ? '#FAFBF9' : '#050604'
             }} className=" ml-4 cursor-pointer p-2 rounded-lg"><FiEdit/></div>
             </div>
             <p className="font-normal text-md">No description yet</p>
            </div>
      </div>
      <div className="flex flex-col">
      
      </div>
    </div>
  )
}


export default Main;