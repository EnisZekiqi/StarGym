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
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const [nickname, setNickname] = useState('');
      const [password, setPassword] = useState('');
      const [error,setError]=useState(false)
      const [success,setSuccess]=useState(false)
      const navigate =useNavigate()

      const handleSubmit = () => {
        const storedNickname = localStorage.getItem('nickname'); // Get the stored nickname from localStorage
        const storedPassword = localStorage.getItem('password')
        // Check if the entered nickname matches the stored one

        if(nickname.trim() === ''){
          setError(true)
          setOpen1(true);
          setTimeout(() => {
            setError(false)
          }, 3000);
        }
        if(password.trim() === ''){
          setError(true)
          setOpen1(true);
          setTimeout(() => {
            setError(false)
          }, 3000);
        }


        if (nickname.trim() === storedNickname && password === storedPassword) {
          setSuccess(true)
          setTimeout(() => {
            navigate('/main');
          }, 3000);
        } else {
          // Handle incorrect nickname
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


    return ( 
        <div className="navbar">
            <div className="flex justify-between ">
               
                    <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
                
                <div className="showi flex gap-4 mr-4 mt-4 mb-4">
                   <a href="#about"> <p className="font-semibold">About Us</p></a>
                    <button onClick={handleOpen} className="bg-transparent -mt-3">
                    <p className="font-semibold">Log In</p>
                    </button>
                    <a href="#clients"> <p className="font-semibold">Clients</p></a>
                </div>
                <div className="showi2">
                    <button  onClick={toggleDrawer('right', true)} className="mt-4">< MenuIcon sx={{ color:"#131A0F"}}/></button>
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
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            <div className='flex flex-col gap-4 justify-center items-center'  style={{ width: 200}}>
               <a className="mt-4" href="#about"><p className="font-semibold text-xl">About Us</p></a>
               <a href=""><p className="font-semibold text-xl">Sign Up</p></a>
               <a href=""><p className="font-semibold text-xl">Inbox</p></a>
            </div>
            </Drawer>
           
        </div>
     );
}
 
export default Navbar;