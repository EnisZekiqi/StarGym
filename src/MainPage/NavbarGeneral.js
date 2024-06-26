import { useState ,useRef,useEffect} from "react";
import Avatar from '@mui/material/Avatar';
import Cookies from 'js-cookie';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { motion,AnimatePresence,MotionConfig, color } from "framer-motion";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IoIosNotifications } from "react-icons/io";
import { useDarkMode } from "../DarkModeContext";
import { useAvatarImage } from '../AvatarImageContext';
import MenuIcon from '@mui/icons-material/Menu';
import CollectionsIcon from '@mui/icons-material/Collections';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { CountryDropdown } from 'react-country-region-selector';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import vaportixx from '../images/vaportixx.webp'
import cellmax from '../images/cellmax.webp'
import FeedIcon from '@mui/icons-material/Feed';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import masstechu from '../images/masstech.webp'
import pllatinumi from '../images/pllatinumi.webp'
import PeopleIcon from '@mui/icons-material/People';
import Folder2 from '../images/Folder (1).svg'
import Task from '../images/Task list.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import avatar1 from '../AvatarImages/images 9.jpg'
import avatar2 from '../AvatarImages/images 12.jpg'
import avatar3 from '../AvatarImages/images 3.jpg'
import avatar4 from '../AvatarImages/images 5.jpg'
import avatar5 from '../AvatarImages/images8.jpg'
import ShopCart from '../images/Shopping.svg'
import ClearIcon from '@mui/icons-material/Clear';
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
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Nofriends from '../images/World travel.svg'

