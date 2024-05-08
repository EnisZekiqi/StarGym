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

    return ( 
        <div className="navbar bg-tran">
            <div className="flex justify-between ">
               
                    <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
                
                <div className="showi flex gap-4 mr-4 mt-4 mb-4">
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
                    <button onClick={handleOpen} className="bg-transparent -mt-3">
                    <p className="font-semibold">Log In</p>
                    </button>
                    <a href="#clients"> <p className="font-semibold">Clients</p></a>
                </div>
                <div className="showi2 gap-2">
                    <button onClick={toggleDrawer(true)} className="mt-4">< MenuIcon sx={{ color:darkMode ? "#131A0F": "#FAFBF9"}}/></button>
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
            <AnimatePresence>
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
            </AnimatePresence>
           
        </div>
     );
}
 
export default Navbar;