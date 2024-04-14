import { useState } from "react";
import { useSuccessMessage } from './SuccessMessageContext';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
const Navbar = () => {

    ///success message ///

    const { successMessage, setSuccessMessage } = useSuccessMessage();
    const [inbox,setInbox]=useState(null)
    const toggleInbox =()=>{
        setInbox(true)
    }
    const closeInbox =()=>{
        setInbox(false)
    }

    const closeMessage = ()=>{
       setSuccessMessage('')
       setInbox(true)
    }
    

    ///drawer function /// 


    const [drawer,setDrawer]=useState(false)

   

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
                   <a href=""> <p className="font-semibold">Sign Up</p></a>
                    <button onClick={()=>toggleInbox(false)} className="bg-transparent -mt-3">
                    <p className="font-semibold">Inbox</p>
                    </button>
                </div>
                <div className="showi2">
                    <button  onClick={toggleDrawer('right', true)} className="mt-4">< MenuIcon sx={{ color:"#131A0F"}}/></button>
                </div>
            </div>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            <div className='flex flex-col gap-4 justify-center items-center'  style={{ width: 200}}>
               <a className="mt-4" href="#about"><p className="font-semibold text-xl">About Us</p></a>
               <a href=""><p className="font-semibold text-xl">Sign Up</p></a>
               <a href=""><p className="font-semibold text-xl">Inbox</p></a>
            </div>
            </Drawer>
            {inbox &&
            <div className="inbox">
                <div onClick={closeInbox} className="inboxi">
                    <p className="mb-6">Inbox Opened</p>
                    {successMessage && ( 
        <div className="success-message">
          <p>{successMessage}</p>
          <button onClick={closeMessage}>Clear</button>
        </div>
      )}
                </div>
                <div className="backdrop"></div>
            </div>
            }
        </div>
     );
}
 
export default Navbar;