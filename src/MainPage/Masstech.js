import { useState } from "react";
import masstechu from '../images/masstech.webp'
const Masstech = () => {


    const MasstechInfo = [
       {
        name:'Masstech',
        description:'123123',
        image:masstechu,
        flavor:['vanilla','strawberry','cookies'],
        weight:['1.1kg','2.3kg'],
        prices:['44.5$','62$','60$']
       }


    ]

    return ( 
        <div className="">
            {MasstechInfo.map ((masstech,index)=>(
                <div key={index}>
                <p>{masstech.name}</p>
                <p>{masstech.description}</p>
                <p>{masstech.flavor}</p>
                <p></p>
                <p></p>
                </div>
            ))}
        </div>
     );
}
 
export default Masstech;