const NavbarGeneral = () => {

    const [nickname, setNickname] = useState(Cookies.get('nickname') || '');
    const avatarURL = Cookies.get('avatar');
    const { darkMode } = useDarkMode()
  const [fileURL, setFileURL] = useState('');
  const bg =darkMode ? "bg-rose" :"bg-pink"
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
        <div>
  <div
      style={{
        backgroundColor: darkMode ? "#FAFBF9" : "#050604",
        color: darkMode ? "#131A0F" : "#E9F0E5"
      }}
      className="main -mb-4 md:-mb-0"
    >
     <div className="fixed h-fit top-0 left-0 right-0"
     style={{zIndex:101}}
     >
     <div className="flex justify-between"
     style={{backgroundColor:darkMode ? "#FAFBF9":"#050604"}}
     >
        <div className="fonkJr flex gap-6 items-center">
          <h1 className=" font-bold ml-4 text-lg md:text-3xl mt-4 mb-4">StarGym</h1>
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
       
        </div>
      </div>
     </div>
     <div className="block md:hidden">
     {xs && 
     <div>
      <MainIntroSmallDisplay/>
     </div>
     }
     </div>
      <div className="container mt-16 mx-auto px-4">
      {edit &&
        <EditProfile/>
      }
      </div>
    </div>
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
    const buttonSwitchSm = darkMode ? "btnsm":"btnsm2"
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
      setDefaultShowingNotes(false)
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
  
   
  
    const [news,setNews]=useState(false)
  
    const toggleNews=()=>{
      setNews(prevMode =>!prevMode)
      setArchive(false)
      setSaved(false)
      setShowNotes(false)
      setShopingCart(false)
    }
  
    //////////////// news //////////////////
    const [showNotes,setShowNotes]=useState(false)
  
    const toggleShowingNotes =()=>{
      setShowNotes(prevMode =>!prevMode)
      setNews(false)
      setArchive(false)
      setSaved(false)
      setShopingCart(false)
    }
  
    ////////////showNotes/////////////
  
    const [archive,setArchive]=useState(false)
  
    const toggleArchive =()=>{
        setArchive(prevMode => !prevMode);
      setNews(false)
      setSaved(false)
      setShowNotes(false)
      setShopingCart(false)
    }
  
    ////////////archive //////////////////
    const [saved,setSaved]=useState(false)
  
    const toggleSaved =()=>{
      setSaved(prevMode =>!prevMode)
      setShowNotes(false)
      setArchive(false)
      setNews(false)
      setShopingCart(false)
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
  
  const [defaultShowingSaved,setDefaulTShowingSaved] =useState(true) //////// nothing saved yet content ///////////
  const [defaultShowingNotes,setDefaultShowingNotes]=useState(true) ///////// No notes yet content ////////////
  
  const [savedMessage,setSavedMessage] =useState(false)///////success noteMessage//////
  const [already,setAlready]=useState(false)//////// alreadyshowed message //////
  
  const [savedSupplements, setSavedSupplements] = useState([]);
  
  
  
  
  const [selectedSupplement, setSelectedSupplement] = useState(null);
  
  const removeSavedSupplement = (supplement) => {
    const updatedSupplements = savedSupplements.filter(s => s.name !== supplement.name);
    setSavedSupplements(updatedSupplements);
    Cookies.set("savedSupplements", JSON.stringify(updatedSupplements), { expires: 365 });
    const newSupplements = savedSupplements.filter(s => s.name !== supplement.name);
      setSavedSupplements(newSupplements);
      setSelectedSupplement(null); // 
    setSelectedSupplement(null); // Reset the selected supplement
    if (updatedSupplements.length === 0) {
      setDefaulTShowingSaved(true);
    }
  };
  
  useEffect(() => {
    setDefaultShowingNotes(notes.length === 0);
  }, [notes]);
  
  // Function to handle adding a new note
  const addNote = (note) => {
    setNotes([...notes, note]);
  };
  
  // Function to handle removing a note
  const removeNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };
  
  // Function to handle clearing all notes
  const handleClearNote = () => { 
    if (selectedNoteIndex !== null) {
       const newNotes = notes.filter((_, index) => index !== selectedNoteIndex); 
       setNotes(newNotes);
        setSelectedNoteIndex(null);
         Cookies.set('notes', newNotes.join('\n'), { expires: 365 });
        }}
     // Check if the newNotes array is empty if (newNotes.length === 0) { setDefaultShowingNotes(true); } } };
    
   
     
    // Function to handle adding a new supplement
    const addSupplement = (supplement) => {
      setSavedSupplements([...savedSupplements, supplement]);
    };
  
    // Function to handle removing a saved supplement
    
    const supplement = {
      name: "Supplement Name",
      image: "path/to/image.jpg",
      learnMoreUrl: "/learnMore"
    };
  
  
  const [shopingCart,setShopingCart]=useState(false)
  
  const toggleShoppingCart = ()=>{
    setShopingCart(!shopingCart)
    setShowNotes(false)
    setArchive(false)
    setSaved(false)
    setNews(false)
    if(setShopingCart === true){
      setNotificationCart(false)
    }else{
      setNotificationCart(true)
    }
  }
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; ///// checkboxes favourite and saved
  
  
  
  
  const supplementsData = [
    {
      image: avatar1,
      name: 'Cindy Baker',
      description: 'Eating apples may contribute to a good night\'s sleep. I suggest making a fruit salad with a variety of fruits such as apples, grapefruit, and bananas to incorporate more vitamin C before bedtime.',
      gender: 'Male',
      information: 'Just Studying Biology',
      location:'Nebraska'
    },
    
    {
      image: avatar2,
      name: 'John Doe',
      description: 'Consuming a balanced diet with a mix of proteins, fats, and carbohydrates can significantly improve your overall health and energy levels throughout the day.',
      gender: 'Male',
      information: 'Fitness Trainer',
      location:'Germany'
    },
    {
      image: avatar3,
      name: 'Jimmy Josh',
      description: 'So while your diet plays a major role in dropping pounds, exercise can help too. In general, try to exercise at least 4 or 5 days a week if you want to see weight loss results in both the short and long term',
      gender: 'Male',
      information: 'Helping everyone lol',
      location:'Albania'
    },
    {
      image: avatar4,
      name: 'Baily Hendreson',
      description: 'Supplements that may help reduce body fat mass include protein, caffeine and green tea extract',
      gender: 'Male',
      information: 'Supplement Master',
      location:'Macedonia'
    },
    {
      image: avatar5,
      name: 'Angela Hollow',
      description: 'Vitamin D has several important functions. Perhaps the most vital are regulating the absorption of calcium and phosphorus and facilitating healthy immune system function',
      gender: 'Female',
      information: 'Sometimes im a doctor, sometimes a teacher',
       location:'Italy'
    },
    // Add more supplements as needed
  ];
  
  const supplementInfo = [
    {
      id: 'Masstech',
      name: 'Masstech',
      description: 'Mass gainer has creatine for enhanced muscle size & strength',
      image: masstechu,
      show: masstech,
      route: '/masstech', // Route for Masstech supplement
    },
    {
      id: 'VaporX5',
      name: 'VaporX5',
      description: 'Helps increase energy, focus, and endurance for toughest training',
      image: vaportixx,
      show: vapor,
      route: '/vaporx5', // Route for VaporX5 supplement
    },
    {
      id: 'Celltech',
      name: 'Celltech',
      description: 'Helps increase energy, focus, and endurance for toughest training',
      image: cellmax,
      show: cell,
      route: '/celltech', // Route for Celltech supplement
    },
    {
      id: 'Platinum',
      name: 'Platinum',
      description: 'Helps increase energy, focus, and endurance for toughest training',
      image: pllatinumi,
      show: platinum,
      route: '/platinum', // Route for Platinum supplement
    }
  ];
  
  
  const [favorites, setFavorites] = useState({});
    const [bookmarks, setBookmarks] = useState({});
  
    useEffect(() => {
      const storedFavorites = Cookies.get("favorites")
        ? JSON.parse(Cookies.get("favorites"))
        : {};
      const storedBookmarks = Cookies.get("bookmarks")
        ? JSON.parse(Cookies.get("bookmarks"))
        : {};
  
      console.log("Loaded favorites from cookies:", storedFavorites);
      console.log("Loaded bookmarks from cookies:", storedBookmarks);
  
      setFavorites(storedFavorites);
      setBookmarks(storedBookmarks);
    }, []);
  
    const handleFavoriteChange = (index) => {
      const updatedFavorites = { ...favorites, [index]: !favorites[index] };
      setFavorites(updatedFavorites);
      Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 365 });
      console.log("Updated favorites:", updatedFavorites);
    };
  
    const handleBookmarkChange = (index) => {
      const updatedBookmarks = { ...bookmarks, [index]: !bookmarks[index] };
      setBookmarks(updatedBookmarks);
      Cookies.set("bookmarks", JSON.stringify(updatedBookmarks), { expires: 365 });
      console.log("Updated bookmarks:", updatedBookmarks);
  
      const saved = supplementsData.filter((_, i) => updatedBookmarks[i]);
      setSavedSupplements(saved);
      Cookies.set("savedSupplements", JSON.stringify(saved), { expires: 365 });
      console.log("Updated saved supplements:", saved);
    };
  
  /////////////////////////Modal for user Advices ////////////////
  
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = (supplement,index) => {
    setSelectedSupplement(supplement);
    setSelectedIndex(index);
    setTimeout(() => {
      setModalOpen(true);
    }, 1000);
    setSaved(false)
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setSelectedSupplement(null);
  };
  
  
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '55%',
    backgroundColor:  '#FAFBF9' ,
    boxShadow: 24,
    padding: '16px',
    borderRadius: '20px',
  };
  const modalStyle2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    height:'75%',
    backgroundColor: darkMode ? '#FAFBF9' : '#050604',
    boxShadow: 24,
    padding: '16px',
    borderRadius: '20px',
  };
  const modalStyleJr = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    backgroundColor:  '#FAFBF9' ,
    boxShadow: 24,
    padding: '16px',
    borderRadius: '20px',
  };
  
  /////////////////////////Modal for user Advices ////////////////
  
  
  
  /////////////////////////Modal for Supplements ////////////////
  
  const [modalSupp,setModalSupp]=useState(false)
  
  const openModalSupp = (supplement)=>{
    setSelectedSupplementInfo(supplement);
    setTimeout(() => {
      setModalSupp(true);
    }, 1000);
    setSaved(false)
  }
  
  const closeModalSupp = () => {
    setModalSupp(false);
    setSelectedSupplementInfo(null);
  };
  
  
  const [selectedSupplementInfo,setSelectedSupplementInfo]=useState(null)
  
  /////////////////////////Modal for Supplements ////////////////
  
  
  const [selectedIndex,setSelectedIndex]=useState(null)
  
  const getIconStyle = (isChecked) => ({
    color: isChecked ? (darkMode ? '#475E36' : '#B2C9A1') : '',
  });
  
   const navigate = useNavigate();
  
   const handleRedirect = (supplement) => {
      navigate(`/main/${supplement.id}`);
    };
  
  
    const [modalProfileOpen, setModalProfileOpen] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);
  
    const openModalProfileHandler = (supplement) => {
      setSelectedFriend(supplement);
      setIsFriendView(false); // This is the original view
      setModalProfileOpen(true);
    };
  
    const closeModalProfileHandler = () => {
      setSelectedFriend(null);
      setModalProfileOpen(false);
    };
  
    const handleAddFriend = () => {
      if (selectedFriend) {
        console.log(`Adding ${selectedFriend.name} as a friend`);
    
        // Retrieve existing friends from cookies
        const friendsCookie = document.cookie.split('; ').find(row => row.startsWith('friends='));
        const friends = friendsCookie ? JSON.parse(decodeURIComponent(friendsCookie.split('=')[1])) : [];
    
        // Check if the friend is already added
        const isFriendAlreadyAdded = friends.some(friend => friend.name === selectedFriend.name);
    
        if (isFriendAlreadyAdded) {
          setMessageAlreadyFriend(true);
        } else {
          // Add new friend to the list
          const updatedFriends = [...friends, selectedFriend];
    
          // Save updated friends list to cookies
          document.cookie = `friends=${encodeURIComponent(JSON.stringify(updatedFriends))}; max-age=${365 * 24 * 60 * 60};`;
    
          // Update local state
          setFriends(updatedFriends);
          setMessageAddingFriend(true);
        }
      }
    };
  
    
    
  
    const [friends, setFriends] = useState([]);
  
    useEffect(() => {
      // Retrieve friends from cookies when component mounts
      const friendsCookie = document.cookie.split('; ').find(row => row.startsWith('friends='));
      if (friendsCookie) {
        const savedFriends = JSON.parse(decodeURIComponent(friendsCookie.split('=')[1]));
        setFriends(savedFriends);
      }
    }, []);
  
  
  const [messageAddingFriend,setMessageAddingFriend]=useState(false) ///// added friend changes
  const [messageRemovingFriend,setMessageRemovingFriend]=useState(false) //// removing friend changes
  const [messageAlreadyFriend,setMessageAlreadyFriend]=useState(false) 
  const [isFriendView, setIsFriendView] = useState(false);
  
  const openFriendProfileHandler = (friend) => {
    setSelectedFriend(friend);
    setIsFriendView(true); // This is the friends view
    setModalProfileOpen(true);
  };
  
  const handleRemoveFriend = (friendToRemove) => {
    const updatedFriends = friends.filter(friend => friend.name !== friendToRemove.name);
  
    // Save updated friends list to cookies
    document.cookie = `friends=${encodeURIComponent(JSON.stringify(updatedFriends))}; max-age=${365 * 24 * 60 * 60};`;
  
    // Update local state
    setFriends(updatedFriends);
    setMessageRemovingFriend(true)
  };
  
  
  /////// Saved Product into cart ///////////
  
  const [cartItem, setCartItem] = useState(null);
  const [notificationCart,setNotificationCart]=useState(false)
  
  useEffect(() => {
    const cartItemFromStorage = JSON.parse(localStorage.getItem('cartItem'));
    const cartItemFromCookies = JSON.parse(Cookies.get('cartItem') || '{}');
  
    if (cartItemFromStorage) {
      setCartItem(cartItemFromStorage);
      setNotificationCart(true);
    } else if (cartItemFromCookies) {
      setCartItem(cartItemFromCookies);
    }
  }, []);
  
  const handleClearCart = () => {
    localStorage.removeItem('cartItem');
    Cookies.remove('cartItem');
    setCartItem(null);
    setNotificationCart(false);
  };
  
    return(
     <div>
        <div className="flex">
        <div className="fixed w-1/4 h-full mt-16 container mx-auto px-4 "
        style={{zIndex:200}}
        >
          <div onClick={toggleNews} className="showNews flex gap-2 items-center mt-20  -mb-4 cursor-pointer">
            <FeedIcon />
            <h3 className="font-medium text-sm mt-4 text-center md:text-start mb-5 w-1/2">News Feed</h3>
          </div>
          <div className={`news-content ${news ? 'show' : 'hide'} gap-4`}>
            <motion.div
              variants={{}}
              className={`flex pt-2 pl-2 pb-2 pr-2 ${bg} items-center rounded-xl gap-2 mt-4`}
            >
              <svg
                style={{ fill: darkMode ? "#FAFBF9" : "#050604" }}
                viewBox="0 0 24 24"
                height="25px"
                width="35px"
              >
                <path d="M20 10c2 3-3 12-5 12s-2-1-3-1-1 1-3 1-7-9-5-12 5-3 7-2V5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5V3h2v5c2-1 5-1 7 2z" />
              </svg>
              <p style={{ color: darkMode ? "#FAFBF9" : "#050604" }} className="font-normal text-sm md:text-md">
                New Healthy Diets added
              </p>
            </motion.div>
            <a href="#arrival">
              <div className={`flex pt-2 pl-2 pb-2 ${bg} items-center rounded-xl gap-2`}>
                <svg
                  style={{ fill: darkMode ? "#FAFBF9" : "#050604" }}
                  viewBox="0 0 512 512"
                  height="25px"
                  width="35px"
                >
                  <path d="M480 448h-12a4 4 0 01-4-4V273.51a4 4 0 00-5.24-3.86 104.92 104.92 0 01-28.32 4.78c-1.18 0-2.3.05-3.4.05a108.22 108.22 0 01-52.85-13.64 8.23 8.23 0 00-8 0 108.18 108.18 0 01-52.84 13.64 106.11 106.11 0 01-52.46-13.79 8.21 8.21 0 00-8.09 0 108.14 108.14 0 01-53.16 13.8 106.19 106.19 0 01-52.77-14 8.25 8.25 0 00-8.16 0 106.19 106.19 0 01-52.77 14c-1.09 0-2.19 0-3.37-.05h-.06a104.91 104.91 0 01-29.28-5.09 4 4 0 00-5.23 3.8V444a4 4 0 01-4 4H32.5c-8.64 0-16.1 6.64-16.48 15.28A16 16 0 0032 480h447.5c8.64 0 16.1-6.64 16.48-15.28A16 16 0 00480 448zm-256-68a4 4 0 01-4 4h-88a4 4 0 01-4-4v-64a12 12 0 0112-12h72a12 12 0 0112 12zm156 68h-72a4 4 0 01-4-4V316a12 12 0 0112-12h56a12 12 0 0112 12v128a4 4 0 01-4 4zM492.57 170.28l-42.92-98.49C438.41 47.62 412.74 32 384.25 32H127.7c-28.49 0-54.16 15.62-65.4 39.79l-42.92 98.49c-9 19.41 2.89 39.34 2.9 39.35l.28.45c.49.78 1.36 2 1.89 2.78.05.06.09.13.14.2l5 6.05a7.45 7.45 0 00.6.65l5 4.83.42.36a69.65 69.65 0 009.39 6.78v.05a74 74 0 0036 10.67h2.47a76.08 76.08 0 0051.89-20.31l.33-.31a7.94 7.94 0 0110.89 0l.33.31a77.3 77.3 0 00104.46 0 8 8 0 0110.87 0 77.31 77.31 0 00104.21.23 7.88 7.88 0 0110.71 0 76.81 76.81 0 0052.31 20.08h2.49a71.35 71.35 0 0035-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 00488 212.17l1.74-2.63q.26-.4.48-.84c1.66-3.38 10.56-20.76 2.35-38.42z" />
                </svg>
                <p style={{ color: darkMode ? "#FAFBF9" : "#050604" }} className="font-normal text-sm md:text-md">
                  New Supplements
                </p>
              </div>
            </a>
            <a href="#advices">
              <div className={`flex pt-2 pl-2 pb-2 ${bg} items-center rounded-xl gap-2`}>
                <FiInfo style={{ color: darkMode ? "#FAFBF9" : "#050604", width: '35px', height: '25px' }} />
                <p style={{ color: darkMode ? "#FAFBF9" : "#050604" }} className="font-normal text-sm md:text-md">
                  New Advices
                </p>
              </div>
            </a>
          </div>
          <div onClick={toggleShowingNotes} className="flex gap-2 cursor-pointer items-center" style={{ marginTop: news ? "15px" : "15px" }}>
            <NewspaperIcon />
            <h3 className="font-medium text-sm mt-2 text-start mb-2">Notes</h3>
          </div>
          <div className={`news-content flex flex-col ${showNotes ? 'show' : 'hide'} items-center md:items-start rounded-xl gap-4`}>
            {defaultShowingNotes ? (
              <div className="flex items-center justify-center mt-4">
                <div>
                  <img src={Task} width="200px" className="mt-2" alt="No items yet" />
                  <p className="text-center mt-2">No Notes yet</p>
                </div>
              </div>
            ) : (
              <>
                <p className="font-light text-sm mb-4 mt-4">Click on notes if you want to remove them</p>
                {notes.map((note, index) => (
                  <p
                    style={{
                      color: darkMode ? "#FAFBF9" : "#050604",
                      cursor: 'pointer',
                      backgroundColor: selectedNoteIndex === index ? 'rgba(128, 128, 128,0.9)' : '',
                      transition: 'all 1s ease'
                    }}
                    className={`pt-2 pl-2 pb-2 pr-2 w-2/3 md:w-full ${bg} ${selectedNoteIndex === index ? 'bg-pink' : ''} items-center md:items-start rounded-xl`}
                    key={index}
                    onClick={() => handleSelectNote(index)}
                  >
                    {note}
                  </p>
                ))}
                <div className="flex justify-center items-center w-full mt-8">
                  <button onClick={handleClearNote} className={`${buttonSwitch} p-2.5 text-center`}>
                    <DeleteIcon /> Clear
                  </button>
                </div>
              </>
            )}
          </div>
          <div onClick={toggleArchive} className="flex gap-2 cursor-pointer items-center mt-4">
            <PeopleIcon />
            <h3 className="font-medium text-sm mt-2 text-start mb-2">Friends</h3>
          </div>
          <div className={`news-content flex flex-col ${archive ? 'show' : 'hide'} items-center md:items-start rounded-xl gap-4`}>
          {friends.length > 0 ? (
            friends.map((friend, index) => (
              <div
                onClick={() => openFriendProfileHandler(friend)}
                key={index}
                className="flex gap-2 items-center p-4 cursor-pointer"
              >
                <Avatar alt={friend.name} src={friend.image} />
                <div>
                  <p className="font-bold text-xl">{friend.name}</p>
                  <p className="font-normal text-md">{friend.information}</p>
                </div>
              </div>
            ))
          ) : (
           <div className="flex flex-col">
              <img src={Nofriends} width="200px" className="mt-2" alt="" />
            <p className="text-center mt-2">No friends added yet</p>
           </div>
          )}
          </div>
          <div onClick={toggleSaved} className="flex gap-2 cursor-pointer items-center mt-4">
            <BookmarkIcon />
            <h3 className="font-medium text-sm mt-2 text-start mb-2">Saved</h3>
          </div>
          <div className={`news-content flex flex-col ${saved ? 'show' : 'hide'} items-center md:items-start rounded-xl gap-4 overflow-x-auto`}>
          {savedSupplements.length === 0 ? (
          <div className="flex items-center justify-center mt-4">
            <div>
              <img src={Folder2} width="200px" className="mt-2" alt="No items yet" /> {/* Update with your actual image path */}
              <p className="text-center mt-2">Nothing saved yet</p>
            </div>
          </div>
        ) : (
          <>
            <p className="font-light text-center text-sm mb-4 mt-4">Check what you saved here</p>
            <div className="flex flex-col gap-4 mt-4 items-start justify-start overflow-x-auto whitespace-nowrap">
              {savedSupplements.map((supplement, index) => (
                <div
                  key={index}
                  className={`flex flex-col h-36 items-center justify-center my-2 ${
                    selectedSupplement && selectedSupplement.name === supplement.name ? (darkMode ? '' : '') : ''
                  }`}
                >
                  <div
                 onClick={() => {
                  if (supplement.type === 'supplement') {
                    openModalSupp(supplement,index);
                  } else {
                  openModal(supplement, index);
                  }
                  }}
                  >
                  <img
                    src={supplement.image}
                    alt={supplement.name}
                    className="w-16 h-16 rounded-full mr-2 cursor-pointer"
                    onClick={() => setSelectedSupplement(supplement)}
                  />
                  <span className="text-center text-bold text-sm w-1/2">{supplement.type === 'supplement' ? 'View Supplement' : `${supplement.name}'s advice` }</span>
                  </div>
                
                </div>
              ))}
            </div>
           
          </>
        )}
        <Modal
          open={modalOpen}
          onClose={closeModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={`modal-content  ${darkMode ? 'dark-modal' : 'light-modal'}`}>
          {selectedSupplement  && selectedIndex !== null &&  (
              <>
                <div className="flex gap-2 items-center p-4">
                  <Avatar alt={selectedSupplement.name} src={selectedSupplement.image} />
                  <p className="font-medium text-sm">{selectedSupplement.name}</p>
                </div>
                <div className="description-newsfeed">
                  <p className="font-normal text-md pl-2 pb-4 pt-1 pr-2">{selectedSupplement.description}</p>
                </div>
                <div className="rate-newsfeed -mt-4">
                  <div className="flex gap-2">
                    <Checkbox
                      sx={{ color: darkMode ? '' : 'rgba(5, 6, 4,0.6)' }}
                      icon={<FavoriteBorder style={getIconStyle(favorites[selectedIndex])} />}
                      checkedIcon={<Favorite style={getIconStyle(favorites[selectedIndex])} />}
                      checked={favorites[selectedIndex] || false}
                      onChange={() => handleFavoriteChange(selectedIndex)}
                    />
                    <Checkbox
                      sx={{ color: darkMode ? '' : 'rgba(5, 6, 4,0.6)' }}
                      icon={<BookmarkBorderIcon style={getIconStyle(bookmarks[selectedIndex])} />}
                      checkedIcon={<BookmarkIcon style={getIconStyle(bookmarks[selectedIndex])} />}
                      checked={bookmarks[selectedIndex] || false}
                      onChange={() => handleBookmarkChange(selectedIndex)}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </Modal>
        
        <Modal
          open={modalProfileOpen}
          onClose={closeModalProfileHandler}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyleJr} className={`modal-content ${darkMode ? 'dark-modal' : 'light-modal'}`}>
            {selectedFriend && (
              <>
                <div className="flex gap-2 items-center p-4">
                  <Avatar sx={{width:'80px',height:'80px'}} alt={selectedFriend.name} src={selectedFriend.image} />
                  <p className="font-bold text-xl">{selectedFriend.name}</p>
                </div>
                <div className="description-newsfeed -mt-3">
                  <p className="font-normal text-md pl-2 pb-4 pt-1 pr-2">
                  {selectedFriend.information}<br/>
                    <div className="flex gap-2 items-center mt-2">
                    {selectedFriend.gender === 'Male' ? <MaleIcon /> : <FemaleIcon />}<br />
                    <p className="font-bold">{selectedFriend.location}</p>
                    </div>
                  </p>
                </div>
                <div className="rate-newsfeed -mt-5">
                <div className="flex gap-2 justify-end items-end">
                    {!isFriendView && (
                      <button onClick={handleAddFriend}>{messageAddingFriend ? "Added Friend":"Add Friend"}</button>
                    )}
                    {isFriendView && (
                      <button onClick={() => handleRemoveFriend(selectedFriend)}>{messageRemovingFriend ? "Friend Removed":"Remove Friend"}</button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </Modal>
          </div>
          <div onClick={toggleShoppingCart} className="flex gap-2 cursor-pointer items-center mt-4" style={{ marginTop: shopingCart ? "15px" : "15px" }}>
            <div>
            {notificationCart && <span class=" absolute inline-flex h-2 w-2 rounded-full bg-emerald opacity-100"></span>}
            <ShoppingCartIcon />
            </div>
            <h3 className="font-medium text-sm mt-2 text-start mb-2">Cart</h3>
          </div>
          <div className={`news-content flex flex-col ${shopingCart ? 'show' : 'hide'} items-center md:items-start rounded-xl gap-4`}>
          {cartItem ? (
          <>
            <div
        className="flex gap-2 items-center p-4 cursor-pointer"
          >
         <Avatar sx={{width:'50px',height:'50px',marginTop:-3}} src={cartItem.image} alt={cartItem.name} />
           <div className="flex flex-col items-center">
           <div>
           <p className="font-bold text-xl">{cartItem.name}</p>
           <div className="font-normal text-md flex gap-4">
           <p> {cartItem.flavor}</p>/
           <p>{cartItem.weight}</p>
           </div>
           </div>
           <p className="font-semibold text-center" >{cartItem.price}</p>
            </div>
        </div>
        <button  onClick={handleClearCart}><ClearIcon/></button>
          </>
        ) : (
          <div className="flex items-center justify-center mt-4"
          style={{backgroundColor :darkMode ? "#FAFBF9":"#050604"}}
          >
            <div>
              <img src={ShopCart} width="200px" className="mt-2" alt="No items yet" />
              <p className="text-center mt-2">No items in the cart yet</p>
            </div>
          </div>
        )}
          </div>
         <div className="flex gap-2 cursor-pointer mt-4 items-center">
         <svg
              style={{fill : darkMode ? "#050604":"#FAFBF9"}}
              viewBox="0 0 24 24"
              className="mt-3"
              fill="#FAFBF9"
              height="25px"
              width="25px"
              >
              <path d="M20 10c2 3-3 12-5 12s-2-1-3-1-1 1-3 1-7-9-5-12 5-3 7-2V5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5V3h2v5c2-1 5-1 7 2z" />
              </svg>
         <a href="#about"> <p className="font-medium text-sm mt-2">Diets</p></a>
         </div>
         <div className="flex gap-2 mt-4 cursor-pointer items-center">
         <svg
           style={{fill : darkMode ? "#050604":"#FAFBF9"}}
           viewBox="0 0 24 24"
          className="mt-3"
         fill="#FAFBF9"
         height="25px"
          width="25px"
                  >
                  <path d="M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2m10-4v5h-2V4H4v2H2V1h2v2h16V1h2m-7 10.26V23h-2v-5h-2v5H9V11.26C6.93 10.17 5.5 8 5.5 5.5V5h2v.5C7.5 8 9.5 10 12 10s4.5-2 4.5-4.5V5h2v.5c0 2.5-1.43 4.67-3.5 5.76z" />
                  </svg>
                  <a href="#about"> <p className="font-medium text-sm mt-2">Planprogram</p></a>
         </div>
         <div className="flex mt-4 cursor-pointer items-center gap-2">
                  <svg
              style={{fill : darkMode ? "#050604":"#FAFBF9"}}
              viewBox="0 0 512 512"
              className='mt-3'
              fill="#FAFBF9"
              height="25px"
              width="25px"
              >
              <path d="M480 448h-12a4 4 0 01-4-4V273.51a4 4 0 00-5.24-3.86 104.92 104.92 0 01-28.32 4.78c-1.18 0-2.3.05-3.4.05a108.22 108.22 0 01-52.85-13.64 8.23 8.23 0 00-8 0 108.18 108.18 0 01-52.84 13.64 106.11 106.11 0 01-52.46-13.79 8.21 8.21 0 00-8.09 0 108.14 108.14 0 01-53.16 13.8 106.19 106.19 0 01-52.77-14 8.25 8.25 0 00-8.16 0 106.19 106.19 0 01-52.77 14c-1.09 0-2.19 0-3.37-.05h-.06a104.91 104.91 0 01-29.28-5.09 4 4 0 00-5.23 3.8V444a4 4 0 01-4 4H32.5c-8.64 0-16.1 6.64-16.48 15.28A16 16 0 0032 480h447.5c8.64 0 16.1-6.64 16.48-15.28A16 16 0 00480 448zm-256-68a4 4 0 01-4 4h-88a4 4 0 01-4-4v-64a12 12 0 0112-12h72a12 12 0 0112 12zm156 68h-72a4 4 0 01-4-4V316a12 12 0 0112-12h56a12 12 0 0112 12v128a4 4 0 01-4 4zM492.57 170.28l-42.92-98.49C438.41 47.62 412.74 32 384.25 32H127.7c-28.49 0-54.16 15.62-65.4 39.79l-42.92 98.49c-9 19.41 2.89 39.34 2.9 39.35l.28.45c.49.78 1.36 2 1.89 2.78.05.06.09.13.14.2l5 6.05a7.45 7.45 0 00.6.65l5 4.83.42.36a69.65 69.65 0 009.39 6.78v.05a74 74 0 0036 10.67h2.47a76.08 76.08 0 0051.89-20.31l.33-.31a7.94 7.94 0 0110.89 0l.33.31a77.3 77.3 0 00104.46 0 8 8 0 0110.87 0 77.31 77.31 0 00104.21.23 7.88 7.88 0 0110.71 0 76.81 76.81 0 0052.31 20.08h2.49a71.35 71.35 0 0035-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 00488 212.17l1.74-2.63q.26-.4.48-.84c1.66-3.38 10.56-20.76 2.35-38.42z" />
              </svg>
              <a href="#about"> <p className="font-medium text-sm mt-2">Suplements</p></a>
                  </div>
        </div>
        <div className="empty"></div>
        <div className="flex flex-col w-5/4 ml-auto justify-center items-end ">
          <div className="flex gap-5 items-center ">
            <Avatar style={{ width: 50, height: 50 ,zIndex:'0' }} src={fileURL} />
            <div id="nickname" className={` ${inputSwitch} text-center`}>
              <input value={note} onChange={handleNotesChange} type="text" placeholder="Keep in check your activities" name="text" className="input2" />
            </div>
            <div className="flex mt-2 gap-2 items-center justify-center">
            <button onClick={ToggleNotes} className={`${buttonSwitch} p-2.5 md:p-2.5 text-center`}>
              <SendIcon /> Post
            </button>
          </div>
          </div>
          <div className="empty"></div>
          <div id="advice" className="flex flex-col items-center justify-center  gap-2"
          style={{width:'55%'}}
          >
         {supplementsData.map((supplement, index) => (
          <div
            key={index}
            style={{ border: darkMode ? '1px solid #050604' : '1px solid #FAFBF9' }}
            className="bg-newsfeed w-2/3 flex flex-col mb-4"
          >
            <div className="flex gap-2 items-center p-4 cursor-pointer"
           onClick={() => openModalProfileHandler(supplement)}
            >
              <Avatar alt={supplement.name} src={supplement.image} />
              <p className="font-medium text-sm">{supplement.name}</p>
            </div>
            <div className="description-newsfeed">
              <p className="font-normal text-md pl-2 pb-4 pt-1 pr-2">{supplement.description}</p>
            </div>
            <div className="rate-newsfeed -mt-4">
              <div className="flex gap-2">
                <Checkbox
                  sx={{ color: darkMode ? '' : 'rgba(250, 251, 249,0.6)' }}
                  icon={<FavoriteBorder style={getIconStyle(favorites[index])} />}
                  checkedIcon={<Favorite style={getIconStyle(favorites[index])} />}
                  checked={favorites[index] || false}
                  onChange={() => handleFavoriteChange(index)}
                />
                <Checkbox
                  sx={{ color: darkMode ? '' : 'rgba(250, 251, 249,0.6)' }}
                  icon={<BookmarkBorderIcon style={getIconStyle(bookmarks[index])} />}
                  checkedIcon={<BookmarkIcon style={getIconStyle(bookmarks[index])} />}
                  checked={bookmarks[index] || false}
                  onChange={() => handleBookmarkChange(index)}
                />
              </div>
            </div>
          </div>
        ))}
        </div>
          <div id="arrival" className="flex flex-col items-center justify-center mt-8">
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
            {supplementInfo.map((supplement) => (
              <div key={supplement.id} className={`image-container ${supplement.show ? 'show' : 'hide'} -ml-3`}>
                {supplement.show && (
                  <img src={supplement.image} width="300px" alt={supplement.name} onClick={() => openModal(supplement)} />
                )}
              </div>
            ))}
          </div>
          <div style={{ width: "33%" }} className="description-supleme flex flex-col items-center justify-center">
            <div className="contenti0so ml-4 flex flex-col gap-2 mt-4 md:mt-0">
              {supplementInfo.map((supplement) => (
                <div key={supplement.id} className={`text-container ${supplement.show ? 'show1' : 'hide1'}`}>
                  {supplement.show && (
                    <>
                      <h1 className="text-lg font-bold text-center md:text-start -mt-0 mb-2">{supplement.name}</h1>
                      <p className="text-md font-medium text-center md:text-start">
                        {supplement.description}
                      </p>
                      <a href={supplement.route} className="flex gap-2 mt-4 justify-center md:justify-stretch">
                        <button className={`${buttonSwitch} p-2.5 whitespace-nowrap`}>Learn More</button>
                        
                      </a>
                    </>
                  )}
                </div>
              ))}
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
         {savedMessage &&
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
        <p>Item saved successfully</p>
        </Alert>
          </Snackbar>
        }
        {messageAlreadyFriend && selectedFriend &&(
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
         <p> {selectedFriend.name} is already your friend</p>
         </Alert>
           </Snackbar>
        )
        }
  
     </div>
     
    )
   }

   const MainIntroSmallDisplay = () => {
  
    const { darkMode } = useDarkMode()
    const theme = darkMode ? "backgroundIntro2":"backgroundIntro"
    const themeText = darkMode ? "opacity-85":" opacity-75"
    const borderTheme = darkMode ? "image-wrapper2" :"image-wrapper"
    const gradient = darkMode 
    ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)' 
    : 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)' ;
  
    const border = darkMode ? "border-rose" :" border-pink"
    const bg =darkMode ? "bg-rose" :"bg-pink"
    const bg2 = darkMode ? "bg-rose":"bg-rose"
    const inputSwitch = darkMode ? "input-wrapper2":"input-wrapper3"
    const buttonSwitch =darkMode ? "btnsign":"btnsign3"
    const buttonSwitchSm = darkMode ? "btnsm":"btnsm2"
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
      setShopingCart(false)
    }
  
    //////////////// news //////////////////
    const [showNotes,setShowNotes]=useState(false)
  
    const toggleShowingNotes =()=>{
      setShowNotes(prevMode =>!prevMode)
      setNews(false)
      setArchive(false)
      setSaved(false)
      setShopingCart(false)
    }
  
    ////////////showNotes/////////////
  
    const [archive,setArchive]=useState(false)
  
    const toggleArchive =()=>{
      setArchive(prevMode=>!prevMode)
      setNews(false)
      setSaved(false)
      setShowNotes(false)
      setShopingCart(false)
    }
  
    ////////////archive //////////////////
    const [saved,setSaved]=useState(false)
  
    const toggleSaved =()=>{
      setSaved(prevMode =>!prevMode)
      setShowNotes(false)
      setArchive(false)
      setNews(false)
      setShopingCart(false)
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
  
  
  const toggleAllOff =()=>{
    setArchive(false)
    setShowNotes(false)
    setSaved(false)
    setNews(false)
    setShopingCart(false)
  }  
  
  const [drawerOpacity, setDrawerOpacity] = useState(1);
  
  
  
  const [defaultShowingSaved,setDefaulTShowingSaved] =useState(true)
  const [defaultShowingNotes,setDefaulTShowingNotes] =useState(true)
  
  const [savedMessage,setSavedMessage] =useState(false)///////success noteMessage//////
  const [already,setAlready]=useState(false)//////// alreadyshowed message //////
  
  const [savedSupplements, setSavedSupplements] = useState([]);
  
  
  
  
  
  const [selectedSupplement, setSelectedSupplement] = useState(null); //////// toggle  to remove the supplement in the saved drawer
  const [showMore,setShowMore]=useState(null) ////////toggle for more advice in the saved drawer
  
  const removeSavedSupplement = (supplement) => {
    const updatedSupplements = savedSupplements.filter(s => s.name !== supplement.name);
    setSavedSupplements(updatedSupplements);
    Cookies.set("savedSupplements", JSON.stringify(updatedSupplements), { expires: 365 });
    setSelectedSupplement(null); // Reset the selected supplement
    if (updatedSupplements.length === 0) {
      setDefaulTShowingSaved(true);
    }
  };
  
  useEffect(() => {
    setDefaulTShowingSaved(savedSupplements.length === 0);
  }, [savedSupplements])
  
  useEffect(() => {
    setDefaulTShowingNotes(notes.length === 0);
  }, [notes])
  
  const toggleShowMoreAdvice = ()=>{
  setShowMore(true)
  if(setShowMore === true){
    setShowNotes(false)
  }
  }
  
  
  /////////////////////////Modal for user Advice ////////////////
  
  const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = (supplement,index) => {
    setSelectedSupplement(supplement);
    setSelectedIndex(index);
    setTimeout(() => {
      setModalOpen(true);
    }, 1000);
    setSaved(false)
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setSelectedSupplement(null);
  };
  
  /////////////////////////Modal for user Advice ////////////////
  
  
  
  /////////////////////////Modal for Supplements ////////////////
  
  
  const [modalSupp,setModalSupp]=useState(false)
  
  const openModalSupp = (supplement)=>{
    setSelectedSupplementInfo(supplement);
    setTimeout(() => {
      setModalSupp(true);
    }, 1000);
    setSaved(false)
  }
  
  const closeModalSupp = () => {
    setModalSupp(false);
    setSelectedSupplementInfo(null);
  };
  
  
  /////////////////////////Modal for Supplements ////////////////
  
  const [shopingCart,setShopingCart]=useState(false)
  
  const toggleShoppingCart = ()=>{
    setShopingCart(!shopingCart)
    setShowNotes(false)
    setArchive(false)
    setSaved(false)
    setNews(false)
  }
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; ///// checkboxes favourite and saved
  
  const supplementsData = [
    {
      image: avatar1,
      name: 'Cindy Baker',
      description: 'Eating apples may contribute to a good night\'s sleep. I suggest making a fruit salad with a variety of fruits such as apples, grapefruit, and bananas to incorporate more vitamin C before bedtime.',
      gender: 'Male',
      information: 'Just Studying Biology',
      location:'Nebraska'
    },
    
    {
      image: avatar2,
      name: 'John Doe',
      description: 'Consuming a balanced diet with a mix of proteins, fats, and carbohydrates can significantly improve your overall health and energy levels throughout the day.',
      gender: 'Male',
      information: 'Fitness Trainer',
      location:'Germany'
    },
    {
      image: avatar3,
      name: 'Jimmy Josh',
      description: 'So while your diet plays a major role in dropping pounds, exercise can help too. In general, try to exercise at least 4 or 5 days a week if you want to see weight loss results in both the short and long term',
      gender: 'Male',
      information: 'Helping everyone lol',
      location:'Albania'
    },
    {
      image: avatar4,
      name: 'Baily Hendreson',
      description: 'Supplements that may help reduce body fat mass include protein, caffeine and green tea extract',
      gender: 'Male',
      information: 'Supplement Master',
      location:'Macedonia'
    },
    {
      image: avatar5,
      name: 'Angela Hollow',
      description: 'Vitamin D has several important functions. Perhaps the most vital are regulating the absorption of calcium and phosphorus and facilitating healthy immune system function',
      gender: 'Female',
      information: 'Sometimes im a doctor, sometimes a teacher',
       location:'Italy'
    },
    // Add more supplements as needed
  ];
  
  const supplementInfo = [
    {
      id: 'Masstech',
      name: 'Masstech',
      description: 'Mass gainer has creatine for enhanced muscle size & strength',
      image: masstechu,
      show: masstech,
      route: '/masstech', // Route for Masstech supplement
    },
    {
      id: 'VaporX5',
      name: 'VaporX5',
      description: 'Helps increase energy, focus, and endurance for toughest training',
      image: vaportixx,
      show: vapor,
      route: '/vaporx5', // Route for VaporX5 supplement
    },
    {
      id: 'Celltech',
      name: 'Celltech',
      description: 'Helps increase energy, focus, and endurance for toughest training',
      image: cellmax,
      show: cell,
      route: '/celltech', // Route for Celltech supplement
    },
    {
      id: 'Platinum',
      name: 'Platinum',
      description: 'Helps increase energy, focus, and endurance for toughest training',
      image: pllatinumi,
      show: platinum,
      route: '/platinum', // Route for Platinum supplement
    }
  ];
  
  
  
  const [favorites, setFavorites] = useState({});
    const [bookmarks, setBookmarks] = useState({});
  
    useEffect(() => {
      const storedFavorites = Cookies.get("favorites")
        ? JSON.parse(Cookies.get("favorites"))
        : {};
      const storedBookmarks = Cookies.get("bookmarks")
        ? JSON.parse(Cookies.get("bookmarks"))
        : {};
      const storedSavedSupplements = Cookies.get("savedSupplements")
        ? JSON.parse(Cookies.get("savedSupplements"))
        : [];
  
      console.log("Loaded favorites from cookies:", storedFavorites);
      console.log("Loaded bookmarks from cookies:", storedBookmarks);
      console.log("Loaded saved supplements from cookies:", storedSavedSupplements);
  
      setFavorites(storedFavorites);
      setBookmarks(storedBookmarks);
      setSavedSupplements(storedSavedSupplements);
      setDefaulTShowingSaved(storedSavedSupplements.length === 0);
    }, []);
  
    const handleFavoriteChange = (index) => {
      const updatedFavorites = { ...favorites, [index]: !favorites[index] };
      setFavorites(updatedFavorites);
      Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 365 });
      console.log("Updated favorites:", updatedFavorites);
    };
  
    const handleBookmarkChange = (index) => {
      const updatedBookmarks = { ...bookmarks, [index]: !bookmarks[index] };
      setBookmarks(updatedBookmarks);
      Cookies.set("bookmarks", JSON.stringify(updatedBookmarks), { expires: 365 });
      console.log("Updated bookmarks:", updatedBookmarks);
  
      const saved = supplementsData.filter((_, i) => updatedBookmarks[i]);
      setSavedSupplements(saved);
      Cookies.set("savedSupplements", JSON.stringify(saved), { expires: 365 });
      console.log("Updated saved supplements:", saved);
    };
  
  const [isFavoriteChecked, setIsFavoriteChecked] = useState(false);
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);
  
  useEffect(() => {
    const storedFavorites = Cookies.get('favorites') ? JSON.parse(Cookies.get('favorites')) : {};
    const storedBookmarks = Cookies.get('bookmarks') ? JSON.parse(Cookies.get('bookmarks')) : {};
    setFavorites(storedFavorites);
    setBookmarks(storedBookmarks);
  
    const saved = supplementsData.filter((_, index) => storedBookmarks[index]);
    setSavedSupplements(saved);
  }, []);
  
  
  
  const getIconStyle = (isChecked) => ({
    color: isChecked ? (darkMode ? '#475E36' : '#B2C9A1') : '',
  });
  
  
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    color:darkMode ? "#050604":"FAFBF9" ,
    backgroundColor:'#FAFBF9' ,
    boxShadow: 24,
    padding: '16px',
    border: darkMode ? "#050604":"#FAFBF9",
    borderRadius: '20px',
  };
  
  const modalStyleJr = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '53%',
    color:darkMode ? "#050604":"FAFBF9" ,
    backgroundColor:'#FAFBF9' ,
    boxShadow: 24,
    padding: '16px',
    border: darkMode ? "#050604":"#FAFBF9",
    borderRadius: '20px',
  };
  
  const [ableToggle,setAbleToggle]=useState(true)
  
  const ToggleAble = ()=>{
   if(shopingCart || showNotes || archive || saved){
    setAbleToggle(false)
   }
  }
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedSupplementInfo, setSelectedSupplementInfo] = useState(null);
  
  
  const [modalProfileOpen, setModalProfileOpen] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);
  
    const openModalProfileHandler = (supplement) => {
      setSelectedFriend(supplement);
      setIsFriendView(false); // This is the original view
      setModalProfileOpen(true);
    };
  
    const closeModalProfileHandler = () => {
      setSelectedFriend(null);
      setModalProfileOpen(false);
    };
  
    const handleAddFriend = () => {
      if (selectedFriend) {
        console.log(`Adding ${selectedFriend.name} as a friend`);
  
        // Retrieve existing friends from cookies
        const friendsCookie = document.cookie.split('; ').find(row => row.startsWith('friends='));
        const friends = friendsCookie ? JSON.parse(decodeURIComponent(friendsCookie.split('=')[1])) : [];
  
        // Check if the friend is already added
        const isFriendAlreadyAdded = friends.some(friend => friend.name === selectedFriend.name);
  
        if (isFriendAlreadyAdded) {
          setMessageAlreadyFriend(true);
        } else {
          // Add new friend to the list
          friends.push(selectedFriend);
  
          // Save updated friends list to cookies
          document.cookie = `friends=${encodeURIComponent(JSON.stringify(friends))}; max-age=${365 * 24 * 60 * 60};`;
  
          // Update local state
          setFriends(friends);
          setMessageAddingFriend(true);





        }
      }
    };
  
    const [friends, setFriends] = useState([]);
  
    useEffect(() => {
      // Retrieve friends from cookies when component mounts
      const friendsCookie = document.cookie.split('; ').find(row => row.startsWith('friends='));
      if (friendsCookie) {
        const savedFriends = JSON.parse(decodeURIComponent(friendsCookie.split('=')[1]));
        setFriends(savedFriends);
      }
    }, []);
  
  
  const [messageAddingFriend,setMessageAddingFriend]=useState(false) ///// added friend changes
  const [messageRemovingFriend,setMessageRemovingFriend]=useState(false) //// removing friend changes
  const [messageAlreadyFriend,setMessageAlreadyFriend]=useState(false) 
  const [isFriendView, setIsFriendView] = useState(false);
  
  const openFriendProfileHandler = (friend) => {
    setSelectedFriend(friend);
    setIsFriendView(true); // This is the friends view
    setModalProfileOpen(true);
    setArchive(false)
  };
  
  const handleRemoveFriend = (friendToRemove) => {
    const updatedFriends = friends.filter(friend => friend.name !== friendToRemove.name);
  
    // Save updated friends list to cookies
    document.cookie = `friends=${encodeURIComponent(JSON.stringify(updatedFriends))}; max-age=${365 * 24 * 60 * 60};`;
  
    // Update local state
    setFriends(updatedFriends);
    setMessageRemovingFriend(true)
  };
  
  const [cartItems, setCartItems] = useState([]);
  const [notificationCart, setNotificationCart] = useState(false);
  
  useEffect(() => {
    const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'));
    const cartItemsFromCookies = JSON.parse(Cookies.get('cartItems') || '[]');
  
    if (cartItemsFromStorage) {
      setCartItems(cartItemsFromStorage);
      setNotificationCart(cartItemsFromStorage.length > 0);
    } else if (cartItemsFromCookies) {
      setCartItems(cartItemsFromCookies);
    }
  }, []);
  
 

  const removeItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    Cookies.set('cartItems', JSON.stringify(updatedCartItems), { expires: 365 });
  };


    return(
      <div className="relative min-h-fit ">
        
  
        {(shopingCart || showNotes || archive || saved) && (
        <div
          className={`fixed inset-0 opacity-50  ${bg2}`}
          style={{zIndex:200}}
          onClick={toggleAllOff}
        />
      )}
  
          <div className={`fixed bottom-0 left-0 w-full p-4  ${bg}}`}
          style={{backgroundColor:darkMode ? "#FAFBF9":"#050604",zIndex:200}}
          >
            
        <div className="flex justify-around items-center ">
          {/* News Feed  Not in the smaller Screen !!*/}
         
  
          {/* Notes */}
          <div onClick={toggleShowingNotes} className="flex flex-col items-center cursor-pointer">
            <NewspaperIcon />
            <h3 className="font-normal text-xs sm:text-sm mt-2">Notes</h3>
          </div>
  
          {/* Archive */}
          <div onClick={toggleArchive} className="flex flex-col items-center cursor-pointer">
          <PeopleIcon/>
            <h3 className="font-normal text-xs sm:text-sm mt-2">Friends</h3>
          </div>
  
          {/* Saved */}
          <div onClick={toggleSaved} className="flex flex-col items-center cursor-pointer">
            <BookmarkIcon/>
            <h3 className="font-normal text-xs sm:text-sm mt-2">Saved</h3>
          </div>
          <div onClick={toggleShoppingCart} className="flex flex-col items-center cursor-pointer">
            <ShoppingCartIcon />
            <h3 className="font-normal text-xs sm:text-sm mt-2">Cart</h3>
          </div>
        </div>
  
        {/* Drawer Content */}
       
        <div  className={`drawer-content ${shopingCart ? 'show' : 'hide'} z-100`}
        style={{backgroundColor:darkMode ? "#FAFBF9":"#050604",opacity: drawerOpacity}}
        >
           <div className="flex items-center justify-center"
           style={{backgroundColor:darkMode ? "#FAFBF9":"#050604"}}
           >
         <div onClick={toggleAllOff}  className="handle mt-3 px-2 pb-2 w-12 rounded-2xl mb-2" style={{backgroundColor:"#525252"}}/>
         </div>
         {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="flex gap-2 items-center justify-between p-4 cursor-pointer"
               style={{backgroundColor:darkMode ? "#FAFBF9":"#050604"}}>
            <div className="flex items-center justify-between">
              <div className="flex">
              <Avatar sx={{width:'55px',height:'55px',marginTop:0}} src={item.image} alt={item.name} />
              <div className="flex flex-col items-center">
                <div>
                  <p className="font-bold text-xl">{item.name}</p>
                  <div className="font-normal text-md flex gap-4">
                    <p>{item.flavor}</p>/
                    <p>{item.weight}</p>
                  </div>
                </div>
                <p className="font-semibold text-center">{item.price}</p>
              </div>
              </div>
            </div>
            <button
                    onClick={() => removeItem(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center mt-4">
          <div>
            <img src={ShopCart} width="200px" className="mt-2" alt="No items yet" />
            <p className="text-center mt-2">No items in the cart yet</p>
          </div>
        </div>
      )}
      
        </div>
      
  
        {/* Notes Drawer */}
        <div  className={`drawer-content ${showNotes ? 'show' : ''} z-100`}
         style={{backgroundColor:darkMode ? "#FAFBF9":"#050604"}}
        >
         <div className="flex items-center justify-center">
         <div onClick={toggleAllOff}  className="px-2 mt-3 mb-2 pb-2 w-12 rounded-2xl " style={{backgroundColor:"#525252"}}/>
         </div>
         {defaultShowingNotes ? (
          <div className="flex items-center justify-center mt-4">
            <div>
              <img src={Task} width="200px" className="mt-2" alt="No items yet" />
              <p className="text-center mt-2">No Notes yet</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm mb-4 mt-4 text-center">Click on notes if you want to remove them</p>
            {notes.map((note, index) => (
              <p
                style={{
                  color: darkMode ? "#FAFBF9" : "#050604",
                  cursor: 'pointer',
                  backgroundColor: selectedNoteIndex === index ? 'rgba(128, 128, 128,0.9)' : '',
                  transition: 'all 1s ease'
                }}
                className={`pt-2 pl-2 pb-2 pr-2 w-2/3 md:w-full text-center ${bg} ${selectedNoteIndex === index ? 'bg-pink' : ''} items-center md:items-start rounded-xl`}
                key={index}
                onClick={() => handleSelectNote(index)}
              >
                {note}
              </p>
            ))}
            <div className="flex justify-center items-center w-full mt-8">
              <button onClick={handleClearNote} className={`${buttonSwitch} p-2.5 text-center`}>
                <DeleteIcon /> Clear
              </button>
            </div>
          </div>
        )}
        </div>
  
        {/* Archive Drawer */}
        <div  className={`drawer-content ${archive ? 'show' : ''} z-100 `}
         style={{backgroundColor:darkMode ? "#FAFBF9":"#050604"}}
        >
        <div className="flex items-center justify-center">
         <div onClick={toggleAllOff}  className=" mt-3 px-2 pb-2 w-12 rounded-2xl " style={{backgroundColor:"#525252"}}/>
         </div>
         {friends.length > 0 ? (
            friends.map((friend, index) => (
             <div className="flex justify-between mt-4">
               <div
                onClick={() => openFriendProfileHandler(friend)}
                key={index}
                className="flex gap-2 items-center p-4 cursor-pointer"
              >
                <Avatar sx={{width:"55px",height:"55px"}} alt={friend.name} src={friend.image} />
                <div>
                  <p className="font-bold text-xl">{friend.name}</p>
                  <p className="font-normal text-md">{friend.information}</p>
                </div>
              </div>
              <button 
              className={` ${buttonSwitch} ml-2`}
              style={{padding:'0px 5px 0px 5px'}}
              onClick={() => handleRemoveFriend(friend)}>
                <ClearIcon/>
                </button>
             </div>
            ))
          ) : (
           <div className="flex flex-col items-center justify-center">
              <img src={Nofriends} width="200px" className="mt-2" alt="" />
            <p className="text-center mt-2">No friends added yet</p>
           </div>
          )}
        </div>
  
        {/* Saved Drawer */}
        <div className={`drawer-content ${saved ? 'show' : ''} z-100`} style={{backgroundColor: darkMode ? "#FAFBF9" : "#050604"}}>
    <div className="flex items-center justify-center">
      <div onClick={toggleAllOff} className="mt-3 px-2 pb-2 w-12 rounded-2xl" style={{backgroundColor: "#525252"}} />
    </div>
    {savedSupplements.length === 0 ? (
      <div className="flex items-center justify-center mt-4">
        <div>
          <img src={Folder2} width="200px" className="mt-2" alt="No items yet" />
          <p className="text-center mt-2">Nothing saved yet</p>
        </div>
      </div>
    ) : (
      <>
        <p className="font-light text-center text-sm mb-4 mt-4">Click on the item if you want to remove them</p>
        <div className="saved-items-container flex items-center justify-start gap-4 mt-12 overflow-x-auto whitespace-nowrap">
          {savedSupplements.map((supplement, index) => (
            <div
              key={index}
              className={`flex flex-col h-36 items-center justify-center my-2 mt-4 ${
                selectedSupplement && selectedSupplement.name === supplement.name
                  ? darkMode ? 'highlighted-dark' : 'highlighted-light'
                  : ''
              }`}
            >
              <div className="items-center flex flex-col"
               onClick={() => {
                if (supplement.type === 'supplement') {
                  openModalSupp(supplement);
                } else {
                openModal(supplement, index);
                }
                }}
              >
                <img
                  src={supplement.image}
                  alt={supplement.name}
                  className="w-16 h-16 mr-2 rounded-full cursor-pointer"
                  onClick={() => setSelectedSupplement(supplement)}
                />
                  <span className="text-center text-sm ">{supplement.type === 'supplement' ? 'View Supplement' : `${supplement.name}'s advice` }</span>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
        <Modal
          open={modalOpen}
          onClose={closeModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={`modal-content ${darkMode ? 'dark-modal' : 'light-modal'}`}>
          {selectedSupplement  && selectedIndex !== null &&  (
              <>
                <div className="flex gap-2 items-center p-4">
                  <Avatar alt={selectedSupplement.name} src={selectedSupplement.image} />
                  <p
                  
                  className="font-medium text-sm">{selectedSupplement.name}</p>
                </div>
                <div className="description-newsfeed">
                  <p
                 
                  className="font-normal text-md pl-2 pb-4 pt-1 pr-2">{selectedSupplement.description}</p>
                </div>
                <div className="rate-newsfeed -mt-4">
                  <div className="flex gap-2">
                    <Checkbox
                      sx={{ color: darkMode ? '' : '#475E36' }}
                      icon={<FavoriteBorder style={getIconStyle(favorites[selectedIndex])} />}
                      checkedIcon={<Favorite style={getIconStyle(favorites[selectedIndex])} />}
                      checked={favorites[selectedIndex] || false}
                      onChange={() => handleFavoriteChange(selectedIndex)}
                    />
                    <Checkbox
                      sx={{ color: darkMode ? '' : '' }}
                      icon={<BookmarkBorderIcon style={getIconStyle(bookmarks[selectedIndex])} />}
                      checkedIcon={<BookmarkIcon style={getIconStyle(bookmarks[selectedIndex])} />}
                      checked={bookmarks[selectedIndex] || false}
                      onChange={() => handleBookmarkChange(selectedIndex)}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </Modal>
        
        <Modal
          open={modalProfileOpen}
          onClose={closeModalProfileHandler}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyleJr} className={`modal-content ${darkMode ? 'dark-modal' : 'light-modal'}`}>
            {selectedFriend && (
              <>
                <div className="flex gap-2 items-center p-4">
                  <Avatar sx={{width:'80px',height:'80px'}} alt={selectedFriend.name} src={selectedFriend.image} />
                  <p className="font-bold text-xl">{selectedFriend.name}</p>
                </div>
                <div className="description-newsfeed -mt-3">
                  <p className="font-normal text-md pl-2 pb-4 pt-1 pr-2">
                  {selectedFriend.information}<br/>
                    <div className="flex gap-2 items-center mt-2">
                    {selectedFriend.gender === 'Male' ? <MaleIcon /> : <FemaleIcon />}<br />
                    <p className="font-bold">{selectedFriend.location}</p>
                    </div>
                  </p>
                </div>
                <div className="rate-newsfeed -mt-5">
                <div className="flex gap-2 justify-end items-end">
                    {!isFriendView && (
                      <button onClick={handleAddFriend}>{messageAddingFriend ? "Added Friend":"Add Friend"}</button>
                    )}
                    {isFriendView && (
                      <button onClick={() => handleRemoveFriend(selectedFriend)}>{messageRemovingFriend ? "Friend Removed":"Remove Friend"}</button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </Modal>
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
        {savedMessage &&
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
        <p>Item saved successfully</p>
        </Alert>
          </Snackbar>
        }
        {already &&
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
        <p>Item already saved</p>
        </Alert>
          </Snackbar>
        }
      </div>
    )
  }

export default NavbarGeneral;