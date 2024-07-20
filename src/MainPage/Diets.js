import NavbarGeneral from "./NavbarGeneral";
import Cookies from 'js-cookie';
import { useDarkMode } from "../DarkModeContext";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaAppleAlt } from "react-icons/fa";
import { useState,useEffect } from "react";
import { FiPlus } from "react-icons/fi";
const Diets = () => {

    const { darkMode } = useDarkMode()

    const [healthy,setHealthy]=useState(false) /// hover only 
    const [mass,setMass]=useState(false) /// hover only 

    const [healthyContent,setHealthyContent]=useState(false) /// content only 
    const [massContent,setMassContent]=useState(false) // content only 

    
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2,setIsOpen2]=useState(false)
    const handleToggle = () => {
        setIsOpen(prev => !prev);
        setIsOpen2(false)
      };
    const handleToggle2=()=>{
      setIsOpen2(prevMode=>!prevMode)
      setIsOpen(false)
    }

    const bionatural =[
      {
        name:'Oats',
        weight:['2 Scoups (75gr)','1 Scoups (37.5gr)'],
        nutri:['2gr Fat','19gr Protein','1gr Suggar']
      },
      {
        name:'Peanut Butter',
        weight:['2 Small spoons (25gr)','1 spoon (17gr)'],
        nutri:['12gr Fat','29gr Protein','0.5gr Suggar']
      },
      {
        name:'Bananas',
        weight:['2 Bananas (203gr)','1 Banana (101gr)'],
        nutri:['4gr Fat','4gr Protein','8gr Suggar']
      }
    ]

    const bionatural2 =[
      {
        name:'Rice Cakes',
        weight:['5 cakes (33gr)','7 Scoups (42.5gr)'],
        nutri:['4.2gr Fat','9.5gr Protein','2.6gr Fibre']
      },
      {
        name:'Apples',
        weight:['2 Small Apples (85gr)','1 Apple (43gr)'],
        nutri:['95 Calories','2gr Protein','25gr Carbohydrate']
      },
      {
        name:'White Meat',
        weight:['1 Slice (123gr)','2 Slices (222gr)'],
        nutri:['4gr Iron','34gr Protein','3gr Vitamin B']
      }
    ]


    const [selectedNutri, setSelectedNutri] = useState([]);
    const [selectedWeights, setSelectedWeights] = useState({});


    useEffect(() => {
      const savedItems = Cookies.get('selectedNutri');
      if (savedItems) {
        setSelectedNutri(JSON.parse(savedItems));
      }
    }, []);


    const handleItemClick = (item) => {
      setSelectedNutri((prevItems) => {
        const updatedItems = [...prevItems];
        const index = updatedItems.findIndex((i) => i.name === item.name);
        if (index !== -1) {
          updatedItems.splice(index, 1);
        } else {
          updatedItems.push(item);
        }
        Cookies.set('selectedNutri', JSON.stringify(updatedItems));
        return updatedItems;
      });
    };


    const handleWeightChange = (itemName, weight) => {
      setSelectedWeights((prevWeights) => ({
        ...prevWeights,
        [itemName]: weight
      }));
    };
    
     ///// calculate weight

     const calculateTotalNutri = () => {
      const totalNutri = { fat: 0, protein: 0, sugar: 0, fibre: 0, calories: 0, carbohydrate: 0, iron: 0, vitaminB: 0 };
      selectedNutri.forEach((item) => {
        item.nutri.forEach((nutri) => {
          const [amount, type] = nutri.split(' ');
          const value = parseFloat(amount);
          if (type.includes('Fat')) {
            totalNutri.fat += value;
          } else if (type.includes('Protein')) {
            totalNutri.protein += value;
          } else if (type.includes('Sugar')) {
            totalNutri.sugar += value;
          } else if (type.includes('Fibre')) {
            totalNutri.fibre += value;
          } else if (type.includes('Calories')) {
            totalNutri.calories += value;
          } else if (type.includes('Carbohydrate')) {
            totalNutri.carbohydrate += value;
          } else if (type.includes('Iron')) {
            totalNutri.iron += value;
          } else if (type.includes('Vitamin B')) {
            totalNutri.vitaminB += value;
          }
        });
      });
      return totalNutri;
    };

    const totalNutri = calculateTotalNutri();

    return ( 
        <div className="h-screen"
        style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}>
            <NavbarGeneral/>
            <div className="empty"></div>
            <div style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}} className=" px-0 md:px-8 flex flex-col items-center md:items-stretch gap-8">
                <h1 className="text-4xl font-bold">Diets</h1>
                <p className="text-md font-normal -mt-6">Avilable Diets get one now</p>
                <div className="flex justify-around flex-col md:flex-row gap-8 md:gap-0">
                    <div className="helthydiet flex flex-col items-center justify-center"
                    onClick={()=>setHealthyContent(prevMode =>!prevMode)}
                    style={{
                        backgroundColor: 'rgb(71,94,54,5%)',
                        borderRadius: '10px',
                        boxShadow: '0 0.4rem #94b57d',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                        border: '0.2px solid rgba(82, 82, 82,0.3)',
                        width: '175px',
                        height:'155px',
                         display:massContent ? "none" :""
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 1rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(-0.5rem)';
                        setHealthy(true)
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0.4rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(0)';
                        setHealthy(false)
                      }}
                    >
                  <FaAppleAlt 
                    style={{
                        color: healthy || healthyContent ? '#94b57d' : (darkMode ? "#050604" : "#FAFBF9"),
                        transition: 'color 0.5s linear, transform 0.5s linear',
                        transform: `scale(${healthy ? 2.3 : 2.0}) rotate(${healthy ? 15 : 0}deg)`
                      }}
                  />
                  {(healthy || healthyContent) && 
                        <div
                        className="mt-2 flex items-end justify-center"
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: healthy || healthyContent ? 1 : 0
                        }}
                        >
                        <h1 className="font-light text-md">Healthy Diet</h1>
                        </div>
                    }
                    
                    </div>
                    <div className="massdiet flex flex-col items-center justify-center"
                      onClick={()=>setMassContent(prevMode =>!prevMode)}
                    style={{
                        backgroundColor: 'rgb(71,94,54,5%)',
                        borderRadius: '10px',
                        boxShadow: '0 0.4rem #94b57d',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                        border: '0.2px solid rgba(82, 82, 82,0.3)',
                        width: '175px',
                      height:'155px',
                         display:healthyContent ? "none" :""
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 1rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(-0.5rem)';
                        setMass(true)
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0.4rem #94b57d';
                        e.currentTarget.style.transform = 'translateY(0)';
                        setMass(false)
                      }}
                    >
                   <FaPizzaSlice  
                   style={{
                        color: mass  || massContent ? '#94b57d' : (darkMode ? "#050604" : "#FAFBF9"),
                        transition: 'color 0.5s linear, transform 0.5s linear',
                        transform: `scale(${mass ? 2.3 : 2.0}) rotate(${mass ? 15 : 0}deg)`
                      }}/>

                      {(mass || massContent) && 
                        <div
                        className="mt-2 flex items-end justify-center"
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            transition: 'opacity 0.5s ease-in-out',
                            opacity: mass || massContent ? 1 : 0
                        }}
                        >
                        <h1 className="font-light text-md">Mass Diet</h1>
                        </div>
                    }
                    </div>
                </div>
                {healthyContent && (
       <div className="flex flex-col">
             <div className="flex justify-center w-full gap-8 md:gap-0 mt-5 md:w-auto md:justify-around items-center flex-col md:flex-row">
          <div 
          className={`flex flex-col w-full  p-4 rounded-xl mr-2 ml-2`} // Conditional background color
          style={{
            transition: 'background-color 0.3s ease',backgroundColor :isOpen?"rgb(71,94,54,5%)":"", border:isOpen ?'0.2px solid rgba(82, 82, 82,0.6)' :'0.2px solid rgba(82, 82, 82,0.3)',
          }}
        >
          {/* FAQ Header */}
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={handleToggle}
            style={{
              display: 'flex',
              alignItems: 'center',
              transition: 'background-color 0.3s ease',
            }}
          >
            <p className="font-semibold text-md">Bio Natural Diet</p>
            <FiPlus
              style={{
                transition: 'transform 0.3s ease',
                transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                scale:1.5
              }}
            />
          </div>
          {/* FAQ Content */}
          <div className="faq-content" style={{
            maxHeight: isOpen ? '500px' : '0', // Adjust as needed
            overflow: 'hidden',
            transition: 'max-height 0.3s ease, opacity 0.3s ease',
            opacity: isOpen ? 1 : 0,
            paddingTop: isOpen ? '10px' : '0', // Adds spacing when opened
          }}>
             {bionatural.map((bio, index) => {
            const isSelected = selectedNutri.some((item) => item.name === bio.name);
            return (
              <div
                key={index}
                className={`flex gap-3 justify-between mb-4 p-2 ${isSelected ? 'bg-green-100' : ''}`}
                onClick={() => handleItemClick(bio)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: isSelected ? 'rgba(71, 94, 54, 0.1)' : 'transparent'
                }}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">{bio.name}</p>
                  <p className="text-xs font-light">{bio.nutri.join(', ')}</p>
                </div>
                <div className="input-wrapper">
                  <select
                    className="custom-select"
                    style={{
                      backgroundColor: 'rgb(71,94,54,5%)',
                      height: '55px'
                    }}
                    value={selectedWeights[bio.name] || ''}
                    onChange={(e) => handleWeightChange(bio.name, e.target.value)}
                  >
                    {bio.weight.map((wt, wtIndex) => (
                      <option key={wtIndex} value={wt}>
                        {wt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            );
          })}
              </div>
        </div>
        <div 
          className={`flex flex-col w-full  p-4 rounded-xl mr-2 ml-2`} // Conditional background color
          style={{
            transition: 'background-color 0.3s ease',backgroundColor :isOpen?"rgb(71,94,54,5%)":"", border:isOpen ?'0.2px solid rgba(82, 82, 82,0.6)' :'0.2px solid rgba(82, 82, 82,0.3)',
          }}
        >
          {/* FAQ Header */}
          <div 
            className="flex justify-between items-center cursor-pointer"
            onClick={handleToggle2}
            style={{
              display: 'flex',
              alignItems: 'center',
              transition: 'background-color 0.3s ease',
            }}
          >
            <p className="font-semibold text-md">High Caloric Bio Diets</p>
            <FiPlus
              style={{
                transition: 'transform 0.3s ease',
                transform: isOpen2 ? 'rotate(45deg)' : 'rotate(0deg)',
                scale:1.5
              }}
            />
          </div>
          {/* FAQ Content */}
          <div className="faq-content" style={{
            maxHeight: isOpen2 ? '500px' : '0', // Adjust as needed
            overflow: 'hidden',
            transition: 'max-height 0.3s ease, opacity 0.3s ease',
            opacity: isOpen2 ? 1 : 0,
            paddingTop: isOpen2 ? '10px' : '0', // Adds spacing when opened
          }}>
           {bionatural2.map((bio2, index) => {
                  const isSelected = selectedNutri.some((item) => item.name === bio2.name);
                  return (
                    <div
                      key={index}
                      className={`flex gap-3 justify-between mb-4 p-2 ${isSelected ? 'bg-green-100' : ''}`}
                      onClick={() => handleItemClick(bio2)}
                      style={{
                        cursor: 'pointer',
                        backgroundColor: isSelected ? 'rgba(71, 94, 54, 0.1)' : 'transparent'
                      }}
                    >
                      <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium">{bio2.name}</p>
                        <p className="text-xs font-light">{bio2.nutri.join(', ')}</p>
                      </div>
                      <div className="input-wrapper">
                        <select
                          className="custom-select"
                          style={{
                            backgroundColor: 'rgb(71,94,54,5%)',
                            height: '55px'
                          }}
                          value={selectedWeights[bio2.name] || ''}
                          onChange={(e) => handleWeightChange(bio2.name, e.target.value)}
                        >
                          {bio2.weight.map((wt2, wt2Index) => (
                            <option key={wt2Index} value={wt2}>
                              {wt2}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around">
        <div className="mt-4">
        <h3 className="font-semibold text-md">Your Selected Diet:</h3>
        {selectedNutri.map((item, index) => (
          <div key={index} className="flex gap-3 justify-between mb-2">
            <p className="text-xs font-light">{item.name}</p>
            <p className="text-xs font-light">{selectedWeights[item.name]}</p>
          </div>

        ))}
        </div>
         <div className="mt-2 flex flex-col gap-1">
              <h3 className="font-semibold text-md">Total Nutrition:</h3>
              <p className="text-xs font-light">Total Fat: <b>{totalNutri.fat}</b>gr</p>
              <p className="text-xs font-light">Total Protein: <b> {totalNutri.protein}</b>gr</p>
              <p className="text-xs font-light">Total Sugar: <b>{totalNutri.sugar}</b> gr</p>
              <p className="text-xs font-light">Total Fibre:<b>{totalNutri.fibre}</b> gr</p>
              <p className="text-xs font-light">Total Calories: <b>{totalNutri.calories}</b> </p>
              <p className="text-xs font-light">Total Carbohydrate:<b>{totalNutri.carbohydrate}</b> gr</p>
              <p className="text-xs font-light">Total Iron:<b>{totalNutri.iron}</b>gr</p>
              <p className="text-xs font-light">Total Vitamin B:<b>{totalNutri.vitaminB}</b>gr</p>
            </div>
        </div>
        
       </div>
      )}
            </div>
            <div className="empty"  style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}></div>
           <div className="empty"  style={{backgroundColor: darkMode ? "#FAFBF9":"#050604",color:darkMode ? "#050604":"#FAFBF9"}}></div>
        </div>
     );
}
 
export default Diets;