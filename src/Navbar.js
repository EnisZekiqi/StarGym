import { useState } from "react";
import { useSuccessMessage } from './SuccessMessageContext';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
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
          <input  type="text" placeholder="Email" name="text" class="input"/>
         </div>
         <div class="input-wrapper2">
          <input  type="text" placeholder="Password" name="text" class="input"/>
         </div>
          <button className="btnsign w-1/2">Log In</button>
          <p className="text-sm">Don't have and account <a className="font-bold px-1" href="/signup">Sign Up</a> and join us</p>
          </div>
        </Box>
      </Modal>
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