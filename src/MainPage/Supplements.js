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
import nitrotech from '../SupplementImages/nitrotech.png'
import nitrowhey from '../SupplementImages/nitrowhey.png'
import goldwhey from '../SupplementImages/goldwhey.png'
import hydro from '../SupplementImages/hydro.png'

const Supplement = () => {
    const { darkMode } = useDarkMode()

    const { amino, weight, prework, vitamins, creatine, protein, weightloss,all } = useSupplementContext();


    const aminoMusscletech = [
        {
          name:'MuscleTech Amino Build',
          price:'55$'  ,
          shipping:'Free Shipping',
          ingrediants :'7g BCAA , 4g Leucine , 2.5g Betaine , 1g Taurine',
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
            price:'55$',
            shipping:'Free Shipping',
            ingrediants :'3.2g Beta-Alanine, 3g Creatine Monohydrate , 2.5g Betanine , 1.5g Nitrosigne',
            description:'Performance-Enhancing BCAA Formula',
            images:platinum,
            route: '/platinum',
             width:'120px',
              marginLeft:'-37px',
              brand: darkMode ? musscletechicon : musscletechicondarkmode,
              info: {
                flavor: ['Vanilla', 'Chocolate', 'Strawberry'],
                weight: ['30 Servings', '45 Servings', '50 Servings'],
                prices: {
                  'Vanilla-30 Serving': '31$',
                  'Vanilla-45 Servings': '47$',
                  'Vanilla-50 Servings': '52$',
                  'Chocolate-30 Servings': '41$',
                  'Chocolate-45 Servings': '49$',
                  'Chocolate-50 Servings': '54$',
                  'Strawberry-30 Servings': '42$',
                  'Strawberry-45 Servings': '51$',
                  'Strawberry-50 Servings': '54$',
                },
              },
        },
        {
            name:'Platinum BCAA',
            price:'25$',
            shipping:'Free Shipping',
            ingrediants :'1000mg Pure BCAA',
            description:'Promotes Muscle also Protein Synthesis',
            images:platinumbcaa,
            route: '/platinumv2',
             width:'120px',
             marginLeft:'-37px',
             scale:1.3,
             brand: darkMode ? musscletechicon : musscletechicondarkmode,
             info: {
              flavor: ['Vanilla', 'Chocolate'],
              weight: ['200 Caps','250 Caps'],
              prices: {
                'Vanilla-200 Caps': '26.5$',
                'Vanilla-250 Caps': '29.5$',
                'Chocolate-200 Caps': '28$',
                'Chocolate-250 Caps': '30$',
              },
            },
        },
    ]

////////// amino for musscletech /////////

    const aminoOptimum =[
        {
            name:'EAA Energy',
            price:'27$',
            shipping:'Free Shipping',
            ingrediants :'10g EAAs , Full EAA Blend',
            description:'Support Energy , Focus & Essential also Amino Acid Intake',
            images:eaa,
            route: '/aminobuild',
            width:'120px',
            brand: darkMode ? oplight : op,
            info: {
              flavor: ['Orange', 'Lemon'],
              weight: ['432g', '552g'],
              prices: {
                'Orange-432g': '25.3$',
                'Orange-552g': '27$',
                'Lemon-432g': '25$',
                'Lemon-552g': '27$',
              },
            },
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
        brand: darkMode ? oplight : op,
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
            name:'Amino Super',
            price:'35$',
            shipping:'Free Shipping',
            ingrediants :'Milk & Soy Ingredients , Full Amino',
            description:'Amino tablets and amino  spectrum',
            images:aminosuper,
            route: '/aminobuild',
            width:'120px',
            marginLeft:'-25px',
            brand: darkMode ? oplight : op,
            info: {
              flavor: ['Vanilla', 'Chocolate', 'Lemon'],
              weight: ['1000 Tabs', '2222 Tabs'],
              prices: {
                'Vanilla-1000 Tabs': '35$',
                'Vanilla-2222 Tabs': '49$',
                'Chocolate-1000 Tabs': '38$',
                'Chocolate-2222 Tabs': '48$',
                'Lemon-1000 Tabs': '35.4$',
                'Lemon-2222 Tabs': '44$',
              },
            },
            }
    ]
   
  /////////// amino for optimum nutrition //////////////  


  const weightMusscletech =[
    {
        name:'Masstech Elite',
        price:'55$',
        ingrediants : '2000 calories , 80g protein , 400 carbs , vitamins & minerals',
        shipping:'Free Shipping',
        description:'Mass Gainer with less sugar and more protein ',
        images:masstechh,
        route: '/masstech',
        width:'135px',
        brand: darkMode ? musscletechicon : musscletechicondarkmode,
        info: {
          flavor: ['Vanilla', 'Chocolate', 'Strawberry'],
          weight: ['1.1 kg', '2.3 kg'],
          prices: {
            'Vanilla-1.1 kg': '44.5$$',
            'Vanilla-2.3 kg': '62$',
            
            'Chocolate-1.1 kg': '50$',
            'Chocolate-2.3 kg': '68$',
            
            'Strawberry-1.1 kg': '44.5$',
            'Strawberry-2.3 kg': '60$',
           
          },
        },
    },
    {
    name:'Muscletech Mass Gainer',
    price:'62$',
    shipping:'Free Shipping',
    ingrediants : '60g protein , 1500 calories , 5g creatine , 304g carbs',
    description:'Enhance Muscle,performance & quick recovery ',
    images:massgainer,
    route: '/aminobuild',
    width:'130px',
    brand: darkMode ? musscletechicon : musscletechicondarkmode,
    info: {
      flavor: ['Vanilla', 'Cookie'],
      weight: ['2.3 kg', '4 kg'],
      prices: {
        'Vanilla-2.3 kg': '55$',
        'Vanilla-4 kg': '65$',
        
        'Cookie-2.3 kg': '58$',
        'Cookie-4 kg': '68$',
      },
    },
    },
    {
        name:'Masstech Extreme 2000',
        price:'58$',
        shipping:'48 hours Shipping',
        ingrediants : '80g protein , 2274 calories , 3g creatine , 23 vitamins & minerals',
        description:'Increase Muscle,recover fast & boost strength',
        images:extremi,
        route: '/aminobuild',
        width:'140px',
        marginLeft:'-25px',
        brand: darkMode ? musscletechicon : musscletechicondarkmode,
        info: {
          flavor: ['Cookie', 'Chocolate'],
          weight: ['3 kg', '5 kg'],
          prices: {
            'Cookie-3 kg': '55$',
            'Cookie-5 kg': '65$',
            
            'Chocolate-3 kg': '58$',
            'Chocolate-5 kg': '68$',
         
          },
        },
        }
]

////////// weight for musscletech /////////

const weightOptimum =[
    {
        name:'ON Serious Mass',
        price:'90$',
        shipping:'Free Shipping',
        ingrediants  :'1263 calories, 50g protein , 251g carbs ',
        description:' Musscle Building and Weight Gain',
        images:seriousmass,
        route: '/aminobuild',
        width:'120px',
         marginLeft:'-37px',
         brand: darkMode ? oplight : op,
         info: {
          flavor: [ 'Chocolate'],
          weight: ['5.45 kg', '7 kg'],
          prices: {
          
            'Chocolate-5.45 kg': '68$',
            'Chocolate-7 kg': '89$',

          },
        },
    }
]


////////// weight for optimum /////////

const preworkMusscletech =[
    {
        name:'MuscleTech Vapor X5',
        price:'40$',
        shipping:'Free Shipping',
        ingrediants  :'3.2g beta-Alanine, 3g creatine Monohydrate , 2.5g betanine , 1.5g nitrosigne',
        description:' Increase Strengh,performance & lean muscle ',
        images:vaport,
        route: '/vaporx5',
        width:'140px',
        brand: darkMode ? musscletechicon : musscletechicondarkmode,
        info: {
          flavor: ['Cookies', 'Chocolate', 'Strawberry'],
          weight: ['30 Servings','45 Servings','50 Servings'],
          prices: {
            'Chocolate-30 Servings': '41.5$', 'Chocolate-45 Servings': '49$','Chocolate-50 Servings': '54$',
             'Cookies-30 Servings': '42$', 'Cookies-45 Servings': '51.5$','Cookies-50 Servings': '55.7$', 
             'Strawberry-30 Servings': '38$', 'Strawberry-45 Servings': '47.5$','Strawberry-50 Servings': '51.2$'
          },
        },
    },
    {
    name:'Muscletech Vapor X5 Next Gen',
    price:'47$',
    shipping:'Free Shipping',
    ingrediants  :'3.2g beta-Alanine, 3g creatine monohydrate , 2.5g betanine , 1.5g nitrosigne',
    description:'Muscle Strength & Endurance with superior performance ',
    images:vaportinext,
    route: '/aminobuild',
    width:'140px',
    brand: darkMode ? musscletechicon : musscletechicondarkmode,
    info: {
      flavor: ['IceMelt'],
      weight: ['226g', '335g'],
      prices: {
        'IceMelt-226g': '55$',
        'IceMelt-335g': '65$',
        
      },
    },
    },
]
////////// prework for musscletech /////////
const preOptimum =[
    {
        name:'Gold Standard pre-workout',
        price:'40$',
        shipping:'72 hours Shipping',
        ingrediants  :'3.2g beta-alanine, 3g creatine monohydrate , 2.5g betanine , 1.5g nitrosigne',
        description:' Power,Performance and Energy',
        images:goldpre,
        route: '/aminobuild',
        width:'120px',
         marginLeft:'-37px',
         brand: darkMode ? oplight : op,
         info: {
          flavor: ['Fruit'],
          weight: ['30 Servings','45 Servings','50 Servings'],
          prices: {
            'Fruit-30 Servings': '55$',
            'Fruit-45 Servings': '65$',
            'Fruit-50 Servings': '75$',
          
          },
        },
    }
]

////////// prework for optimum /////////
const creatineMuscletech =[
  {
      name:'Cell Tech Creatine',
      price:'40$',
      shipping:'Free Shipping',
      ingrediants  :'175 mg caffeine , 3.5g creatine , 250 mg performance',
      description:' Hidro creatin without any carbohydrate or fat',
      images:celltech,
      route: '/celltech',
      width:'140px',
      brand: darkMode ? musscletechicon : musscletechicondarkmode,
      info: {
        flavor: ['Cookies', 'Chocolate', 'Strawberry'],
        weight:['30 Servings','120 Servings'],
        prices: { 'Chocolate-30 Servings': '41.5$','Chocolate-120 Servings': '64$',
             'Cookies-30 Servings': '42$','Cookies-120 Servings': '65.7$', 
             'Strawberry-30 Servings': '38$','Strawberry-120 Servings': '58.2$' },
      },
  },
  {
  name:'Cell Tech Creator',
  price:'47$',
  shipping:'Free Shipping',
  ingrediants  :'750mg creatine HCL, 750mg free-acid creatine',
  description:'Amplify Size,Strengh & Recovery with twice the creatine',
  images:creatori,
  route: '/aminobuild',
  width:'120px',
  brand: darkMode ? musscletechicon : musscletechicondarkmode,
  info: {
    flavor: ['Fruit'],
    weight:['30 Servings','120 Servings'],
    prices: { 'Fruit-30 Servings': '41.5$','Fruit-120 Servings': '64$', },
  },
  },
]
const creatineOptimum =[
  {
      name:'Micronised Creatine',
      price:'40$',
      shipping:'72 hours Shipping',
      ingrediants  :'100 % pure creatine monohydrate, 3g creatine',
      description:'For Power and Performance support with 100% creatine',
      images:micro,
      route: '/aminobuild',
      width:'120px',
      brand: darkMode ? oplight : op,
      info: {
        flavor: ['Fruit', 'Lemon', 'Orange'],
        weight: ['314g', '447g'],
        prices: {
          'Fruit-314g': '35$',
          'Fruit-447g': '45$',
          
          'Lemon-314g': '38$',
          'Lemon-447g': '48$',
          
          'Orange-314g': '30$',
          'Orange-447g': '40$',
        },
      },
  }
]

const ProteinMuscletech =[
  {
      name:'Nitrotech ELITE ',
      price:'45$',
      shipping:'48 hours Shipping',
      ingrediants  :'30g protein , 1.5g calcium , 300mg prohydrolase',
      description:' Muscle Strength Amplifier with 5-in-1 protein formula',
      images:nitrotech,
      route: '/celltech',
      width:'140px',
      brand: darkMode ? musscletechicon : musscletechicondarkmode,
      info: {
        flavor: ['Cookies', 'Chocolate', 'Strawberry'],
        weight:['30 Servings','120 Servings'],
        prices: { 'Chocolate-30 Servings': '41.5$','Chocolate-120 Servings': '64$',
             'Cookies-30 Servings': '42$','Cookies-120 Servings': '65.7$', 
             'Strawberry-30 Servings': '38$','Strawberry-120 Servings': '58.2$' },
      },
  },
  {
  name:'Nitrotech Whey Protein Classic',
  price:'80$',
  shipping:'Free Shipping',
  ingrediants  :'30g protein , 3g creatine , 6.6g bcaa',
  description:'Improve Recovery & Increase Strength , builds 70% more muscle',
  images:nitrowhey,
  route: '/aminobuild',
  width:'140px',
  brand: darkMode ? musscletechicon : musscletechicondarkmode,
  info: {
    flavor: ['Cookies', 'Chocolate', 'Vanilla'],
    weight:['907g','1.8 kg'],
    prices: { 'Chocolate-907g': '41.5$','Chocolate-1.8 kg': '70$',
         'Cookies-907g': '42$','Cookies-1.8 kg': '71.7$', 
         'Vanilla-907g': '38$','Vanilla-1.8 kg': '68.2$' },
  },
  },
]

const ProteinOptimum =[
  {
      name:'Whey Gold Standard',
      price:'40$',
      shipping:'72 hours Shipping',
      ingrediants  :'24g protein , 5.5g bcaa',
      description:'For muscle support & recovery',
      images:goldwhey,
      route: '/aminobuild',
      width:'140px',
      brand: darkMode ? oplight : op,
      info: {
        flavor: ['Chocolate', 'Cookie', 'Orange'],
        weight: ['907g', '1.7 kg'],
        prices: {
          'Chocolate-907g': '35$',
          'Chocolate-1.7 kg': '55$',
          
          'Cookie-907g': '38$',
          'Cookie-1.7 kg': '58$',
          
          'Orange-907g': '32$',
          'Orange-1.7 kg': '60$',
        },
      },
  },
  {
    name:'Hydro Whey',
    price:'100$',
    shipping:'Free Shipping',
    ingrediants  :'30g protein , 9.5g bcaa',
    description:'Advanced Hydrolysed whey protein isolates ',
    images:hydro,
    route: '/aminobuild',
    width:'120px',
    brand: darkMode ? oplight : op,
    info: {
      flavor: ['Milk', 'Cookie', 'Chocolate'],
      weight: ['1.6 kg', '2.2 kg'],
      prices: {
        'Milk-1.6 kg': '47$',
        'Milk-2.2 kg': '75$',
        
        'Cookie-1.6 kg': '48$',
        'Cookie-2.2 kg': '79$',
        
        'Chocolate-1.6 kg': '42$',
        'Chocolate-2.2 kg': '69$',
      },
    },
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
    ...creatineOptimum,
    ...ProteinMuscletech,
    ...ProteinOptimum
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
    :protein
    ?[ ...ProteinMuscletech, ...ProteinOptimum]
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