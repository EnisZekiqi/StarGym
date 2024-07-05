import { useState } from "react";
import Vportx from '../images/vaportixx.webp'
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
import NavbarGeneralSupplement from "./NavbarGeneralSupplement";
import musscletechicon from '../images/musscletechicon-removebg-preview.png'
import musscletechicondarkmode from '../images/musscletechicondarkmode-removebg-preview.png'
import { useSupplementContext } from '../useSupplementContext ';
import op from '../images/op-removebg-preview.png'
import oplight from '../images/oplight-removebg-preview.png'
import amino1 from '../SupplementImages/amino1-removebg-preview.png'
import platinum from '../SupplementImages/mt-gluta-265x331-removebg-preview.png'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import platinumbcaa from '../SupplementImages/platinumbcaa-removebg-preview.png'
import eaa from '../SupplementImages/eaa-removebg-preview.png'
import gluta from '../SupplementImages/gluta-removebg-preview.png'
import aminosuper from '../SupplementImages/aminosuper-removebg-preview.png'
import TimerIcon from '@mui/icons-material/Timer';
import seriousmass from '../SupplementImages/seriousmass.png'
import masstechh from '../images/masstech.webp'
import massgainer from '../SupplementImages/mass-gainer-min.png'
import extremi from '../SupplementImages/extremi-removebg-preview.png'
import vaport from '../images/vaportixx.webp'
import goldpre from '../SupplementImages/goldpre.png'
import vaportinext from '../SupplementImages/vaportinext.png'
import celltech from '../images/cellmax.webp'
import creatori from '../SupplementImages/creatori.png'
import micro from '../SupplementImages/micro.png'
import SupplementDetail from "./SupplementDetail";


