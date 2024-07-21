
import MenuIcon from '@mui/icons-material/Menu';
import Checkbox from '@mui/material/Checkbox';
import signup from './images/Login.svg'
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useSuccessMessage } from './SuccessMessageContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const SignUp = () => {

        const [email,setEmail]=useState('')
        const[password,setPassword]=useState('')
        const[repassword,setRepassword]=useState('')

        const [success,setSuccess]=useState(false)
        const [error,setError]=useState(false) /// error for empty spaces
        const[error2,setError2]=useState(false) /// error for 8 characters
        const[error3,setError3]=useState(false) //// error for not the same password
        const { setSuccessMessage } = useSuccessMessage();

        const handleEmail =(e)=>{
            setEmail(e.target.value)
        }

        const handlePassword =(e)=>{
            setPassword(e.target.value)
        }

        const handeRepassword =(e)=>{
            setRepassword(e.target.value)
        }

        const navigate = useNavigate();

        const toggleInput =()=>{
          if(email.trim() === '' || password.trim() === '' || repassword.trim() === '' ){
              setError(true)
              setOpen(true);
              setSuccess(false)
              setTimeout(() => {
                  setError(false)
              }, 3000);
          }else{
              setSuccess(true)
              setError(false)
              setTimeout(() => {
                  setSuccess(false)
              }, 3000);
          }
          if(password.trim().length && 8){
              setError2(true)
              setSuccess(false)
              setError(false)
              setError3(false)
              setTimeout(() => {
                  setError2(false)
              }, 3000);
          }else{
              setSuccess(true)
              setError2(false)
              setTimeout(() => {
                  setSuccess(false)
              }, 3000);
          }
          
          if(repassword.trim() && password.trim()){
              setError3(true)
              setError(false)
              setError2(false)
              setSuccess(false)
              const formData = [email, password, repassword];
              setSuccessMessage(formData);
              setTimeout(() => {
                  setError3(false)
              }, 3000)
          }else{
              setSuccess(true)
              setError3(false)
              setTimeout(() => {
                  setSuccess(false)
              }, 3000);
          }
          if (email.trim() !== '' && password.trim() !== '' && repassword.trim() !== '' && repassword.trim() === password.trim() ) {
              setSuccess(true);
              setTimeout(() => {
                Cookies.remove('notes');
              Cookies.remove('favorites');
              Cookies.remove('bookmarks');
              Cookies.remove('gender');
              Cookies.remove('country');
              Cookies.remove('avatar');
              Cookies.remove('description');
              localStorage.removeItem('selectedImageURL');
              localStorage.removeItem('cartItems');
              localStorage.removeItem('friends')
              Cookies.remove('cartItems')
              Cookies.remove('selectedWorkoutPlan')
              Cookies.remove('workoutData')
              Cookies.remove('selectedNutri')
                navigate('/editprofile');
              }, 3000);
            } else {
              setSuccess(false);
            }
      

      }
        const [open, setOpen] = useState(false);
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
        
            setOpen(false);
          };
          const [visibilityOn, setVisibilityOn] = useState(false);
          const [visibilityOff,setVisibilityOff]=useState(false)

          const toggleVisibility = () => {
              setVisibilityOn(!visibilityOn);
          };

          const toggleVisibility2 =()=>{
            setVisibilityOff(!visibilityOff)
          }

    return ( 
        <div className="gradient">
            <div className="flex flex-col  justify-center">
            <div className="flex justify-between ">
              <a href="/"> <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1></a>
  
             </div>
                   <center>
                    <div className="signup flex flex-col lg:flex-row items-center align-center mt-20 justify-between container mx-auto px-4">
                      <div className="coll1 flex flex-col items-center justify-center mt-4 lg:mt-0">
                            <h1 className='text-3xl font-bold'>Create your account</h1>
                            <p className='text-md font-normal'>Join us for the best experience</p>
                                <div className=" mt-6 flex flex-col gap-6">
                                <div class="input-wrapper">
                                <input value={email} onChange={handleEmail} type="text" placeholder="Email" name="text" class="input"/>
                                </div>
                                <div className="input-wrapper">
                                    <input  
                                        value={password} 
                                        onChange={handlePassword} 
                                        type={visibilityOn ? "text" : "password"} 
                                        placeholder="Password" 
                                        name="text" 
                                        className="input ml-8 mr-2"
                                    />
                                    {visibilityOn ? (
                                        <VisibilityIcon onClick={toggleVisibility} sx={{cursor:"pointer",color:"#475E36"}}/>
                                    ) : (
                                        <VisibilityOffIcon onClick={toggleVisibility} sx={{cursor:"pointer",color:"#475E36"}}/>
                                    )}
                                </div>
                                <div className="input-wrapper">
                                    <input 
                                        value={repassword} 
                                        onChange={handeRepassword} 
                                        type={visibilityOff ? "text" : "password"} 
                                        placeholder="Re-type Password" 
                                        name="text" 
                                        className="input ml-8 mr-2"
                                    />
                                    {visibilityOff ? (
                                        <VisibilityIcon onClick={toggleVisibility2} sx={{cursor:"pointer",color:"#475E36"}}/>
                                    ) : (
                                        <VisibilityOffIcon onClick={toggleVisibility2} sx={{cursor:"pointer",color:"#475E36"}}/>
                                    )}
                                </div>
                               <div className="flex items-center gap-2">
                                <div className="">
                                <Checkbox  defaultChecked  sx={{color:"#475E36", fill:"#475E36"}}/>
                                </div>
                                <p className='text-xs font-normal w-full'>I agree to the terms and conditions</p>
                               </div>
                                <button onClick={toggleInput} className='btnsign'>Sign up</button>
                             </div>
                      </div>
                      <div className="colli w-full h-full">
                        <img className='img-sign' width="350px" height="350px" src={signup} alt="" />
                      </div>
                    </div>
                    
                    </center>
            </div>
        
                {error && 
                        <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Note archived"
                        
                      >
                      <Alert
                    severity="error"
                     variant="filled"
                    sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'50px'}}
                     >
                    <p>Fill out the fields </p>
                    </Alert>
                      </Snackbar>
                }
                {error2 && 
                        <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Note archived"
                        
                      >
                      <Alert
                    severity="error"
                     variant="filled"
                    sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'50px'}}
                     >
                    <p>Password must have 8 characters </p>
                    </Alert>
                      </Snackbar>
                }
                {error3 && 
                        <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Note archived"
                        
                      >
                      <Alert
                    severity="error"
                     variant="filled"
                    sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'50px'}}
                     >
                    <p>Password must be the same </p>
                    </Alert>
                      </Snackbar>
                }
                {success && 
                <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                
              >
              <Alert
            severity="success"
             variant="filled"
            sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'50px'}}
             >
            <p>Signup was filled successfully </p>
            </Alert>
              </Snackbar>
                }
            <div className="empty"></div>
            <div className="empty2"></div>
        </div>
     );
}
 
export default SignUp;