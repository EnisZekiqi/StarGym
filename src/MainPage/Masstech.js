import { useState } from "react";
import masstechu from '../images/masstech.webp'
import { GiVanillaFlower } from "react-icons/gi";
import { GiCookie } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import Tooltip from '@mui/material/Tooltip';
import Cookies from 'js-cookie';
import { Snackbar } from "@mui/material";
import Alert from '@mui/material/Alert';
import { useEffect } from "react";
const Masstech = () => {


    const MasstechInfo = [
       {
        name:'Masstech',
        description:'2000 calories , 80g protein , 400 carbs , vitamins & minerals',
        info:'Masstech is the perfect choice to choose for gaining mass . It has a formula that has less sugar more carbs and protein for best results possible ',
        image:masstechu,
        flavor:['vanilla','strawberry','cookies'],
        weight:['1.1kg','2.3kg'],
        prices: { 'vanilla-1.1kg': '44.5$', 'vanilla-2.3kg': '62$', 'cookies-2.3kg': '60$', 'strawberry-1.1kg': '44.5$', 'strawberry-2.3kg': '62$' },
       }
    ]

    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [selectedWeight, setSelectedWeight] = useState('');
    const [price, setPrice] = useState('');
    const [notificationCart, setNotificationCart] = useState(false);

    useEffect(() => {
        const cartItem = JSON.parse(localStorage.getItem('cartItem'));
        if (cartItem) {
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
          const price = MasstechInfo[0].prices[key] || '';
          setPrice(price);
        } else {
          setPrice('');
        }
      };




      const addCart =()=>{
        const cartItem = {
            name: MasstechInfo[0].name,
            flavor: selectedFlavor,
            weight: selectedWeight,
            price: price,
            image: MasstechInfo[0].image,
          };
          localStorage.setItem('cartItem', JSON.stringify(cartItem));
          Cookies.set('cartItem', JSON.stringify(cartItem), { expires: 365 });
          setAddedCartMessage(true)
          setOpen(true)
          setTimeout(() => {
            setAddedCartMessage(false)
          }, 3000);
      }


      const [open,setOpen]=useState(false)
      const [addedCartMessage,setAddedCartMessage]=useState(false)

      const handleClose=()=>{
        setOpen(false)
      }

    return ( 
        <div className="">
            {MasstechInfo.map ((masstech,index)=>(
                <div className="flex justify-center items-center" key={index}>
                <img className="ml-20" src={masstech.image} alt={masstech.name}  width="450px" height="450px"/>
                <div className="flex flex-col gap-6 w-2/3">
                <h1 className="text-lg md:text-3xl font-bold w-fit">{masstech.name}</h1>
                <p className="text-lg font-medium w-fit">{masstech.description}</p>
                <p className="text-md font-normal w-1/2">{masstech.info}</p>
                <p className="text-sm font-light">Choose a flavor</p>
                <div className="flex gap-6 items-center">
            <Tooltip title="Vanilla">
              <button className="ml-2" onClick={() => handleFlavorSelect('vanilla')}>
                <GiVanillaFlower style={{ scale: '1.5' }} />
              </button>
            </Tooltip>
            <Tooltip title="Cookie">
              <button onClick={() => handleFlavorSelect('cookies')}>
                <GiCookie style={{ scale: '1.5' }} />
              </button>
            </Tooltip>
            <Tooltip title="Strawberry">
              <button onClick={() => handleFlavorSelect('strawberry')}>
                <GiStrawberry style={{ scale: '1.5' }} />
              </button>
            </Tooltip>
          </div>
                <p className="text-sm font-light">Choose a Weight</p>
                            <div className="input-wrapper">
                        <select className="custom-select" value={selectedWeight} onChange={handleWeightSelect}>
                        {masstech.weight.map((weight, idx) => (
                            <option key={idx} value={weight}>
                            {weight}
                            </option>
                        ))}
                        </select>
                    </div>
                    <p> Flavor: {selectedFlavor}</p>
                    <p> Weight: {selectedWeight}</p>
                    <p className="text-xl font-semibold">Price: {price}</p>
                    <button onClick={addCart} className="btnThjesht w-2/3">Add to Cart</button>
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
 
export default Masstech;
