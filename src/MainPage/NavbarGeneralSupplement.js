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
import { useSupplementContext } from '../useSupplementContext ';
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import {
  FiInfo,
} from "react-icons/fi";
import op from '../images/op-removebg-preview.png'
import oplight from '../images/oplight-removebg-preview.png'
import musscletechicon from '../images/musscletechicon-removebg-preview.png'
import musscletechicondarkmode from '../images/musscletechicondarkmode-removebg-preview.png'
import SendIcon from '@mui/icons-material/Send';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Nofriends from '../images/World travel.svg'

const NavbarGeneralSupplement = ({ setDisplayContent }) => {
   

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
              <Tabs  />
            </div>
            <div className="fonk flex gap-4 items-center">
            <h1 className="font-bold ml-4 text-xl mt-4 mb-4">StarGym</h1>
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
              <div className="avas cursor-pointer"> <Avatar  sx={{ marginRight: "5px" }} src={fileURL}></Avatar></div>
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
    

      const ShiftingDropDown = () => {

        const { darkMode } = useDarkMode()
        return (
          <div className="flex h-96 w-full justify-start bg-neutral-950 p-8 text-neutral-200 md:justify-center">
            <Tabs />
          </div>
        );
      };
      
      const Tabs=({ toggleAmino, toggleWeight, togglePrework, toggleVitamins, toggleCreatine, toggleProtein, toggleWeightLoss }) => {
        const { darkMode } = useDarkMode()
        const [selected, setSelected] = useState(null);
        const [dir, setDir] = useState(null);
      
        const handleSetSelected = (val) => {
          if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
          } else if (val === null) {
            setDir(null);
          }
      
          setSelected(val);
        };
      
        return (
          <div
            onMouseLeave={() => handleSetSelected(null)}
            className="relative flex h-fit gap-2"
            style={{backgroundColor : darkMode ? "#FAFBF9" :"#050604",zIndex:100}}
          >
            {TABS.map((t) => {
              return (
                <Tab
                  key={t.id}
                  selected={selected}
                  handleSetSelected={handleSetSelected}
                  tab={t.id}
                >
                  {t.title}
                </Tab>
              );
            })}
      
      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} toggleAmino={toggleAmino} toggleWeight={toggleWeight} togglePrework={togglePrework} toggleVitamins={toggleVitamins} toggleCreatine={toggleCreatine} toggleProtein={toggleProtein} toggleWeightLoss={toggleWeightLoss} />}
      </AnimatePresence>
          </div>
        );
      };
      
      const Tab = ({ children, tab, handleSetSelected, selected }) => {
        const { darkMode } = useDarkMode()
        
        return (
          <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
              selected === tab
                ? " bg-neutral-800 text-neutral-100"
                : "text-neutral-400"
            }`}
          >
            <span>{children}</span>
            <FiChevronDown
              className={`transition-transform ${
                selected === tab ? "rotate-180" : ""
              }`}
            />
          </button>
        );
      };
      
      const Content = ({ selected, dir }) => {
        const { darkMode } = useDarkMode()
        return (
          <motion.div
            id="overlay-content"
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 8,
            }}
            className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
            style={{backgroundColor : darkMode ? "#FAFBF9" :"#050604",zIndex:100}}
          >
            <Bridge />
            <Nub selected={selected} />
      
            {TABS.map((t) => {
              return (
                <div className="overflow-hidden" key={t.id}>
                  {selected === t.id && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <t.Component />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </motion.div>
        );
      };
      
      const Bridge = () => (
        
        <div className="absolute -top-[24px] left-0 right-0 h-[24px] z-50" />
      );
      
      const Nub = ({ selected }) => {
        const { darkMode } = useDarkMode()
        const [left, setLeft] = useState(0);
      
        useEffect(() => {
          moveNub();
        }, [selected]);
      
        const moveNub = () => {
          if (selected) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");
      
            if (!hoveredTab || !overlayContent) return;
      
            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();
      
            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      
            setLeft(tabCenter);
          }
        };
      
        return (
          <motion.span
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
              backgroundColor : darkMode ? " #FAFBF9":"#050604"
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
          />
        );
      };
      
      const Products = () => {

        const {
          toggleAmino,
          toggleWeight,
          togglePrework,
          toggleVitamins,
          toggleCreatine,
          toggleProtein,
          toggleWeightLoss
      } = useSupplementContext();

        return (
          <div>
            <div className="flex gap-4 justify-between">
              <div>
                <h3
                  className="mb-1 text-sm hoverEffect cursor-pointer"
                  onClick={toggleAmino}
                >
                  Amino Acids
                </h3>
                <a href="#" className="mb-1 block text-sm text-neutral-400 hoverEffect"
                  onClick={toggleWeight}
                >
                  Weight Gainers
                </a>
                <a href="#" className="block text-sm text-neutral-400 hoverEffect"
                  onClick={togglePrework}
                >
                  Pre-Workout
                </a>
                <a href="#" className="block text-sm text-neutral-400 hoverEffect"
                  onClick={toggleVitamins}
                >
                  Vitamins & Minerals
                </a>
              </div>
              <div>
                <h3 className="mb-1 text-sm hoverEffect cursor-pointer"
                  onClick={toggleCreatine}
                >
                  Creatine
                </h3>
                <a href="#" className="mb-1 block text-sm text-neutral-400 hoverEffect"
                  onClick={toggleProtein}
                >
                  Protein
                </a>
                <a href="#" className="mb-1 block text-sm text-neutral-400 hoverEffect"
                  onClick={toggleWeightLoss}
                >
                  Weight loss
                </a>
              </div>
            </div>
          </div>
        );
      };
      const Pricing = () => {
        const { darkMode } = useDarkMode()

        return (
          <div className="grid grid-cols-2 gap-4 divide-x divide-neutral-700">
            <a
              href="#"
              className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
            >
             {darkMode ?  

             <img src={musscletechicon} width="75px" height="85px" alt="" /> 
            
             : <img src={musscletechicondarkmode}  width="85px" height="75px" alt=""/>}
            </a>
            <a
              href="#"
              className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
            >
              {darkMode ?  

                <img src={oplight} width="75px" height="85px" alt="" /> 

                : <img src={op}  width="75px" height="85px" alt=""/>}
            </a>
          </div>
        );
      };
      
      const Blog = () => {
        return (
          <div>
            <div className="grid grid-cols-2 gap-2">
              <a href="#">
                <img
                  className="mb-2 h-14 w-full rounded object-cover"
                  src="/imgs/blog/4.png"
                  alt="Placeholder image"
                />
                <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
                <p className="text-xs text-neutral-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
                  quidem eos.
                </p>
              </a>
              <a href="#">
                <img
                  className="mb-2 h-14 w-full rounded object-cover"
                  src="/imgs/blog/5.png"
                  alt="Placeholder image"
                />
                <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
                <p className="text-xs text-neutral-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
                  quidem eos.
                </p>
              </a>
            </div>
            <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
              <span>View more</span>
              <FiArrowRight />
            </button>
          </div>
        );
      };
      
      const TABS = [
        {
          title: "Category",
          Component: Products,
        },
        {
          title: "Brands",
          Component: Pricing,
        },
        {
          title: "Purpose",
          Component: Blog,
        },
      ].map((n, idx) => ({ ...n, id: idx + 1 }));

export default NavbarGeneralSupplement;