const Supplement = () => {
    const { darkMode } = useDarkMode()

    const { amino, weight, prework, vitamins, creatine, protein, weightloss } = useSupplementContext();


    const aminoMusscletech = [
        {
          name:'MuscleTech Amino Build',
          price:'55$'  ,
          shipping:'Free Shipping',
          description:'Performance-Enhancing BCAA Formula',
          images:amino1,
          route: '/aminobuild',
          width:'120px',
           marginLeft:'-37px',
           brand: darkMode ? musscletechicon : musscletechicondarkmode,
           info: {
            flavor: ['Vanilla', 'Chocolate', 'Strawberry'],
            weight: ['1 lb', '2 lbs', '5 lbs'],
            prices: {
              'Vanilla-1 lb': '55$',
              'Vanilla-2 lbs': '65$',
              'Vanilla-5 lbs': '75$',
              'Chocolate-1 lb': '58$',
              'Chocolate-2 lbs': '68$',
              'Chocolate-5 lbs': '78$',
              'Strawberry-1 lb': '60$',
              'Strawberry-2 lbs': '70$',
              'Strawberry-5 lbs': '80$',
            },
          },
        },
        {
            name:'Platinum Glutamine',
            price:'60$',
            shipping:'Free Shipping',
            description:'Performance-Enhancing BCAA Formula',
            images:platinum,
            route: '/platinum',
             width:'120px',
              marginLeft:'-37px',
              brand: darkMode ? musscletechicon : musscletechicondarkmode,
              info: {
                flavor: ['Vanilla', 'Chocolate', 'Strawberry'],
                weight: ['1 lb', '2 lbs', '5 lbs'],
                prices: {
                  'Vanilla-1 lb': '55$',
                  'Vanilla-2 lbs': '65$',
                  'Vanilla-5 lbs': '75$',
                  'Chocolate-1 lb': '58$',
                  'Chocolate-2 lbs': '68$',
                  'Chocolate-5 lbs': '78$',
                  'Strawberry-1 lb': '60$',
                  'Strawberry-2 lbs': '70$',
                  'Strawberry-5 lbs': '80$',
                },
              },
        },
        {
            name:'Platinum BCAA',
            price:'25$',
            shipping:'Free Shipping',
            description:'Promotes Muscle also Protein Synthesis',
            images:platinumbcaa,
            route: '/platinumv2',
             width:'120px',
             marginLeft:'-37px',
             scale:1.3,
             brand: darkMode ? musscletechicon : musscletechicondarkmode
             
        },
    ]

////////// amino for musscletech /////////

    const aminoOptimum =[
        {
            name:'EAA Energy',
            price:'40$',
            shipping:'Free Shipping',
            description:'Support Energy , Focus & Essential also Amino Acid Intake',
            images:eaa,
            route: '/aminobuild',
            width:'120px',
            brand: darkMode ? oplight : op
        },
        {
        name:'Glutanime Muscle',
        price:'35$',
        shipping:'Free Shipping',
        description:'Glutamine Powder for better  recovery ',
        images:gluta,
        route: '/aminobuild',
        width:'120px',
        marginLeft:'-13px',
        brand: darkMode ? oplight : op
        },
        {
            name:'Amino Super',
            price:'35$',
            shipping:'Free Shipping',
            description:'Amino tablets and amino  spectrum',
            images:aminosuper,
            route: '/aminobuild',
            width:'120px',
            marginLeft:'-25px',
            brand: darkMode ? oplight : op
            }
    ]
   
  /////////// amino for optimum nutrition //////////////  


  const weightMusscletech =[
    {
        name:'Masstech Elite',
        price:'55$',
        shipping:'Free Shipping',
        description:'Mass Gainer with less sugar and more protein ',
        images:masstechh,
        route: '/masstech',
        width:'135px',
        brand: darkMode ? musscletechicon : musscletechicondarkmode
    },
    {
    name:'Muscletech Mass Gainer',
    price:'62$',
    shipping:'Free Shipping',
    description:'Enhance Muscle,performance & quick recovery ',
    images:massgainer,
    route: '/aminobuild',
    width:'130px',
    brand: darkMode ? musscletechicon : musscletechicondarkmode
    },
    {
        name:'Masstech Extreme 2000',
        price:'58$',
        shipping:'48 hours Shipping',
        description:'Increase Muscle,recover fast & boost strength',
        images:extremi,
        route: '/aminobuild',
        width:'140px',
        marginLeft:'-25px',
        brand: darkMode ? musscletechicon : musscletechicondarkmode
        }
]

////////// weight for musscletech /////////

const weightOptimum =[
    {
        name:'ON Serious Mass',
        price:'90$',
        shipping:'Free Shipping',
        description:' Musscle Building and Weight Gain',
        images:seriousmass,
        route: '/aminobuild',
        width:'120px',
         marginLeft:'-37px',
         brand: darkMode ? oplight : op
    }
]


////////// weight for optimum /////////

const preworkMusscletech =[
    {
        name:'MuscleTech Vapor X5',
        price:'40$',
        shipping:'Free Shipping',
        description:' Increase Strengh,performance & lean muscle ',
        images:vaport,
        route: '/vaporx5',
        width:'140px',
        brand: darkMode ? musscletechicon : musscletechicondarkmode
    },
    {
    name:'Muscletech Vapor X5 Next Gen',
    price:'47$',
    shipping:'Free Shipping',
    description:'Muscle Strength & Endurance with superior performance ',
    images:vaportinext,
    route: '/aminobuild',
    width:'140px',
    brand: darkMode ? musscletechicon : musscletechicondarkmode
    },
]
////////// prework for musscletech /////////
const preOptimum =[
    {
        name:'Gold Standard pre-workout',
        price:'40$',
        shipping:'72 hours Shipping',
        description:' Power,Performance and Energy',
        images:goldpre,
        route: '/aminobuild',
        width:'120px',
         marginLeft:'-37px',
         brand: darkMode ? oplight : op
    }
]

////////// prework for optimum /////////
const creatineMuscletech =[
  {
      name:'Cell Tech Creatine',
      price:'40$',
      shipping:'Free Shipping',
      description:' Hidro creatin without any carbohydrate or fat',
      images:celltech,
      route: '/celltech',
      width:'140px',
      brand: darkMode ? musscletechicon : musscletechicondarkmode
  },
  {
  name:'Cell Tech Creator',
  price:'47$',
  shipping:'Free Shipping',
  description:'Amplify Size,Strengh & Recovery with twice the creatine',
  images:creatori,
  route: '/aminobuild',
  width:'120px',
  brand: darkMode ? musscletechicon : musscletechicondarkmode
  },
]
const creatineOptimum =[
  {
      name:'Micronised Creatine',
      price:'40$',
      shipping:'72 hours Shipping',
      description:'For Power and Performance support with 100% creatine',
      images:micro,
      route: '/aminobuild',
      width:'120px',
      brand: darkMode ? oplight : op
  }
]

const combinedItems = [
    ...aminoMusscletech,
    ...aminoOptimum,
    ...weightMusscletech,
    ...weightOptimum,
    ...preworkMusscletech,
    ...preOptimum,
    ...creatineMuscletech,
    ...creatineOptimum
  ];

  // Determine items to display
  const itemsToDisplay = amino
    ? [...aminoMusscletech, ...aminoOptimum]
    : weight
    ? [...weightMusscletech, ...weightOptimum]
    : prework
    ? [...preworkMusscletech, ...preOptimum]
    : creatine
    ? [...creatineMuscletech, ...creatineOptimum]
    : combinedItems;


const [defaultShow,setDefaultShow]=useState(true)

useEffect(() => {
    if (amino || weight || prework || vitamins || creatine || protein || weightloss) {
      setDefaultShow(false);
    }
  }, [amino, weight, prework, vitamins, creatine, protein, weightloss]);


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


      const [selectedSupplement, setSelectedSupplement] = useState(null); ///// selected supplement to show more details
     
       const handleButtonClick = (supplement) => {
    setSelectedSupplement(supplement);
  };  //// the access to get you there 

  const handleBackToList = () => {
    setSelectedSupplement(null);
  };  ////// go back to the all supplements 

  const groupByBrand = (items) => {
    return items.reduce((acc, item) => {
      const brand = item.brand || 'Unknown';
      if (!acc[brand]) acc[brand] = [];
      acc[brand].push(item);
      return acc;
    }, {});
  }; ///// specify supplements by brand 

  const groupedItems = groupByBrand(itemsToDisplay);
 const btnBuy = darkMode ? "btnnorway":"btnnorway2"
    return ( 
        <div 
        className="h-full "
        style={{backgroundColor: darkMode ? '#FAFBF9':"#050604",color: darkMode ? '#050604':"#FAFBF9"}}
        >
            <NavbarGeneralSupplement/>
            <div>
      {selectedSupplement ? (
        <SupplementDetail supplement={selectedSupplement} handleBackToList={handleBackToList} />
      ) : (
        <div>
          {Object.keys(groupedItems).map((brand) => (
            <div key={brand} className="brand-section">
              <img src={brand} width="200px"></img>
              <div className="flex flex-wrap justify-center gap-6">
                {groupedItems[brand].map((item, index) => (
                  <div
                    key={index}
                    className="brawl p-6 flex flex-col items-center m-2"
                    style={{
                      backgroundColor: 'rgb(71,94,54,5%)',
                      borderRadius: '10px',
                      boxShadow: '0 0.4rem #94b57d',
                      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                      border: '0.2px solid rgba(82, 82, 82,0.3)',
                      width: 'calc(33% - 16px)',
                      minWidth: '310px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 1rem #94b57d';
                      e.currentTarget.style.transform = 'translateY(-0.5rem)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 0.4rem #94b57d';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div className="flex justify-start items-start w-full -mt-3 -ml-3">
                      <div className="shipping p-1">
                        {item.shipping === 'Free Shipping' ? (
                          <span>
                            <LocalShippingIcon sx={{ marginRight: '4px' }} />
                            {item.shipping}
                          </span>
                        ) : (
                          <span>
                            <TimerIcon />
                            {item.shipping}
                          </span>
                        )}
                      </div>
                    </div>
                    <img src={item.images} alt={item.name} width={item.width} scale={item.scale} className="mt-3" />
                    <p className="mt-3 font-bold text-start w-full px-3 text-lg sm:text-xl">{item.name}</p>
                    <p className="px-3 mt-2 font-normal text-start">{item.description}</p>
                    <p className="text-start w-full px-3 mt-2 font-semibold text-md sm:text-xl">{item.price}</p>
                    <button className={` ${btnBuy} w-full px-28` }
                    style={{color:darkMode ? "#050604 ":"#FAFBF9"}}
                    onClick={() => handleButtonClick(item)}>
                      More Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
       <div className="empty"></div>
        </div>
     );
}
 
export default Supplement;