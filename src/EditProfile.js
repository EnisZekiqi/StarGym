import { useSuccessMessage } from './SuccessMessageContext';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const EditProfile = () => {
    const { formDataArray } = useSuccessMessage();

  // Extract email and password from the form data array
  const email = formDataArray[0];
  const password = formDataArray[1];

  const [nickname,setNickname]=useState('')
  const [color,setColor]=useState('#475E36')

  const handleNickname =(e)=>{
    setNickname(e.target.value)
  }

  const handleSubmit = () => {
    if (nickname.trim()) {
      const firstLetter = nickname.trim().charAt(0).toUpperCase(); // Extract the first letter and convert it to uppercase
      // Set the default avatar photo using the first letter
      // For example, you can set it as the background image of a div
      // Here's a basic example:
      const defaultAvatar = document.getElementById('defaultAvatar');
      defaultAvatar.textContent = firstLetter;
    }
   
  };

  const handleColorChange = (e) => {
    setColor(e.target.value); // Update the color state with the selected color
  };

  const[file,setFile]=useState(null)

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
  
  const targetFile =(e)=>{
    const selectedFile = e.target.files[0]; // Get the selected file

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFile(reader.result); // Update the file state with the data URL of the selected file
      };
      reader.readAsDataURL(selectedFile); // Convert the file to a data URL
    }
  }

  return (
    <div>
      <div className="backdrop"><div className="loader"></div></div>
        <h1 className="font-bold ml-4 text-3xl mt-4 mb-4">StarGym</h1>
        <div className="empty"></div>
          <div className="container mx-auto px-4 ">
            <h1 className='font-bold text-2xl'>Account</h1>
            <h1 className='font-semibold text-lg mt-2'>Account Information</h1>
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-8 md:gap-0">
            <ul className='mt-4'>
            <li><b>Email :</b> {email}</li>
            <div class="input-wrapper2 mt-4 -ml-2">
            <input value={nickname} onChange={handleNickname} type="text" placeholder="Nickname" name="text" class="input"/>
            </div>
          </ul>
          <div className="xx flex flex-col items-center justify-center">
          <h1 className='font-semibold text-lg mt-2'>Avatar</h1>
          <div id="defaultAvatar" style={{backgroundColor:color }}  className="avatar flex text-center justify-center mt-4 font-semibold text-3xl">
          <Avatar sx={{scale:1.5}} style={{backgroundColor: color ,width:100,height:100}} src={file} />
          </div>
            <div className="flex mt-4 gap-2">
               <Button
               sx={{border:"1px solid #475E36",color:"#475E36"}}
               variant="outlined"
      component="label"
      role={undefined}
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload Photo
      <VisuallyHiddenInput style={{ display: 'none' }}  onChange={targetFile} type="file" />
    </Button>
          <input  value={color} onChange={handleColorChange} className='cursor-pointer mt-2' type="color" id="favcolor" name="favcolor" />
            </div>
          </div>
          <div className="xx">
          <h1 className='font-semibold text-lg mt-2'>Avatar</h1>
          </div>
            </div>
          </div>
          <button onClick={handleSubmit}>Submit</button>
    </div>
  );

}
 
export default EditProfile;