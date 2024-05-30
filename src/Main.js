import { useState ,useRef,useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import Cookies from 'js-cookie';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { motion,AnimatePresence,MotionConfig, color } from "framer-motion";
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
import { useSuccessMessage } from './SuccessMessageContext';
import { FiLogOut } from "react-icons/fi";
import Alert from '@mui/material/Alert';
import { useAvatarImage } from './AvatarImageContext';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { CountryDropdown } from 'react-country-region-selector';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import vaportixx from './images/vaportixx.webp'
import cellmax from './images/cellmax.webp'
import FeedIcon from '@mui/icons-material/Feed';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import masstechu from './images/masstech.webp'
import pllatinumi from './images/pllatinumi.webp'
import {
  FiEdit,
  FiChevronDown,
  FiShare,
  FiInfo,
  FiHome ,
  FaFire,
  FiPlus, FiTrash 
} from "react-icons/fi";
import SendIcon from '@mui/icons-material/Send';
import ArchiveIcon from '@mui/icons-material/Archive';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Main = () => {
  const [nickname, setNickname] = useState(Cookies.get('nickname') || '');
  const avatarURL = Cookies.get('avatar');
  const { darkMode } = useDarkMode()
const [fileURL, setFileURL] = useState('');

useEffect(() => {
  const savedFileURL = localStorage.getItem('selectedImageURL');
  if (savedFileURL) {
    setFileURL(savedFileURL); // Set the file URL state with the saved image URL
  }
}, []); 
//////edit profile
  const [edit, setEdit] = useState(false);
  const [xs,setXs]=useState(true)
  const [ info ,setInfo]=useState(false)
  
  const toggleEdit = () => {
    setEdit(prevMode => !prevMode);
    if(setEdit !== true){
      setXs(false)
      setInfo(false)
    }
    else{
      setEdit(false)
    }
    if(setEdit !== false){
      setXs(false)
      setInfo(false)
      setEdit(true)
      
    }
  };
  const toggleInfo =()=>{
    setInfo(prevMode => !prevMode)
    setXs(prevMode => !prevMode)
  }
///////////////////

  const { toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

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
  const { avatarImageURL } = useAvatarImage();
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
        <div className="fonk flex gap-4 items-center">
        <h1 className="font-bold ml-4 text-xl mt-4 mb-4">StarGym</h1>
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
          style={{ originY: "top", translateX: "-50%", border: darkMode ? "0.5px solid rgba(5, 6, 4,0.7)" : "0.5px solid rgba(250, 251, 249,0.7)",backgroundColor:darkMode? "rgba(250, 251, 249)":"rgba(5, 6, 4)" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl z-50 absolute top-[120%] left-[50%] w-46 -ml-12 md:-ml-4 overflow-hidden"
        >
           <a href="/main"><Option setOpen={setOpen} Icon={FiHome} text="Home" /></a>
         <div onClick={toggleEdit}>
         <Option setOpen={setOpen} Icon={FiEdit} text="Edit Profile"  />
         </div>
         <a href="/info"> <Option setOpen={setOpen} Icon={FiInfo} text="Information" /></a>
         
          <motion.div
            variants={itemVariants}
          className="darkModevogel mt-2 mb-2">
          <div onClick={handleClick} className="flex gap-2 cursor-pointer">
          <button className="text-xs font-medium whitespace-nowrap" style={{ backgroundColor: "transparent", display: darkMode ? "none" : "block",marginLeft:'5px' }} ><MdOutlineLightMode  sx={{ color: "#FAFBF9" }} /></button>
          <p style={{ backgroundColor: "transparent", display: darkMode ? "none" : "block" }} className="text-xs font-medium whitespace-nowrap">Light Mode</p>
          </div>
            {darkMode ? (
              <div onClick={handleClick} className="flex gap-2 cursor-pointer">
                <button className="text-xs font-medium whitespace-nowrap" style={{ backgroundColor: "transparent",marginLeft:'5px' }} onClick={handleClick}><MdOutlineDarkMode  sx={{ color: "#050604" }} /></button>
                <p style={{ backgroundColor: "transparent" }} className="text-xs font-medium whitespace-nowrap">Dark Mode</p>
              </div>
            ) : ""
            }
          </motion.div>
         <a href="/"> <Option setOpen={setOpen} Icon={FiLogOut} text="Log Out" /></a>
        </motion.ul>
      </motion.div>
    </div>
          </div>
         <div className="avas cursor-pointer"> <Avatar  onClick={toggleEdit} sx={{ marginRight: "5px" }} src={fileURL}></Avatar></div>
        </div>
      </div>
     <div className="mt-8 container mx-auto px-4 ">
     {xs && 
      <MainIntro/>
     }
     </div>
      <div className="container mt-24 mx-auto px-4">
      {edit &&
        <EditProfile/>
      }
      </div>
      
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
      style={{ originY: "top", translateX: "-50%", border: darkMode ? "0.5px solid rgba(5, 6, 4,0.7)" : "0.5px solid rgba(250, 251, 249,0.7)",backgroundColor:darkMode? "rgba(250, 251, 249)":"rgba(5, 6, 4)" }}
      className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl z-50 absolute top-[120%] left-[50%] w-50 overflow-hidden"
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



const EditProfile = () =>{
  const { darkMode } = useDarkMode()
  const avatarURL = Cookies.get('avatar');
  const [nickname, setNickname] = useState(Cookies.get('nickname') || '');
  const [password, setPassword] = useState(Cookies.get('password') || '');

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

  const [file, setFile] = useState('');
  const [fileURL, setFileURL] = useState('');

  useEffect(() => {
    const savedFileURL = localStorage.getItem('selectedImageURL');
    if (savedFileURL) {
      setFileURL(savedFileURL); // Set the file URL state with the saved image URL
    }
  }, []); ///////////// localstorage for avatar 

  useEffect(() => {
    const savedDescription = Cookies.get('description');
    if (savedDescription) {
      setDescription(savedDescription);
    } else {
      setDescription('No description yet');
    }
  }, []);// This useEffect runs only once after the component mounts


    const targetFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageURL = e.target.result;
      setFileURL(imageURL); // Set the file URL state with the selected image URL
      localStorage.setItem('selectedImageURL', imageURL); // Store the selected image URL in local storage
    };
    reader.readAsDataURL(file);
  };

  const { setAvatarImageURL } = useAvatarImage();

  // Set the avatar image URL
  const handleImageChange = (imageURL) => {
    setAvatarImageURL(imageURL);
  };


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

  const [newNickname,setNewNickname]=useState(false)  //// showing newNickname input
  const [newNicknameValue, setNewNicknameValue] = useState('') //// newNickname input 
  const [description,setDescription]=useState('') /// default description
  const [newDescription,setNewDescription]=useState('')   ///// new description 
  const [newDescriptionValue,setNewDescriptionValue]=useState(false)   /// showing input for new descriptiom
  const[newPassword,setNewPassword]=useState(false)  /// new password input 
  const[newPasswordValue,setNewPasswordValue]=useState('')  //// new password input
  const [writeOldPassword,setWriteOldPassword]=useState('')

  const ClickNickname = ()=>{
  setNewNickname(prevMode => !prevMode)
  }      ///// function for showing the input for new nickname 

  const ClickNicknamev2 = ()=>{
    setNewNickname(true)
     ////// function for clicking the input to show the new nickname
  }
  const ClickDesciption =()=>{
    setNewDescriptionValue(prevMode => !prevMode)
  }  ///// function for showing the input for new description  

  const ClickDescriptionv2 =()=>{
    setNewDescriptionValue(true)
    ///// function for clicking the input to show the new description
  }

  const ClickPassword = ()=>{
    setNewPassword(prevMode => !prevMode)
    ////// function for showing the input for new password 
  }
  const ClickPasswordv2 = ()=>{
    setNewPassword(true)
     ////// function for clicking the input to show the new password
  }

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };   //////////// onchange for description 
const handleNewNicknameChange = (e) => {
  setNewNicknameValue(e.target.value);
};      //////////// onchange for nickname 

const handleNewPasswordChange = (e)=>{
  setNewPasswordValue(e.target.value)
  /////// onchange for password
}

const handleOldPassword= (e)=>{
  setWriteOldPassword(e.target.value)
}
 
const [fillMessage,setFillMessage]=useState(false)   /////// fill out error message 
const [filledSuccess,setFilledSuccess]=useState(false)   ////// filled successfully for nickname
const[filledDescription,setFilledDescription]=useState(false)   ///////// filled successfully for description
const [maxFilled,setMaxFilled]=useState(false) ///////// maximum 15 letters error
const [maxFilled2,setMaxFilled2]=useState(false) ////// maximum 8 letters error 
const [filledPassword,setFilledPassword]=useState(false) ////// fuilled successfully for password
const[correctOldPassword,setCorrectOldPassword]=useState(false)

const saveNewNickname = () => {
  setNickname(newNicknameValue); // Update nickname with new value 
  if(newNicknameValue.trim() === ''){
    setFillMessage(true)
    setNickname(nickname)
    setOpen1(true)
    setTimeout(() => {
      setFillMessage(false)
    }, 3000);
  }else{
    setFilledSuccess(true)
    setOpen1(true)
    setTimeout(() => {
      setFilledSuccess(false)
    }, 3000);
    Cookies.set('nickname', newNicknameValue, { expires: 365 });
  }
}; 

const saveDescription = () => {
  setDescription(newDescription)
  if (newDescription.trim() === '') {
    setDescription('No description yet')
    setOpen1(true)
    setMaxFilled(false)
    setFillMessage(true); // Show fill message error
    setTimeout(() => {
      setFillMessage(false);
    }, 3000);
  } else if (newDescription.length > 15){
    setOpen1(true)
    setDescription('No description yet'); // Update description
    setFilledDescription(false); // Show success filled message
    setMaxFilled(true); // Show max filled message error
    setTimeout(() => {
      setMaxFilled(false);
    }, 3000);
  }
  else{
    setOpen1(true)
    setDescription(newDescription); // Update description
    setFilledDescription(true); // Show success filled message
    setTimeout(() => {
      setFilledDescription(false);
    }, 3000)
    Cookies.set('description', newDescription, { expires: 365 });
    localStorage.setItem('description', newDescription)
  }
};

const savePassword = () => {
  // Check if the new password is empty
  if (newPasswordValue.trim() === '') {
    setFillMessage(true);
    setOpen1(true);
    setTimeout(() => {
      setFillMessage(false);
    }, 3000);
    return; // Exit the function if the new password is empty
  }

  // Check if the new password has at least 8 characters
  if (newPasswordValue.length < 8) {
    setMaxFilled2(true);
    setOpen1(true);
    setFilledPassword(false);
    setTimeout(() => {
      setMaxFilled2(false);
    }, 3000);
    return; // Exit the function if the new password has less than 8 characters
  }

  // Check if the old password is correct
  if (writeOldPassword !== password) {
    setCorrectOldPassword(true);
    setFillMessage(false)
    setOpen1(true);
    setTimeout(() => {
      setCorrectOldPassword(false);
    }, 3000);
    return; // Exit the function if the old password is incorrect
  }

  // Update the password if all conditions are met
  setPassword(newPasswordValue);

  // Show success message
  setFilledPassword(true);
  setOpen1(true);
  setTimeout(() => {
    setFilledPassword(false);
  }, 3000);

  // Save the new password to cookies
  Cookies.set('password', newPasswordValue, { expires: 365 });
};



const [open1, setOpen1] = useState(false);
const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const inputSwitch = darkMode ? "input-wrapper2":"input-wrapper3"
  const buttonSwitch =darkMode ? "btnsign":"btnsign3"

  const [clickFemale, setClickFemale] = useState(Cookies.get('gender') === 'female');
  const [clickMen, setClickMen] = useState(Cookies.get('gender') === 'male');
  const [selectedGender, setSelectedGender] = useState(Cookies.get('gender') || '')
  const [femaleValue,setFemaleValue]=useState('')
  const [menValue,setMenValue]=useState('')
  const [selectedCountry, setSelectedCountry] = useState(Cookies.get('country') || '');




  const toggleMen =()=>{
    setClickMen(true)
    setClickFemale(false)
    Cookies.set('gender', 'male', { expires: 365 });
  }

  const toggleFemale= ()=>{
    setClickFemale(true)
    setClickMen(false)
    Cookies.set('gender', 'female', { expires: 365 });
  }

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    Cookies.set('country', country, { expires: 365 });
  };


  const handleMenValue =(e)=>{
    setMenValue(e.target.value)
  }

  const handleFemaleValue = (e)=>{
    setFemaleValue(e.target.value)
  }

const Countryv2 = darkMode ? "country" :"countryv2"

  return(
    <div>
      <div className="flex gap-8 items-center ml-0 md:ml-6 justify-center md:justify-start ">
     <div>
     <div id="defaultAvatar"  className="avatar flex text-center justify-center mt-4 font-semibold text-3xl">
          <Avatar sx={{scale:1.5}} style={{width:150,height:150}} src={fileURL} />
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
            <a href="#nickname">
            <div style={{
               backgroundColor: darkMode ? 'rgba(5, 6, 4, 0.85)' : 'rgba(250, 251, 249, 0.85)',
               color: darkMode ? '#FAFBF9' : '#050604'
             }} className=" ml-4 cursor-pointer p-2 rounded-lg"><FiEdit/></div>
            </a>
             </div>
             <p className="font-normal text-md ml-4">{description}</p>
            <div className="flex gap-4 items-center">
            <p className="font-normal text-sm"> 
             {selectedGender === 'male' && <MaleIcon />}
        {selectedGender === 'female' && <FemaleIcon />}</p>
        <p className="font-normal text-sm ">
        {selectedCountry && <span> <b className="font-bold">{selectedCountry}</b></span>}
      </p>
            </div>
            </div>
      </div>
      <div className="flex flex-col mt-32 justify-center md:justify-start gap-4">
             <h3 className="font-bold text-xl md:text-2xl text-center md:text-start">Account Information</h3>
             <p className="font-light text-sm text-center md:text-start">Click on the information to apply changes</p>
             <div className="flex flex-col items-center md:flex-row justify-evenly mt-8">
             <div className="flex flex-col gap-2 items-center">
            <div className="flex gap-1 items-center">
            {newNickname && <p className="font-medium text-md md:text-lg text-center md:text-start">Old</p>}
              <p className="font-medium text-md md:text-lg text-center md:text-start"> Nickname</p>
            </div>
             <div onClick={ClickNicknamev2} id="nickname" class={` ${inputSwitch} text-center md:text-start w-fit`}>
              <input  type="text" placeholder="Nickname" value={nickname}  name="text" class="input"/>
            </div>
                  {newNickname && (
            <div className="mt-4 items-center">
              <p className="font-medium text-md md:text-lg text-center ">New Nickname</p>
              <div className={` ${inputSwitch} text-center md:text-start`}>
                <input  
                  type="text" 
                  placeholder="Nickname" 
                  value={newNicknameValue} // Use newNicknameValue state
                  onChange={handleNewNicknameChange} 
                  name="text" 
                  className="input mt-2"
                />
              </div>
             <div className="flex gap-4 mt-7 items-center justify-center ">
              <button className={`${buttonSwitch} p-2.5`} onClick={ClickNickname}>Cancle</button>
             <button className={`${buttonSwitch} p-2.5`} onClick={saveNewNickname}>Save</button>
              </div> {/* Add a button to save the new nickname */}
            </div>
          )}
             </div>
             <div style={{backgroundColor: darkMode ? "rgba(5, 6, 4,0.7)":"rgba(250, 251, 249, 0.75)"}} className="vizorja flex items-center"></div>
             <div className="flex flex-col gap-2 mt-8 md:mt-0 items-center">
           
             <div className="flex gap-1 items-center">
            {newPassword && <p className="font-medium text-md md:text-lg  md:text-start ">Old</p>}
              <p className="font-medium text-md md:text-lg text-center  md:text-start"> Password</p>
            </div>
          
             <div onClick={ClickPasswordv2} id="nickname" class={` ${inputSwitch} text-center md:text-start `}>
              <input  type={newPassword ? "text" :"password"} placeholder="Password" onChange={newPassword ? handleOldPassword : null} value={newPassword ? writeOldPassword : password}  name="text" class="input"/>
            </div>
            {newPassword && (
            <div className="mt-4 items-center">
              <p className="font-medium text-md md:text-lg text-center ">New Password</p>
              <div className={` ${inputSwitch} text-center md:text-start`}>
                <input  
                  type="text" 
                  placeholder="New Password" 
                  value={newPasswordValue} // Use newNicknameValue state
                  onChange={handleNewPasswordChange} 
                  name="text" 
                  className="input mt-2"
                />
              </div>
             <div className="flex gap-4 mt-7 items-center justify-center ">
              <button className={`${buttonSwitch} p-2.5`} onClick={ClickPassword}>Cancle</button>
             <button className={`${buttonSwitch} p-2.5`} onClick={savePassword}>Save</button>
              </div> {/* Add a button to save the new nickname */}
            </div>
          )}
             </div>
             <div style={{backgroundColor: darkMode ? "rgba(5, 6, 4,0.7)":"rgba(250, 251, 249, 0.75)"}} className="vizorja2 flex items-center"></div>
             <div className="flex flex-col gap-2 mt-8 md:mt-0 items-center">
             <p className="font-medium text-md md:text-lg text-center">Description</p>
             <div  id="nickname" class={` ${inputSwitch} text-center md:text-start `}>
              <input onClick={ClickDescriptionv2}  value={description}  type="text" placeholder="Description"   name="text" class="input"/>
             {newDescriptionValue && 
               <div className="mt-6 items-center">
               <p className="font-medium text-md md:text-lg text-center">New Description</p>
               <div className={` ${inputSwitch} text-center md:text-start`}>
                 <input  
                   type="text" 
                   placeholder="Description" 
                   value={newDescription} // Use newNicknameValue state
                   onChange={handleDescriptionChange} 
                   name="text" 
                   className="input mt-2"
                 />
               </div>
              <div className="flex gap-4 mt-7 items-center justify-center ">
               <button className={`${buttonSwitch} p-2.5`} onClick={ClickDesciption}>Cancle</button>
              <button className={`${buttonSwitch} p-2.5`} onClick={saveDescription}>Save</button>
               </div> {/* Add a button to save the new nickname */}
             </div>
             }
            </div>
             </div>
             </div>
      </div>
      <div className="flex flex-col mt-32 justify-center md:justify-start gap-4">
      <h3 className="font-bold text-xl md:text-2xl text-center md:text-start">Personal Details</h3>
      <p className="font-light text-sm text-center md:text-start">Share more information about you </p>
            <div className="flex flex-col items-center md:flex-row justify-evenly mt-8">
            <div className="flex flex-col gap-2 items-center justify-center">
            <p className="font-medium text-md md:text-lg text-center ">Gender</p>
              <div className="female flex gap-2 items-center mt-4">
                <div onClick={toggleFemale} 
                 style={{border:darkMode ? "1px solid rgba(5, 6, 4,0.7)":" 1px solid rgba(250, 251, 249, 0.75)",
                 }} 
                 className="femalebox cursor-pointer items-center justify-center">
                 <AnimatePresence>
                 {clickFemale && 
                 <motion.div
                 initial={{opacity:0,scale:0}}
                 animate={{opacity:1,scale:1,transition:{
                  duration:0.3
                 }}}
                 exit={{opacity:0,scale:0}}
                 >
                   <CheckIcon sx={{marginLeft:"-8px",marginTop:"-15px"}}/>
                 </motion.div>
                  }
                  </AnimatePresence> 
                </div>
                <p className="text-normal text-md md:text-lg text-center">Female</p>
              </div>
              <div className="female flex -ml-5 gap-2 items-center  mt-4">
                <div onClick={toggleMen} 
                 style={{border:darkMode ? "1px solid rgba(5, 6, 4,0.7)":" 1px solid rgba(250, 251, 249, 0.75)",
                  
                 }} 
                className="femalebox cursor-pointer">
                   <AnimatePresence>
                   {clickMen && 
                    <motion.div
                    initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1,transition:{
                     duration:0.3
                    }}}
                    exit={{opacity:0,scale:0}}
                    ><CheckIcon sx={{marginLeft:"-8px",marginTop:"-15px"}}/>
                    </motion.div>
                  }
                   </AnimatePresence>
                </div>
                <p className="text-normal text-md md:text-lg text-center">Male</p>
              </div>
            </div>
            <div style={{backgroundColor: darkMode ? "rgba(5, 6, 4,0.7)":"rgba(250, 251, 249, 0.75)"}} className="vizorja2 flex items-center"></div>
            <div className="country-selection ">
            <p className="font-medium text-md md:text-lg text-center mt-12 md:mt-0 ">Country</p>
        <CountryDropdown
          value={selectedCountry}
          onChange={(val) => handleCountryChange(val)}
          classes={`${Countryv2}`}
          style={{
            width: '200px',
            marginTop:'24px',
            padding: '10px',
            borderRadius: '4px',
          }}
        />
      </div>
            </div>
      </div>
      {fillMessage && 
      <Snackbar
      open={open1}
      autoHideDuration={6000}
      onClose={handleClose1}
      message="Note archived"
      
    >
        <Alert
      severity="error"
      variant="filled"
      sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
      >
      <p>Fill the empty field </p>
      </Alert>
        </Snackbar>
      }
      {filledSuccess && 
      <Snackbar
      open={open1}
      autoHideDuration={6000}
      onClose={handleClose1}
      message="Note archived"
      
    >
        <Alert
      severity="success"
      variant="filled"
      sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
      >
      <p>NickName changed successfully </p>
      </Alert>
        </Snackbar>
      }
      {filledDescription && 
      <Snackbar
      open={open1}
      autoHideDuration={6000}
      onClose={handleClose1}
      message="Note archived"
      
    >
        <Alert
      severity="success"
      variant="filled"
      sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
      >
      <p>Description added successfully </p>
      </Alert>
        </Snackbar>
      }
      {maxFilled && 
        <Snackbar
      open={open1}
      autoHideDuration={6000}
      onClose={handleClose1}
      message="Note archived"
      
    >
        <Alert
      severity="error"
      variant="filled"
      sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
      >
      <p>Must have 15 letters max </p>
      </Alert>
        </Snackbar>
        
      }
      {maxFilled2 && 
       <Snackbar
       open={open1}
       autoHideDuration={6000}
       onClose={handleClose1}
       message="Note archived"
       
     >
         <Alert
       severity="error"
       variant="filled"
       sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
       >
       <p>Must have at least 8 letters </p>
       </Alert>
         </Snackbar>
      }
      {filledPassword && 
      <Snackbar
      open={open1}
      autoHideDuration={6000}
      onClose={handleClose1}
      message="Note archived"
      
    >
        <Alert
      severity="success"
      variant="filled"
      sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
      >
      <p>Password added successfully </p>
      </Alert>
        </Snackbar>
      }
      {correctOldPassword &&
       <Snackbar
       open={open1}
       autoHideDuration={6000}
       onClose={handleClose1}
       message="Note archived"
       
     >
         <Alert
       severity="error"
       variant="filled"
       sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
       >
       <p>Old password is incorrect </p>
       </Alert>
         </Snackbar>
      }
      
    </div>
    
  )
}

 const MainIntro = () =>{
  const { darkMode } = useDarkMode()
  const theme = darkMode ? "backgroundIntro2":"backgroundIntro"
  const themeText = darkMode ? "opacity-85":" opacity-75"
  const borderTheme = darkMode ? "image-wrapper2" :"image-wrapper"
  const gradient = darkMode 
  ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)' 
  : 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' ;

  const border = darkMode ? "border-rose" :" border-pink"
  const bg =darkMode ? "bg-rose" :"bg-pink"
  const inputSwitch = darkMode ? "input-wrapper2":"input-wrapper3"
  const buttonSwitch =darkMode ? "btnsign":"btnsign3"
  const buttonSwitch2 =darkMode ? "btnsaved":"btnsaved2"
  const llojetsupl = darkMode ? "lloji-supleme":"lloji-supleme2"
  ////////// color changes for dark/light mode ///////////

    const [fillMessage,setFillMessage]=useState(false)
    const [filledNotes,setFilledNotes]=useState(false)
    const [maxFilled,setMaxFilled]=useState(false)
    const [open1, setOpen1] = useState(false);
