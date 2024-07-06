import { useState,useEffect } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDarkMode } from "../DarkModeContext";
import { GiVanillaFlower } from "react-icons/gi";
import { GiCookie } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import Cookies from 'js-cookie';
import { Snackbar } from "@mui/material";
import Alert from '@mui/material/Alert';
import { GiLemon } from "react-icons/gi";
import { GiOrangeSlice } from "react-icons/gi";
const SupplementDetail = ({ supplement,handleBackToList }) => {

    const { darkMode } = useDarkMode()

    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [selectedWeight, setSelectedWeight] = useState('');
    const [price, setPrice] = useState('');
  
    const handleFlavorSelect = (flavor) => {
        setSelectedFlavor(flavor);
        updatePrice(flavor, selectedWeight);
      };
    
      const handleWeightSelect = (event) => {
        const weight = event.target.value;
        setSelectedWeight(weight);
        updatePrice(selectedFlavor, weight);
      };
    
      const updatePrice = (flavor, weight) => {
        if (flavor && weight) {
          const key = `${flavor}-${weight}`;
          const selectedPrice = supplement.info.prices[key] || '';
          setPrice(selectedPrice);
        } else {
          setPrice('');
        }
      };
     
      const addCart = () => {
        const newCartItem = {
          name: supplement.name,
          flavor: selectedFlavor,
          weight: selectedWeight,
          price: price,
          image: supplement.images,
        };
    
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedCartItems = [...existingCartItems, newCartItem];
    
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        Cookies.set('cartItems', JSON.stringify(updatedCartItems), { expires: 365 });
    
        setAddedCartMessage(true);
        setOpen(true);
        setTimeout(() => {
          setAddedCartMessage(false);
        }, 3000);
      };
      const [open,setOpen]=useState(false)
      const [addedCartMessage,setAddedCartMessage]=useState(false)

      const handleClose = () => {
        setOpen(false);
      };
    
 const btnBuy = darkMode ? "btnThjesht":"btnThjesht2"

    return ( 
        <div className="">
        <button className="mt-8 ml-8" onClick={handleBackToList}><ArrowBackIcon style={{ scale: '1.5' }} /></button>
       <div className="flex flex-col md:flex-row justify-center items-center">
       <img className="ml-0 md:ml-28 mt-0 md:-mt-20" src={supplement.images} alt={supplement.name} width="250px" height="450px" />
        <div className="flex flex-col gap-6 w-full md:w-2/3 items-center md:items-start ml-0 md:ml-28 ">
        <h2 className="text-xl md:text-3xl font-bold w-fit mt-8 text-center md:text-start">{supplement.name}</h2>
        <p className="text-lg font-medium w-full md:w-fit text-center md:text-start px-4 md:px-0">{supplement.ingrediants}</p>
        <p> {supplement.description}</p>
        <p className="text-sm font-light">Choose a flavor:</p>
      <div>
        {supplement.info.flavor.map((flavor, index) => (
          <button key={index} onClick={() => handleFlavorSelect(flavor)}>
            {flavor === 'Vanilla' && <GiVanillaFlower style={{ scale: '1.5',marginRight:25 }} />}
            {flavor === 'Chocolate' && <GiCookie style={{ scale: '1.5',marginRight:25 }}/>}
            {flavor === 'Strawberry' && <GiStrawberry style={{ scale: '1.5' }} />}
            {flavor === 'Lemon' && <GiLemon style={{ scale: '1.5' }} />}
            {flavor === 'Orange' && <GiOrangeSlice style={{ scale: '1.5',marginRight:25 }} />}
          </button>
        ))}
      </div>
      <p className="text-sm font-light">Choose a weight:</p>
      <div>
      <div className="input-wrapper">
      <select className="custom-select" value={selectedWeight} onChange={handleWeightSelect}>
          {supplement.info.weight.map((weight, index) => (
            <option key={index} value={weight}>
              {weight}
            </option>
          ))}
        </select>
      </div>
      </div>
      <p>Flavor: {selectedFlavor}</p>
      <p>Weight: {selectedWeight}</p>
      <p className="text-xl font-semibold">Price: {price}</p>

      <button className={` ${btnBuy} w-2/3 mb-28`} onClick={addCart}>Add to Cart</button>
        </div>
       
       </div>
       {addedCartMessage && 
      <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      
    >
        <Alert
      severity="success"
      variant="filled"
      sx={{width:"fit-content" ,marginLeft:'20px',marginTop:'20px'}}
      >
      <p>The product added to Cart </p>
      </Alert>
        </Snackbar>
      }
      </div>
      
     );
}
 
export default SupplementDetail;