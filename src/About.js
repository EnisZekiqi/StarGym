import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import PhoneIcon from '@mui/icons-material/Phone';
import op from './images/op.webp'
import {motion} from "framer-motion"
const About = () => {


    return ( 
        
        <div id="about" className="about mt-4">
            <h1 className="text-center font-extrabold text-3xl">About Us</h1>
            <div className="flex justify-center md:justify-between items-center flex-col gap-8 md:gap-0 md:flex-row container mx-auto px-14 mt-12">
                <motion.div
                 initial={{ x: -50 ,opacity:0}}
                 whileInView={{ x: 0,opacity:1 }}
                 transition={{
                    staggerChildren:1,
                    duration:0.5
                  }}
                  viewport={{once:true}}
                className="flex flex-col gap-4">
                    <div className="flex gap-2"><LocationOnIcon sx={{color:"#475E36"}}/><p className='font-semibold'>Vushtrri / Faruk Beqiri</p></div>
                    <div className="flex gap-2"><MarkunreadIcon sx={{color:"#475E36"}}/><p className='font-semibold'>enis_zekiqi@hotmail.com</p></div>
                    <div className="flex gap-2"><PhoneIcon sx={{color:"#475E36"}}/><p className='font-semibold'>044-256-853</p></div>
                </motion.div>
                <div class="card">
                <img className='starx' src={op} alt="" />
                <div class="card__content">
                    <p style={{color:"#111211"}} class="card__title font-semi-bold">StarGym's History</p>
                    <p style={{color:"#111211"}} class="card__description font-normal">StarGym was opened in 2010 in Vushtrri in high hopes for the good of the community . First was opened as gym only but after 2 years we started adding supplements and diets to our costumers </p>
                </div>
                </div>
            </div>       
            <div className="empty"></div>
        </div>
     );
}
 
export default About;