const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };
  
  const [fileURL, setFileURL] = useState('');

  useEffect(() => {
    const savedFileURL = localStorage.getItem('selectedImageURL');
    if (savedFileURL) {
      setFileURL(savedFileURL); // Set the file URL state with the saved image URL
    }
  }, []); ///////////// localstorage for avatar 


  
  useEffect(() => {
    const savedNotes = Cookies.get('notes');
    if (savedNotes) {
      setNotes(savedNotes.split('\n')); // Split saved notes by newline character
    }
  }, []);

  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [displayedNotes, setDisplayedNotes] = useState(['']);
 

  const handleNotesChange = (e)=>{
    setNote(e.target.value)
  }


  const ToggleNotes = () => {
    if (note.trim() === '') {
      setFillMessage(true);
      setOpen1(true);
      setTimeout(() => {
        setFillMessage(false);
      }, 3000);
    } else if (notes.length >= 3) {
      setMaxFilled(true);
      setOpen1(true);
      setTimeout(() => {
        setMaxFilled(false);
      }, 3000);
    } else {
      const newNotes = [...notes, note];
      setNotes(newNotes); // Update notes array
      setFilledNotes(true); // Show success filled message
      setOpen1(true);
      Cookies.set('notes', newNotes.join('\n'), { expires: 365 }); // Join notes array with newline character
      setTimeout(() => {
        setFilledNotes(false);
        setNote(''); // Clear the input field
      }, 3000);
    }
  };

  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const handleSelectNote = (index) => {
    setSelectedNoteIndex(index);
  };

  const handleClearNote = () => {
    if (selectedNoteIndex !== null) {
      const newNotes = notes.filter((_, index) => index !== selectedNoteIndex);
      setNotes(newNotes);
      setSelectedNoteIndex(null);
      Cookies.set('notes', newNotes.join('\n'), { expires: 365 });
    }
  };
 

  const [news,setNews]=useState(false)

  const toggleNews=()=>{
    setNews(prevMode =>!prevMode)
    setArchive(false)
    setSaved(false)
    setShowNotes(false)
  }

  //////////////// news //////////////////
  const [showNotes,setShowNotes]=useState(false)

  const toggleShowingNotes =()=>{
    setShowNotes(prevMode =>!prevMode)
    setNews(false)
    setArchive(false)
    setSaved(false)
  }

  ////////////showNotes/////////////

  const [archive,setArchive]=useState(false)

  const toggleArchive =()=>{
    setArchive(prevMode=>!prevMode)
    setNews(false)
    setSaved(false)
    setShowNotes(false)
  }

  ////////////archive //////////////////
  const [saved,setSaved]=useState(false)

  const toggleSaved =()=>{
    setSaved(prevMode =>!prevMode)
    setShowNotes(false)
    setArchive(false)
    setNews(false)
  }
