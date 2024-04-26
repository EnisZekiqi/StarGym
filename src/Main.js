import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Cookies from 'js-cookie';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { motion,AnimatePresence } from "framer-motion";
const Main = () => {
    const [nickname, setNickname] = useState(Cookies.get('nickname') || '');
    const avatarURL = Cookies.get('avatar');

    const [inbox,setInbox]=useState(false)
    const toggleInbox = ()=>{
        setInbox(prevMode =>  !prevMode)
    }

    return ( 
        <div className="main">
            <div className="flex justify-between">
            <div className="flex gap-6 items-center">
            <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
            <a href="#about"> <p className="font-semibold">Diets</p></a>
            <a href="#about"> <p className="font-semibold">Planprogram</p></a>
            <a href="#about"> <p className="font-semibold">Suplements</p></a>
            </div>
           <div className="flex items-center gap-6">
            <div className="flex flex-col">
            <NotificationsIcon onClick={toggleInbox} sx={{color:"#131A0F",cursor:"pointer"}}/>
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