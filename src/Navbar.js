import { useState } from "react";
import { useSuccessMessage } from './SuccessMessageContext';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Cookies from 'js-cookie';
import { useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {AnimatePresence, motion} from 'framer-motion'
import LogInAccess from "./LogInAccess";
import About from "./About";

const Navbar = () => {

    ///success message ///

    const { successMessage, setSuccessMessage } = useSuccessMessage();
   
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    const closeMessage = ()=>{
       setSuccessMessage('')
       
    }
    

    ///drawer function /// 


    const [drawer,setDrawer]=useState(false)

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      height:350,
      backgroundColor: '#FAFBF9',
      border: '2px solid #131A0F',
      boxShadow: 24,
      borderRadius:5,
      p: 4,
    };

    const [state, setState] = useState({
        right: false,
      });
      const [drawerOpen, setDrawerOpen] = useState(false);

      const toggleDrawer = (open) => (event) => {
          if (
              event.type === 'keydown' &&
              (event.key === 'Tab' || event.key === 'Shift')
          ) {
              return;
          }
          setDrawerOpen(open);
      };
      const [nickname, setNickname] = useState(Cookies.get('nickname') || '');
      const [password, setPassword] = useState(Cookies.get('password') || '');
      const [error,setError]=useState(false)
      const [error2,setError2]=useState(false)
      const [success,setSuccess]=useState(false)
      const navigate =useNavigate()

      useEffect(() => {
        const storedNickname = Cookies.get('nickname');
        const storedPassword = Cookies.get('password');
        
        if (storedNickname) {
          setNickname('');
        }
    
        if (storedPassword) {
          setPassword('');
        }
    }, []);
      const handleSubmit = () => {
        const storedNickname = Cookies.get('nickname');
        const storedPassword = Cookies.get('password');
        // Check if the entered nickname matches the stored one

        if(nickname.trim() === ''){
          setError(true)
          setError2(false)
          setOpen1(true);
          setTimeout(() => {
            setError(false)
          }, 3000);
        }
        if(password.trim() === ''){
          setError(true)
          setError2(false)
          setOpen1(true);
          setTimeout(() => {
            setError(false)
          }, 3000);
        }

        if (nickname.trim() !== storedNickname){
          setError2(true)
          setError(false)
          setOpen1(true)
          setTimeout(() => {
            setError2(false)
          }, 3000);
        }
        if (password.trim() !== storedPassword){
          setError2(true)
          setError(false)
          setOpen1(true)
          setTimeout(() => {
            setError2(false)
          }, 3000);
        }


        if (storedNickname && storedPassword && nickname.trim() === storedNickname && password === storedPassword) {
          setSuccess(true);
          setTimeout(() => {
                setNickname('');
                setPassword('');
              navigate('/main');
          }, 3000);
      } else {
          // Handle incorrect nickname/password
          // You can display an error message here
      }
       

      };
    
      const handleNicknameChange = (e) => {
        setNickname(e.target.value);
      };

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const [visibilityOn, setVisibilityOn] = useState(false);

      const toggleVisibility = () => {
        setVisibilityOn(!visibilityOn);
    };

    const [open1, setOpen1] = useState(false);
  const handleClose1 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


    const { darkMode } = useDarkMode();
    const { toggleDarkMode } = useDarkMode();

    const handleClick = () => {
      toggleDarkMode();
    };  
    const [drawerr,setDrawerr]=useState(false)

    const toggleDrawerr =()=>{
        setDrawerr(true);
    }

    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
    const [show3,setShow3]=useState(false)
    return ( 
        <div className="navbar bg-tran">
            <div className="flex justify-between ">
               
                    <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
                
                <div className="showi flex gap-4 mr-4 mt-6 mb-4">
                <div className="nonomi3">
                  <button style={{backgroundColor:"transparent"
              ,display:darkMode ? "none":"block"
              }} onClick={handleClick}><LightModeIcon sx={{color:"#FAFBF9"}}/></button>
                {darkMode ? (
                  <button style={{backgroundColor:"transparent",position:"absolute",marginLeft:'-25px'}} onClick={handleClick}><DarkModeIcon sx={{color:"#050604"}}/></button>
                ) : ""
                }
                  </div>
                   <a href="#about"> <p className="font-semibold">About Us</p></a>
                    <button onClick={handleOpen} className="bg-transparent -mt-1">
                    <p className="font-semibold">Log In</p>
                    </button>
                    <a href="#clients"> <p className="font-semibold">Clients</p></a>
                </div>
                <div className="showi2 flex gap-2">
                {/*<button onClick={toggleDrawer(true)} className="mt-4">< MenuIcon sx={{ color:darkMode ? "#131A0F": "#FAFBF9"}}/></button>*/} 
                <div className="hamburger relative">
              
              <button className="mt-7" onClick={toggleDrawerr}><MenuIcon/> </button>
              <AnimatePresence>
  {drawerr && (
    <>
      <div style={{ backgroundColor: darkMode ? "rgba(5, 6, 4,0.8)" : "rgba(250, 251, 249,0.65)"}} onClick={() => setDrawerr(false)} className="backdropp">
        <motion.div
          initial={{ opacity: 0, width: 30, height: 30,borderRadius:'50%' }} // Initial small size
          animate={{ opacity: 1, width: '100vw', height: '100vh',borderRadius:50 }} // Final full size
          exit={{ opacity: 0, width: 0, height: 0,borderRadius:'50%' ,transition: { delay: 1.5 } }}
          transition={{ duration: 0.5 }}
          className=""
          onClick={() => setDrawerr(false)} // Close drawer when backdrop is clicked
        >
          <div className="nonomi2 flex items-center justify-center flex-col flex-gap gap-4 mr-4 ">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, delay: 0.4 }} // Add delay for stagger effect
              className="flex items-center justify-center flex-col mt-52"
            >
              <a onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className="block text-5xl sm:text-6xl mb-4 cursor-pointer font-semibold"
                  style={{  color: darkMode ? (show ? "#a6a6a6" : "#FAFBF9") : (show ? "#525252" : "#050604"),transition:'0.5s ease' }}
                 >Home</a>
              <span className='line2 flex origin-left h-1 rounded-full'></span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, delay: 0.6 }} // Add delay for stagger effect
              className="flex items-center justify-center flex-col"
            >
              <a onMouseEnter={()=>setShow1(true)} onMouseLeave={()=>setShow1(false)}  className="block text-5xl sm:text-6xl mb-4 font-semibold"
                  style={{  color: darkMode ? (show1 ? "#a6a6a6" : "#FAFBF9") : (show1 ? "#525252" : "#050604"),transition:'0.5s ease' }} href="#about">About</a>
              <span className='line2 origin-left h-1 rounded-full'></span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, delay: 0.8 }} // Add delay for stagger effect
              className="flex items-center justify-center flex-col font-semibold"
            >
              <a onMouseEnter={()=>setShow2(true)} onMouseLeave={()=>setShow2(false)} className="block text-5xl sm:text-6xl mb-4 cursor-pointer"
                 style={{  color: darkMode ? (show2 ? "#a6a6a6" : "#FAFBF9") : (show2 ? "#525252" : "#050604"),transition:'0.5s ease' }} onClick={handleOpen}>Log In</a>
              <span className='line2 origin-left h-1 rounded-full'></span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, delay: 1 }} // Add delay for stagger effect
              className="flex items-center justify-center flex-col"
            >
              <a onMouseEnter={()=>setShow3(true)} onMouseLeave={()=>setShow3(false)}  className="block text-5xl sm:text-6xl mb-4 font-semibold"
                  style={{  color: darkMode ? (show3 ? "#a6a6a6" : "#FAFBF9") : (show3 ? "#525252" : "#050604"),transition:'0.5s ease' }} href="#clients">Clients</a>
              <span className='line2 origin-left h-1 rounded-full'></span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )}
