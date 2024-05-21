import { useState ,useRef,useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import Cookies from 'js-cookie';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { motion,AnimatePresence,MotionConfig, color } from "framer-motion";
import { useDarkMode } from "../DarkModeContext";
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
import { useSuccessMessage } from '../SuccessMessageContext';
import { FiLogOut } from "react-icons/fi";
import Alert from '@mui/material/Alert';
import { useAvatarImage } from '../AvatarImageContext';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { CountryDropdown } from 'react-country-region-selector';
import { Outlet, Link, useNavigate } from 'react-router-dom';

import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiInfo,
  FiHome 
} from "react-icons/fi";
import { Dispatch, SetStateAction} from "react";
import { IconType } from "react-icons";

const Info = () => {
    const [nickname, setNickname] = useState(Cookies.get('nickname') || '');
    const avatarURL = Cookies.get('avatar');
    const { darkMode } = useDarkMode()
  const [fileURL, setFileURL] = useState('');
  const [edit, setEdit] = useState(false);
  const [xs,setXs]=useState(false)
  const [ info ,setInfo]=useState(true)

  useEffect(() => {
    const savedFileURL = localStorage.getItem('selectedImageURL');
    if (savedFileURL) {
      setFileURL(savedFileURL); // Set the file URL state with the saved image URL
    }
  }, []);

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
    setXs(false)
    setEdit(false)
  }
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
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl z-50 absolute top-[120%] left-[50%] w-46 -ml-0 md:-ml-8 overflow-hidden"
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
       <div className="mt-8 container mx-auto px-4">
       {xs && 
        <MainIntro/>
       }
       </div>
        <div className="container mt-24 mx-auto px-4">
        {edit &&
          <EditProfile/>
        }
        </div>
        <div className="container mt-24 mx-auto px-4">
        {info &&
          <Information/>
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
                    placeholder="Nickname" 
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
  
    return(
      <div>
        <div className={`${theme}`}>
          <div className="empty"></div>
          <h1 id="hioffer" className={`font-extrabold text-2xl md:text-6xl text-center ${themeText}`}>Get your Offers now</h1>
          <div className="empty"></div>
        </div>
        <p>what is new</p>
      </div>
    )
   }
   
const Information = ()=>{
    return(
        <div>hello</div>
    )
}


export default Info;