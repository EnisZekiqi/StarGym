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
import extremi from '../SupplementImages/extremi.jpeg'
import vaport from '../images/vaportixx.webp'

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
          width:'120px'
        },
        {
            name:'Platinum Glutamine',
            price:'60$',
            shipping:'Free Shipping',
            description:'Performance-Enhancing BCAA Formula',
            images:platinum,
            route: '/platinum',
             width:'120px'
        },
        {
            name:'Platinum BCAA',
            price:'25$',
            shipping:'Free Shipping',
            description:'Promotes Muscle also Protein Synthesis',
            images:platinumbcaa,
            route: '/platinumv2',
             width:'120px',
             scale:1.3
             
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
            width:'120px'
        },
        {
        name:'Glutanime Muscle',
        price:'35$',
        shipping:'Free Shipping',
        description:'Glutamine Powder for better  recovery ',
        images:gluta,
        route: '/aminobuild',
        width:'120px',
        marginLeft:'-13px'
        },
        {
            name:'Amino Super',
            price:'35$',
            shipping:'Free Shipping',
            description:'Amino tablets and amino  spectrum',
            images:aminosuper,
            route: '/aminobuild',
            width:'120px',
            marginLeft:'-25px'
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
    },
    {
    name:'Muscletech Mass Gainer',
    price:'62$',
    shipping:'Free Shipping',
    description:'Enhance Muscle,performance & quick recovery ',
    images:massgainer,
    route: '/aminobuild',
    width:'130px',
    },
    {
        name:'Masstech Extreme 2000',
        price:'58$',
        shipping:'48 hours Shipping',
        description:'Increase Muscle,recover fast & boost strength',
        images:extremi,
        route: '/aminobuild',
        width:'140px',
        marginLeft:'-25px'
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
         marginLeft:'-37px'
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
        width:'135px',
    },
    {
    name:'Muscletech Mass Gainer',
    price:'62$',
    shipping:'Free Shipping',
    description:'Enhance Muscle,performance & quick recovery ',
    images:massgainer,
    route: '/aminobuild',
    width:'130px',
    },
    {
        name:'Masstech Extreme 2000',
        price:'58$',
        shipping:'48 hours Shipping',
        description:'Increase Muscle,recover fast & boost strength',
        images:extremi,
        route: '/aminobuild',
        width:'140px',
        marginLeft:'-25px'
        }
]

const preOptimum =[
    {
        name:'ON Serious Mass',
        price:'90$',
        shipping:'Free Shipping',
        description:' Musscle Building and Weight Gain',
        images:seriousmass,
        route: '/aminobuild',
        width:'120px',
         marginLeft:'-37px'
    }
]