</AnimatePresence>
              </div>
                   
                    <div className="nonomi2">
                  <button style={{backgroundColor:"transparent"
              ,display:darkMode ? "none":"block"
              }} onClick={handleClick}><LightModeIcon sx={{color:"#FAFBF9",marginTop:'28px'}}/></button>
                {darkMode ? (
                  <button style={{backgroundColor:"transparent",position:"absolute",marginLeft:'-25px',marginTop:'28px'}} onClick={handleClick}><DarkModeIcon sx={{color:"#050604"}}/></button>
                ) : ""
                }
                  </div>
                </div>
            </div>
            <Modal

        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="font-bold text-2xl text-center" id="modal-modal-title" variant="h6" component="h2">
            Log In
          </h1>
          <div className="flex flex-col items-center gap-6 mt-4">
          <div class="input-wrapper2">
          <input  type="text" placeholder="Nickname" value={nickname} onChange={handleNicknameChange} name="text" class="input"/>
         </div>
         <div class="input-wrapper2 ml-8 mr-2">
          <input   type={visibilityOn ? "text" : "password"}  placeholder="Password" value={password} onChange={handlePasswordChange} name="text" class="input"/>
          {visibilityOn ? (
            <VisibilityIcon onClick={toggleVisibility} sx={{cursor:"pointer",color:"#475E36" }}/>
              ) : (
                <VisibilityOffIcon onClick={toggleVisibility} sx={{cursor:"pointer",color:"#475E36"}}/>
               )}
         </div>
          <button className="btnsign w-1/2" onClick={handleSubmit}>Log In</button>
          <p className="text-sm">Don't have and account <a className="font-bold px-1" href="/signup">Sign Up</a> and join us</p>
          </div>
        </Box>
      </Modal>
      {error && 
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
      {error2 && 
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
          <p>Invalid nickname or password </p>
          </Alert>
            </Snackbar>
      }
      {success && 
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
      <p>Login Successfully </p>
      </Alert>
        </Snackbar>
      }
         {/* <AnimatePresence>
            <Drawer anchor="right"  open={drawerOpen} onClose={toggleDrawer(false)}
              transitionDuration={500} // Adjust the duration as needed
              style={{ transition: 'transform 0.5s ease' }}
              BackdropProps={{ style: { backdropFilter: 'blur(3px)' } }}
            >
            <motion.div 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1,transition:{
             duration:0.5,staggerChildren:0.5,delay:0.5
            }}}
            exit={{opacity:0,scale:0,transition:{duration:0.5}}}
            className='flex flex-col gap-8 justify-center items-end' onClick={toggleDrawer(false)}   style={{ width: '100%', height: '100%', transform: drawerOpen ? 'scale(1)' : 'scale(0)' }}>
               <motion.a 
               initial={{opacity:0,scale:0}}
               animate={{opacity:1,scale:1,transition:{
                delay:0
               }}}
               className="mt-4" href="#about"><p className="font-semibold ml-12 text-5xl md:text-6xl text-slate-200 transition-colors hover:text-rose">About Us</p></motion.a>
               <button onClick={handleOpen} className="bg-transparent -mt-3">
                    <motion.p 
                     initial={{opacity:0,scale:0}}
                     animate={{opacity:1,scale:1,transition:{
                      delay:0.2
                     }}}
                    className="font-semibold ml-12  text-5xl md:text-6xl text-slate-200 transition-colors hover:text-rose">Log In</motion.p>
                    </button>
               <motion.a
                initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1,transition:{
                  delay:0.4
                }}}
               href="#clients"><p className="font-semibold   text-5xl md:text-6xl text-slate-200 transition-colors hover:text-rose">Clients</p></motion.a>
            </motion.div>
            </Drawer>
            </AnimatePresence>*/}  
           
        </div>
     );
}
const Hamburger = () => {
 

  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(prevMode => !prevMode);
    
  };
  useEffect(() => {
    // Set overflow of the body based on the opened state
    document.body.style.overflow = opened ? 'hidden' : 'auto';
  }, [opened])

  const { darkMode } = useDarkMode();


  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const [showFunction, setShowFunction] = useState(false)
  const handleClick = () => {
    // Your function logic here
    console.log('Anchor tag clicked!');
    setShowFunction(true); // Set state to show the function or trigger something
  }
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-8">
      <AnimatePresence mode="wait">
        <motion.button
          className='transition absolute left-100 right-0 top-0 '
          style={{
            borderRadius: opened ? "0%" : "100%",
            backgroundColor: darkMode ? "rgba(5, 6, 4,0.8)" : "rgba(250, 251, 249,0.65)",
            backdropFilter: 'blur(4px)',
            width: opened ? "calc(100vw - 32px)" : "30px",
            height: opened ? "calc(100vh - 32px)" : "30px",
            zIndex: 9999,
          }}
          onClick={toggleOpened}
          initial={{ borderRadius: "100%", width: "30px", height: "30px" }}
          animate={{ borderRadius: opened ? "0%" : "100%", width: opened ? "100%" : "30px", height: opened ? "100vh" : "30px" }}
          exit={{ borderRadius: "100%", width: "30px", height: "30px", transition: { delay: 1 } }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: opened ? 0 : 1 }}
        >
          <MenuIcon sx={{ display: opened ? "none" : "block", color: darkMode ? "#FAFBF9" : "#050604", transition: { delay: opened ? 1 : 1 },marginLeft:0.3 }} />
          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{ display: opened ? 'block' : 'none' }}
                staggerChildren={0.2}
              >
                <motion.a
                 href="#about" onClick={handleScrollToAbout}
                  className="block text-5xl mb-4"
                  style={{ color: darkMode ? "#FAFBF9" : "#050604" }}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  About Us
                </motion.a>
                <motion.a
               
                  href="#services"
                  className="block text-5xl mb-4"
                  style={{ color: darkMode ? "#FAFBF9" : "#050604" }}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                <LogInAccess/>
                </motion.a>
                <motion.a
                  href="#clients"
                  className="block text-5xl"
                  style={{ color: darkMode ? "#FAFBF9" : "#050604" }}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Clients
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </AnimatePresence>
      {showFunction &&
      <About/>
      }
    </div>
  );
};
export default Navbar;