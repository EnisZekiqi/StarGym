import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Cookies from 'js-cookie';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { motion,AnimatePresence } from "framer-motion";
import { useDarkMode } from "./DarkModeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const Main = () => {
    const [nickname, setNickname] = useState(Cookies.get('nickname') || '');
    const avatarURL = Cookies.get('avatar');

    const [inbox,setInbox]=useState(false)
    const toggleInbox = ()=>{
        setInbox(prevMode =>  !prevMode)
    }
    const { darkMode } = useDarkMode();
    const { toggleDarkMode } = useDarkMode();
    const handleClick = () => {
        toggleDarkMode();
      };
  

    return ( 
        <div 
        style={{backgroundColor:darkMode ? "#FAFBF9" :"#050604",
             color:darkMode ? "#131A0F":"#E9F0E5"   }}
        className="main">
            <div className="flex justify-between">
            <div className="flex gap-6 items-center">
            <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
            <a href="#about"> <p className="font-semibold">Diets</p></a>
            <a href="#about"> <p className="font-semibold">Planprogram</p></a>
            <a href="#about"> <p className="font-semibold">Suplements</p></a>
            </div>
           <div className="flex items-center gap-6">
           <div className="nonomi3">
                  <button style={{backgroundColor:"transparent"
              ,display:darkMode ? "none":"block"
              }} onClick={handleClick}><LightModeIcon sx={{color:"#FAFBF9"}}/></button>
                {darkMode ? (
                  <button style={{backgroundColor:"transparent"}} onClick={handleClick}><DarkModeIcon sx={{color:"#050604"}}/></button>
                ) : ""
                }
                  </div>
            <div className="flex flex-col"> 
            <NotificationsIcon onClick={toggleInbox} sx={{color:darkMode ? "#131A0F":"#E9F0E5",cursor:"pointer"}}/>
            <AnimatePresence>
            {inbox &&
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="inbox">

            </motion.div>
            }
            </AnimatePresence>
            </div>
           <p>{nickname}</p>
           <Avatar sx={{marginRight:"5px"}}> {avatarURL && <img src={avatarURL} alt="Avatar" />}</Avatar>
           </div>
            </div>
        </div>
     );
}
 
export default Main;