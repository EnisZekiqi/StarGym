import { useState } from "react";
import platinum from '../images/pllatinumi.webp'
import { GiVanillaFlower } from "react-icons/gi";
import { GiCookie } from "react-icons/gi";
import { GiChocolateBar } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import Tooltip from '@mui/material/Tooltip';
import Cookies from 'js-cookie';
import { Snackbar } from "@mui/material";
import Alert from '@mui/material/Alert';
import { useEffect } from "react";
import NavbarGeneral from "./NavbarGeneral";
import { useDarkMode } from "../DarkModeContext";

const Platinum = () => {
    const { darkMode } = useDarkMode()

    const PlatinumInfo = [
       {
        name:'Platinum',
        description:'3.2g Beta-Alanine, 3g Creatine Monohydrate , 2.5g Betanine , 1.5g Nitrosigne',
        info:'VaporX has an expolisve energy and performance for your best and heavy workout , it has less less suggar and more amino acids',
        image:platinum,
        flavor:['chocolate','vanilla','cookies'],
        weight:['30 Servings','45 Servings','50 Servings'],
        prices: { 'chocolate-30 Servings': '41.5$', 'chocolate-45 Servings': '49$','chocolate-50 Servings': '54$',
             'cookies-30 Servings': '42$', 'cookies-45 Servings': '51.5$','cookies-50 Servings': '55.7$', 
             'vanilla-30 Servings': '38$', 'vanilla-45 Servings': '47.5$','vanilla-50 Servings': '51.2$' },
       }
    ]

    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [selectedWeight, setSelectedWeight] = useState('');
    const [price, setPrice] = useState('');
    const [notificationCart, setNotificationCart] = useState(false);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (cartItems.length > 0) {
          setNotificationCart(true);
        }
      }, []);
    
    

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
          const price = PlatinumInfo[0].prices[key] || '';
          setPrice(price);
        } else {
          setPrice('');
        }
      };




      const addCart = () => {
        const newCartItem = {
          name: PlatinumInfo[0].name,
          flavor: selectedFlavor,
          weight: selectedWeight,
          price: price,
          image: PlatinumInfo[0].image,
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

      const handleClose=()=>{
        setOpen(false)
      }

      const btnBuy = darkMode ? "btnThjesht":"btnThjesht2"

    return ( 
        <div className=""
        style={{backgroundColor:darkMode ?"#FAFBF9":"#050604"}}
        >
          <NavbarGeneral/>
            {PlatinumInfo.map ((platinum,index)=>(
                <div className="flex flex-col md:flex-row justify-center items-center" key={index}
                style={{color:darkMode ?"#050604":"#FAFBF9"}}
                >
                <img className="ml-0 md:ml-20 mt-0 md:-mt-24" src={platinum.image} alt={platinum.name}  width="450px" height="450px"/>
                <div className="flex flex-col gap-6 w-full md:w-2/3 items-center md:items-stretch ">
                <h1 className="text-xl md:text-3xl font-bold w-fit mt-8 text-center md:text-start">{platinum.name}</h1>
                <p className="text-lg font-medium w-full md:w-fit text-center md:text-start px-4">{platinum.description}</p>
                <p className="text-md font-normal w-full md:w-1/2 text-center md:text-start  px-4">{platinum.info}</p>
                <p className="text-sm font-light">Choose a flavor</p>
                <div className="flex gap-6 items-center">
            <Tooltip title="Chocolate">
              <button className="ml-2" onClick={() => handleFlavorSelect('chocolate')}>
                <GiChocolateBar style={{ scale: '1.5' }} />
              </button>
            </Tooltip>
            <Tooltip title="Cookie">
              <button onClick={() => handleFlavorSelect('cookies')}>
                <GiCookie style={{ scale: '1.5' }} />
              </button>
            </Tooltip>
            <Tooltip title="Vanilla">
              <button onClick={() => handleFlavorSelect('vanilla')}>
                <GiVanillaFlower style={{ scale: '1.5' }} />
              </button>
            </Tooltip>
          </div>
                <p className="text-sm font-light">Choose a Weight</p>
                            <div className="input-wrapper">
                        <select className="custom-select" value={selectedWeight} onChange={handleWeightSelect}>
                        {platinum.weight.map((weight, idx) => (
                            <option key={idx} value={weight}>
                            {weight}
                            </option>
                        ))}
                        </select>
                    </div>
                    <p> Flavor: {selectedFlavor}</p>
                    <p> Servings: {selectedWeight}</p>
                    <p className="text-xl font-semibold">Price: {price}</p>
                    <button onClick={addCart} className={` ${btnBuy} w-2/3 mb-32`}>Add to Cart</button>
                </div>
                <p></p>
                <p></p>
                </div>
            ))}
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
 
export default Platinum;