const combinedItems = [
    ...aminoMusscletech,
    ...aminoOptimum,
    ...weightMusscletech,
    ...weightOptimum,
  ];

  // Determine items to display
  const itemsToDisplay = amino
    ? [...aminoMusscletech, ...aminoOptimum]
    : weight
    ? [...weightMusscletech, ...weightOptimum]
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

    return ( 
        <div 
        className="h-full "
        style={{backgroundColor: darkMode ? '#FAFBF9':"#050604",color: darkMode ? '#050604':"#FAFBF9"}}
        >
            <NavbarGeneralSupplement/>
            <div className=""
            style={{backgroundColor: darkMode ? '#FAFBF9':"#050604"}}
            >
                {defaultShow &&
  <div>
    <div className="emptyyy"></div>
    <div className="flex flex-wrap justify-center mt-12">
    {itemsToDisplay.map((item, index) => (
      <div
        key={index}
        className="brawl p-6 flex flex-col items-center m-2"
        style={{
          backgroundColor: 'rgb(71,94,54,5%)',
          borderRadius: '10px',
          boxShadow: '0 0.4rem #94b57d',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          border: '0.2px solid rgba(82, 82, 82,0.3)',
          width: 'calc(33% - 16px)', // Adjust width to control number of columns
          minWidth: '310px', // Ensure items have a minimum width
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
        <img src={item.images} alt={item.images} width={item.width} scale={item.scale} className="mt-3" />
        <p className="mt-3 font-bold text-start w-full px-3 text-lg sm:text-xl">{item.name}</p>
        <p
          className={`px-3 mt-2 font-normal text-start ${windowWidth <= 768 ? 'zero-margin-on-small' : ''}`}
          style={{ marginLeft: windowWidth > 768 ? item.marginLeft : '0px' }}
        >
          {item.description}
        </p>
        <p className="text-start w-full px-3 mt-2 font-semibold text-md sm:text-xl">{item.price}</p>
        <a href={item.route}>
          <button className="btnsign w-full px-28">More Details</button>
        </a>
      </div>
    ))}
  </div>
  </div>
}
                <div className="flex flex-col ml-6 mr-6 items-center md:items-stretch">
                   {darkMode ? <img src={musscletechicon} width="200px"/> : <img src={musscletechicondarkmode}  width="200px"/>}
                  <div className="flex justify-between">
                  {amino && (
                    <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-12 lg:gap-0">
                        {aminoMusscletech.map((aminoItem, index) => (
                            <div key={index} className="brawl p-6 flex flex-col items-center"
                            style={{backgroundColor:"rgb(71,94,54,5%)",borderRadius:'10px',
                                boxShadow: '0 0.4rem #94b57d',
                                 transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                                 border:'0.2px solid rgba(82, 82, 82,0.3)'
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
                                <div className="shipping  p-1">
                                 <LocalShippingIcon/>  {aminoItem.shipping}
                                </div>
                                </div>
                                <img src={aminoItem.images} alt={aminoItem.images} width={aminoItem.width} scale={aminoItem.scale} className="mt-3" />
                                <p className="mt-3 font-bold text-start w-full px-3 text-lg sm:text-xl">{aminoItem.name}</p>
                                <p className="px-3 mt-2 font-normal">{aminoItem.description}</p>
                                <p className="text-start w-full px-3 mt-2 font-semibold text-md sm:text-xl">{aminoItem.price}</p>
                                <a href={aminoItem.route}><button className="btnsign w-full px-28">More Details</button></a>
                            </div>
                        ))}
                    </div>
)}
                  </div>
                  {amino || weight || prework || vitamins || creatine || protein || weightloss ? 
                  ''
                  :<div>
                  {darkMode ? <img src={oplight} width="200px"/> : <img src={op}  width="200px" className="mt-6 md:mt-0"/>}
              </div>
                  }
                    {amino && <div>
                        <div className="flex flex-col lg:flex-row justify-between w-full items-start md:items-center gap-12 lg:gap-0">
                        {aminoOptimum.map ((amino,index)=>(
                        <div key={index} className="brawl p-6 flex flex-col items-center"
                        style={{backgroundColor:"rgb(71,94,54,5%)",borderRadius:'10px',
                            boxShadow: '0 0.4rem #94b57d',
                             transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                             border:'0.2px solid rgba(82, 82, 82,0.3)'
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
                                <div className="shipping  p-1">
                                 <LocalShippingIcon/>  {amino.shipping}
                                </div>
                                </div>
                                <img src={amino.images} alt={amino.images} width={amino.width} scale={amino.scale} className="mt-3" />
                                <p className="mt-3 font-bold text-start w-full px-3 text-lg sm:text-xl">{amino.name}</p>
                                <p
                        className={`px-3 mt-2 font-normal text-start ${windowWidth <= 768 ? 'zero-margin-on-small' : ''}`}
                        style={{ marginLeft: windowWidth > 768 ? amino.marginLeft : '0px' }}
                      >
                        {amino.description}
                      </p>
                                <p className="text-start w-full px-3 mt-2 font-semibold text-md sm:text-xl">{amino.price}</p>
                                <a href={amino.route}><button className="btnsign w-full px-28">More Details</button></a>
                        </div>
                  ))}
                        </div>
                    </div>}
                </div>

                <div className="flex flex-col ml-6 mr-6 items-center md:items-stretch">
                {weight && 
             <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-12 lg:gap-0">
             {weightMusscletech.map((weightItem, index) => (
                 <div key={index} className="brawl p-6 flex flex-col items-center"
                 style={{backgroundColor:"rgb(71,94,54,5%)",borderRadius:'10px',
                     boxShadow: '0 0.4rem #94b57d',
                      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                      border:'0.2px solid rgba(82, 82, 82,0.3)'
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
                     <div className="shipping  p-1">
                     {weightItem.shipping === 'Free Shipping' ? (
                          <span> <LocalShippingIcon sx={{marginRight:'4px'}}/>{weightItem.shipping}</span>
                        ) : (
                          <span>
                            <TimerIcon /> {weightItem.shipping}
                          </span>
                        )}
                     </div>
                     </div>
                     <img src={weightItem.images} alt={weightItem.images} width={weightItem.width} scale={weightItem.scale} className="mt-3" />
                     <p className="mt-3 font-bold text-start w-full px-3 text-lg sm:text-xl">{weightItem.name}</p>
                     <p className="px-3 mt-2 font-normal">{weightItem.description}</p>
                     <p className="text-start w-full px-3 mt-2 font-semibold text-md sm:text-xl">{weightItem.price}</p>
                     <a href={weightItem.route}><button className="btnsign w-full px-28">More Details</button></a>
                 </div>
             ))}
         </div>
            }
        { weight ? 
            <div>
            {darkMode ? <img src={oplight} width="200px"/> : <img src={op}  width="200px" className="mt-6 md:mt-0"/>}
        </div>  :''
    }
            {weight && <div>
                        <div className="flex flex-col lg:flex-row justify-between w-full items-start md:items-center gap-12 lg:gap-0">
                        {weightOptimum.map ((weight,index)=>(
                        <div key={index} className="brawl p-6 flex flex-col items-center"
                        style={{backgroundColor:"rgb(71,94,54,5%)",borderRadius:'10px',
                            boxShadow: '0 0.4rem #94b57d',
                             transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                             border:'0.2px solid rgba(82, 82, 82,0.3)'
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
                                <div className="shipping  p-1">
                                {weight.shipping === 'Free Shipping' ? (
                          <span> <LocalShippingIcon sx={{marginRight:'4px'}}/>{weight.shipping}</span>
                        ) : (
                          <span>
                            <TimerIcon /> {weight.shipping}
                          </span>
                        )}
                                </div>
                                </div>
                                <img src={weight.images} alt={weight.images} width={weight.width} scale={weight.scale} className="mt-3" />
                                <p className="mt-3 font-bold text-start w-full px-3 text-lg sm:text-xl">{weight.name}</p>
                                <p
                        className={`px-3 mt-2 font-normal text-start ${windowWidth <= 768 ? 'zero-margin-on-small' : ''}`}
                        style={{ marginLeft: windowWidth > 768 ? weight.marginLeft : '0px' }}
                      >
                        {weight.description}
                      </p>
                                <p className="text-start w-full px-3 mt-2 font-semibold text-md sm:text-xl">{weight.price}</p>
                                <a href={weight.route}><button className="btnsign w-full px-28">More Details</button></a>
                        </div>
                  ))}
                        </div>
                    </div>}
                   
            {prework && <div>
                        <div className="flex flex-col lg:flex-row justify-between w-full items-start md:items-center gap-12 lg:gap-0">
                        {preworkMusscletech.map ((preworkItem,index)=>(
                        <div key={index} className="brawl p-6 flex flex-col items-center"
                        style={{backgroundColor:"rgb(71,94,54,5%)",borderRadius:'10px',
                            boxShadow: '0 0.4rem #94b57d',
                             transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                             border:'0.2px solid rgba(82, 82, 82,0.3)'
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
                                <div className="shipping  p-1">
                                {preworkItem.shipping === 'Free Shipping' ? (
                          <span> <LocalShippingIcon sx={{marginRight:'4px'}}/>{preworkItem.shipping}</span>
                        ) : (
                          <span>
                            <TimerIcon /> {preworkItem.shipping}
                          </span>
                        )}
                                </div>
                                </div>
                                <img src={preworkItem.images} alt={preworkItem.images} width={preworkItem.width} scale={preworkItem.scale} className="mt-3" />
                                <p className="mt-3 font-bold text-start w-full px-3 text-lg sm:text-xl">{preworkItem.name}</p>
                                <p
                        className={`px-3 mt-2 font-normal text-start ${windowWidth <= 768 ? 'zero-margin-on-small' : ''}`}
                        style={{ marginLeft: windowWidth > 768 ? preworkItem.marginLeft : '0px' }}
                      >
                        {preworkItem.description}
                      </p>
                                <p className="text-start w-full px-3 mt-2 font-semibold text-md sm:text-xl">{preworkItem.price}</p>
                                <a href={preworkItem.route}><button className="btnsign w-full px-28">More Details</button></a>
                        </div>
                  ))}
                        </div>
                    </div>}
                    { prework  ? 
            <div>
            {darkMode ? <img src={oplight} width="200px"/> : <img src={op}  width="200px" className="mt-6 md:mt-0"/>}
        </div>  :''
    }
                    {prework && <div>
                        <div className="flex flex-col lg:flex-row justify-between w-full items-start md:items-center gap-12 lg:gap-0">
                        {preOptimum.map ((prework,index)=>(
                        <div key={index} className="brawl p-6 flex flex-col items-center"
                        style={{backgroundColor:"rgb(71,94,54,5%)",borderRadius:'10px',
                            boxShadow: '0 0.4rem #94b57d',
                             transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                             border:'0.2px solid rgba(82, 82, 82,0.3)'
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
                                <div className="shipping  p-1">
                                {prework.shipping === 'Free Shipping' ? (
                          <span> <LocalShippingIcon sx={{marginRight:'4px'}}/>{prework.shipping}</span>
                        ) : (
                          <span>
                            <TimerIcon /> {prework.shipping}
                          </span>
                        )}
                                </div>
                                </div>
                                <img src={prework.images} alt={prework.images} width={prework.width} scale={prework.scale} className="mt-3" />
                                <p className="mt-3 font-bold text-start w-full px-3 text-lg sm:text-xl">{prework.name}</p>
                                <p
                        className={`px-3 mt-2 font-normal text-start ${windowWidth <= 768 ? 'zero-margin-on-small' : ''}`}
                        style={{ marginLeft: windowWidth > 768 ? prework.marginLeft : '0px' }}
                      >
                        {prework.description}
                      </p>
                                <p className="text-start w-full px-3 mt-2 font-semibold text-md sm:text-xl">{prework.price}</p>
                                <a href={prework.route}><button className="btnsign w-full px-28">More Details</button></a>
                        </div>
                  ))}
                        </div>
                    </div>}
                    
                </div>
        
            {vitamins && <p>Show content related to Vitamins & Minerals</p>}
            {creatine && <p>Show content related to Creatine</p>}
            {protein && <p>Show content related to Protein</p>}
            {weightloss && <p>Show content related to Weight loss</p>}
            </div>
       <div className="empty"></div>
        </div>
     );
}
 
export default Supplement;