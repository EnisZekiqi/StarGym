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
const LogInAccess = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    
    
    

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
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
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
              navigate('/info');
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
        <div>
          <button 
          onClick={handleOpen}
        className={`btnsign2 w-full px-9 py-4 text-xl ${darkMode ? 'btnsign2' : 'btnsign3'} md:w-fit`}>
          Learn more
        </button>
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
        </div>
     );
}
 
export default LogInAccess;