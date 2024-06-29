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
          route: '/aminobuild'
        },
        {
            name:'Platinum Glutamine',
            price:'60$',
            shipping:'Free Shipping',
            description:'Performance-Enhancing BCAA Formula',
            images:platinum,
            route: '/platinum'
        },
        {
            name:'Platinum BCAA',
            price:'60$',
            shipping:'Free Shipping',
            description:'Performance-Enhancing BCAA Formula',
            images:amino1,
            route: '/platinumv2'
        },
    ]

    const aminoOptimum =[
        {
            name:'amino1',
            price:'55$'
        },
        {
        name:'amino2',
        price:'60$'
        }
    ]
    

    return ( 
        <div 
        className="h-screen "
        style={{backgroundColor: darkMode ? '#FAFBF9':"#050604",color: darkMode ? '#050604':"#FAFBF9"}}
        >
            <NavbarGeneralSupplement/>
            <div className="h-screen "
            style={{backgroundColor: darkMode ? '#FAFBF9':"#050604"}}
            >
                <div className="flex flex-col ml-12">
                   {darkMode ? <img src={musscletechicon} width="200px"/> : <img src={musscletechicondarkmode}  width="200px"/>}
                  <div className="flex justify-between">
                  {amino && (
                    <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-12 lg:gap-0">
                        {aminoMusscletech.map((aminoItem, index) => (
                            <div key={index} className="brawl p-6 flex flex-col items-center"
                            style={{backgroundColor:"rgb(71,94,54,5%)",borderRadius:'10px'
                                ,boxShadow: darkMode ? '27px 27px 70px #d2d3d1':'',
                                width:'390px'
                            }}
                            >
                                <div className="flex justify-start items-start w-full -mt-3 -ml-3">
                                <div className="shipping  p-1">
                                 <LocalShippingIcon/>  {aminoItem.shipping}
                                </div>
                                </div>
                                <img src={aminoItem.images} alt={aminoItem.images} width="120px" className="mt-3"/>
                                <p className="mt-3 font-bold text-start w-full px-3 text-xl">{aminoItem.name}</p>
                                <p className="px-3 mt-2 font-normal">{aminoItem.description}</p>
                                <p className="text-start w-full px-3 mt-2 font-semibold text-xl">{aminoItem.price}</p>
                                <a href={aminoItem.route}><button className="btnsign w-full px-28">More Details</button></a>
                            </div>
                        ))}
                    </div>
)}
                  </div>
                    {darkMode ? <img src={oplight} width="200px"/> : <img src={op}  width="200px"/>}
                    {amino && <div>
                    {aminoOptimum.map ((amino,index)=>(
                        <div key={index}>
                            <p>{amino.name}</p>
                            <p>{amino.price}</p>
                        </div>
                  ))}
                    </div>}
                </div>
            {weight && <p>Show content related to Weight Gainers</p>}
            {prework && <p>Show content related to Pre-Workout</p>}
            {vitamins && <p>Show content related to Vitamins & Minerals</p>}
            {creatine && <p>Show content related to Creatine</p>}
            {protein && <p>Show content related to Protein</p>}
            {weightloss && <p>Show content related to Weight loss</p>}
            </div>
        <div style={{backgroundColor: darkMode ? '#FAFBF9':"#050604",color: darkMode ? '#050604':"#FAFBF9"}} className="empty"></div>
        <div style={{backgroundColor: darkMode ? '#FAFBF9':"#050604",color: darkMode ? '#050604':"#FAFBF9"}} className="empty"></div>
        </div>
     );
}
 
export default Supplement;