////////////saved///////////////

const [masstech,setMasstech]=useState(true)

const toggleMasstech =()=>{
  setMasstech(true)
  setVapor(false)
  setPlatinum(false)
  setCell(false)
}

///////////masstech///////////

const  [vapor,setVapor]=useState(false)

const toggleVaport =()=>{
  setVapor(true)
  setMasstech(false)
  setPlatinum(false)
  setCell(false)
}

const [cell,setCell]=useState(false)

const toggleCell=()=>{
  setCell(true)
  setVapor(false)
  setMasstech(false)
  setPlatinum(false)
}

const [platinum,setPlatinum]=useState(false)

const togglePlatinum =()=>{
  setPlatinum(true)
  setVapor(false)
  setMasstech(false)
  setCell(false)
}



  
  return(
    <div>
     

      <div onClick={toggleNews} className="showNews flex gap-2 items-center mt-12  cursor-pointer">
        <FeedIcon/>
      <h3 className=" font-semibold text-sm  mt-4 text-center md:text-start mb-4 w-fit">What is new</h3>
      </div>
       <div className="flex flex-col md:flex-row gap-4 justify-between mt-2">
       <div className="flex flex-col  gap-6 ">
        <motion.div
        variants={wrapperVariants}
        className="flex flex-col items-center md:items-start justify-start md:justify-start">
       
       <div className={`news-content ${news ? 'show' : 'hide'} gap-4`}>
        <motion.div
        variants={itemVariants}
        className={`flex pt-2 pl-2 pb-2 pr-2  ${bg} items-center rounded-xl gap-2`}>
        <svg
            style={{fill : darkMode ? "#FAFBF9":"#050604"}}
            viewBox="0 0 24 24"
            className=""
            fill="#FAFBF9"
            height="25px"
            width="35px"
            >
            <path d="M20 10c2 3-3 12-5 12s-2-1-3-1-1 1-3 1-7-9-5-12 5-3 7-2V5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5V3h2v5c2-1 5-1 7 2z" />
            </svg>
            <p style={{color :darkMode ? "#FAFBF9":"#050604"}} className="font-normal text-sm md:text-md ">New Healthy Diets added</p>
        </motion.div>
        <div className={`flex pt-2 pl-2 pb-2 ${bg} items-center rounded-xl gap-2`}>
        <svg
            style={{fill : darkMode ? "#FAFBF9":"#050604"}}
            viewBox="0 0 512 512"
            className=''
            fill="#FAFBF9"
            height="25px"
            width="35px"
            >
            <path d="M480 448h-12a4 4 0 01-4-4V273.51a4 4 0 00-5.24-3.86 104.92 104.92 0 01-28.32 4.78c-1.18 0-2.3.05-3.4.05a108.22 108.22 0 01-52.85-13.64 8.23 8.23 0 00-8 0 108.18 108.18 0 01-52.84 13.64 106.11 106.11 0 01-52.46-13.79 8.21 8.21 0 00-8.09 0 108.14 108.14 0 01-53.16 13.8 106.19 106.19 0 01-52.77-14 8.25 8.25 0 00-8.16 0 106.19 106.19 0 01-52.77 14c-1.09 0-2.19 0-3.37-.05h-.06a104.91 104.91 0 01-29.28-5.09 4 4 0 00-5.23 3.8V444a4 4 0 01-4 4H32.5c-8.64 0-16.1 6.64-16.48 15.28A16 16 0 0032 480h447.5c8.64 0 16.1-6.64 16.48-15.28A16 16 0 00480 448zm-256-68a4 4 0 01-4 4h-88a4 4 0 01-4-4v-64a12 12 0 0112-12h72a12 12 0 0112 12zm156 68h-72a4 4 0 01-4-4V316a12 12 0 0112-12h56a12 12 0 0112 12v128a4 4 0 01-4 4zM492.57 170.28l-42.92-98.49C438.41 47.62 412.74 32 384.25 32H127.7c-28.49 0-54.16 15.62-65.4 39.79l-42.92 98.49c-9 19.41 2.89 39.34 2.9 39.35l.28.45c.49.78 1.36 2 1.89 2.78.05.06.09.13.14.2l5 6.05a7.45 7.45 0 00.6.65l5 4.83.42.36a69.65 69.65 0 009.39 6.78v.05a74 74 0 0036 10.67h2.47a76.08 76.08 0 0051.89-20.31l.33-.31a7.94 7.94 0 0110.89 0l.33.31a77.3 77.3 0 00104.46 0 8 8 0 0110.87 0 77.31 77.31 0 00104.21.23 7.88 7.88 0 0110.71 0 76.81 76.81 0 0052.31 20.08h2.49a71.35 71.35 0 0035-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 00488 212.17l1.74-2.63q.26-.4.48-.84c1.66-3.38 10.56-20.76 2.35-38.42z" />
            </svg>
            <p style={{color :darkMode ? "#FAFBF9":"#050604"}} className="font-normal text-sm md:text-md ">New Suplements</p>
        </div>
        <div className={`flex pt-2 pl-2 pb-2 ${bg} items-center rounded-xl gap-2`}>
          <FiInfo style={{color:darkMode ? "#FAFBF9":"#050604",width:'35px',height:'25px'}}/>
          <p style={{color :darkMode ? "#FAFBF9":"#050604"}} className="font-normal text-sm md:text-md ">Information Edited</p>
        </div>


      </div>

      <div className="flex flex-col items-center md:items-start justify-center ">
     <div onClick={toggleShowingNotes} className="flex gap-2 cursor-pointer items-center"
     style={{marginTop:news?"15px":"15px"}}
     >
      <NewspaperIcon/>
     <h3 className="font-semibold text-sm mt-2 text-start mb-2">Notes</h3>
     </div>
      <div className={`news-content flex flex-col  ${showNotes ? 'show' : 'hide'} items-center md:items-start rounded-xl gap-4`}>
      <p className="font-light text-sm mb-4">Click on notes if you want to remove them</p>
         {notes.map((note, index) => (
        <p  style={{color :darkMode ? "#FAFBF9":"#050604", cursor: 'pointer',backgroundColor: selectedNoteIndex === index ? 'rgba(128, 128, 128,0.9)' : '',transition:'all 1s ease'}}
         className={`pt-2 pl-2 pb-2 pr-2 w-2/3 md:w-full ${bg} ${selectedNoteIndex === index ? 'bg-pink' : ''} items-center md:items-start rounded-xl`} key={index}
        onClick={() => handleSelectNote(index)}
        >{note}</p>
      ))}
       <div className="flex justify-center items-center w-full mt-8  ">
        <button  onClick={handleClearNote} className={`${buttonSwitch} p-2.5  text-center`}><DeleteIcon/> Clear</button>
      </div>
      </div>
      </div>
     
      <div className="flex flex-col items-center md:items-start justify-center mt-7 ">

        <div onClick={toggleArchive} className="flex gap-2 cursor-pointer items-center">
          <ArchiveIcon/>
          <h3 className="font-semibold text-sm mt-2 text-start mb-2">Archive</h3>
        </div>
        <div className={`news-content flex flex-col  ${archive ? 'show' : 'hide'} items-center md:items-start rounded-xl gap-4`}>
          <h1>
            1
          </h1>
        </div>

      </div>

      <div className="flex flex-col items-center md:items-start justify-center mt-7 ">

      <div onClick={toggleSaved} className="flex gap-2 cursor-pointer items-center">
        <BookmarkBorderIcon/>
        <h3 className="font-semibold text-sm mt-2 text-start mb-2">Saved</h3>
      </div>
      <div className={`news-content flex flex-col  ${saved ? 'show' : 'hide'} items-center md:items-start rounded-xl gap-4`}>
        <h1>
          1
        </h1>
      </div>

      </div>


        </motion.div>
     
        </div>
        <div className="flex flex-col -mt-0 md:-mt-32 items-center justify-center">
      <h3 className="font-semibold text-md md:text-xl mt-20 text-center md:text-start mb-4">Write Notes</h3>
      <div className="flex flex-col md:flex-row gap-5 items-center">
     <div className="flex gap-5 items-center">
     <Avatar  style={{width:50,height:50}} src={fileURL} />  
      <div  id="nickname" class={` ${inputSwitch} text-center  `}>
              <input value={note} onChange={handleNotesChange} type="text" placeholder="Keep in check your activities"   name="text" class="input2"/>
            </div>
     </div>
            <div className="flex mt-2 gap-2 items-center justify-center">
              <button onClick={ToggleNotes}  className={`${buttonSwitch} p-2.5 px-12 md:p-2.5 text-center`}> <SendIcon/> Post</button>
            </div>
      </div>
      <div className="empty"></div>
     <div className="flex flex-col items-center justify-center">
     <h1 className="text-center text-xl md:text-3xl font-extrabold">See our newest arivals</h1>
     <div className="llojet-newest flex gap-4 mt-4 overflow-x-auto whitespace-nowrap">
     <button
          onClick={toggleMasstech}
          style={{
            fontWeight: masstech ? "700" : "",
            border: masstech ? "2px solid" : "1px solid"
          }}
          id="smallerbtn"
          className={`${buttonSwitch} p-3 whitespace-nowrap`}
        >
          MASSTECH
        </button>
        <button
          onClick={toggleVaport}
          style={{
            fontWeight: vapor ? "700" : "",
            border: vapor ? "2px solid" : "1px solid"
          }}
          id="smallerbtn"
          className={`${buttonSwitch} p-3 whitespace-nowrap`}
        >
          VAPORX5
        </button>
        <button
          onClick={toggleCell}
          style={{
            fontWeight: cell ? "700" : "",
            border: cell ? "2px solid" : "1px solid"
          }}
          id="smallerbtn"
          className={`${buttonSwitch} p-3 whitespace-nowrap`}
        >
          CELLTECH
        </button>
        <button
          onClick={togglePlatinum}
          style={{
            fontWeight: platinum ? "700" : "",
            border: platinum ? "2px solid" : "1px solid"
          }}
          id="smallerbtn"
          className={`${buttonSwitch} p-3 whitespace-nowrap`}
        >
          PLATINUM
        </button>
     </div>
     <div className="flex mt-8 justify-center"
     style={{borderRadius:'20%'}}
     >
       <div className="flex flex-col md:flex-row items-center justify-center ">
       <div
          style={{
            
            
          }}
          className="lloji-supleme flex items-center justify-center z-50 "
        >
          <div className={`image-container ${masstech ? 'show' : 'hide'} -ml-3`}>
            {masstech && <img src={masstechu} width="300px" alt="Masstech" />}
          </div>
          <div className={`image-container ${vapor ? 'show' : 'hide'}`}>
            {vapor && <img src={vaportixx} width="300px" alt="Vapor" />}
          </div>
          <div className={`image-container ${cell ? 'show' : 'hide'}`}>
            {cell && <img src={cellmax} width="300px" alt="Cell" />}
          </div>
          <div className={`image-container ${platinum ? 'show' : 'hide'}`}>
            {platinum && <img src={pllatinumi} width="300px" alt="Platinum" />}
          </div>
        </div>
        <div
        style={{width:"33%"}}
        className="description-supleme flex flex-col items-center justify-center">
          <div className="contenti0so ml-4 flex flex-col gap-2 mt-4 md:mt-0">
          <div className={`text-container ${masstech ? 'show1' : 'hide1'}  `}>
            {masstech && (
                <>
                  <h1 className="text-lg font-bold text-center md:text-start -mt-0 mb-2">Masstech</h1>
                  <p className="text-md font-medium text-center md:text-start ">
                    Mass gainer has creatine for enhanced muscle size & strength
                  </p>
                </>
              )}
            </div>
            <div className={`text-container ${vapor ? 'show1' : 'hide1'} "`}>
            {vapor && (
                <>
                  <h1 className="text-lg font-bold text-center md:text-start -mt-2 mb-2">VaporX5</h1>
                  <p className="text-md font-medium text-center md:text-start">
                  Helps increase energy,focus and endurance for toughest training
                  </p>
                </>
              )}
            </div>
            <div className={`text-container ${cell ? 'show1' : 'hide1'}"`}>
            {cell && (
                <>
                  <h1 className="text-lg font-bold text-center md:text-start -mt-3 mb-2">Celltech</h1>
                  <p className="text-md font-medium text-center md:text-start mb-3.5">
                  Helps increase energy,focus and endurance for toughest training
                  </p>
                </>
              )}
            </div>
            <div className={`text-container ${platinum ? 'show1' : 'hide1'} -mt-1.5`}>
            {platinum && (
                <>
                  <h1 className="text-lg font-bold text-center md:text-start -mt-4 mb-2">Platinum</h1>
                  <p className="text-md font-medium text-center md:text-start mb-3 ">
                  Helps increase energy,focus and endurance for toughest training
                  </p>
                </>
              )}
            </div>
            <div className="flex gap-2 mt-4  justify-center md:justify-stretch">
              <button className={`${buttonSwitch} p-2.5 whitespace-nowrap`}>Learn More</button>
              <button className={`${buttonSwitch2} p-1 whitespace-nowrap transition-colors`}><BookmarkBorderIcon sx={{color:darkMode?"#FAFBF9":"#050604"}}/></button>
            </div>
          </div>
        </div>
       </div>
      </div>
     </div>
      </div>
      
       </div>
       {fillMessage && 
      <Snackbar
      open={open1}
      autoHideDuration={6000}
      onClose={handleClose1}
      message="Note archived"
      
    >
        <Alert
      severity="error"
      variant="filled"
      sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
      >
      <p>Fill the empty field </p>
      </Alert>
        </Snackbar>
      }
      {filledNotes && 
      <Snackbar
      open={open1}
      autoHideDuration={6000}
      onClose={handleClose1}
      message="Note archived"
      
    >
        <Alert
      severity="success"
      variant="filled"
      sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
      >
      <p>Notes added successfully </p>
      </Alert>
        </Snackbar>
      }
      {maxFilled &&
       <Snackbar
       open={open1}
       autoHideDuration={6000}
       onClose={handleClose1}
       message="Note archived"
       
     >
         <Alert
       severity="error"
       variant="filled"
       sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
       >
       <p>Maximum capacity for Notes is 3 </p>
       </Alert>
         </Snackbar>
      }
    </div>
  )
 }


export default Main;