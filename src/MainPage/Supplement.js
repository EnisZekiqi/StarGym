import React, { useState } from 'react';
import { useSupplementContext } from './useSupplementContext';
import { useDarkMode } from "../DarkModeContext";
const Supplement = () => {
  const { darkMode } = useDarkMode();
  const { supplements } = useSupplementContext(); // Get all supplements from context
  const [filteredSupplements, setFilteredSupplements] = useState(supplements);

  const { aminoMusscletech, aminoOptimum, weightMusscletech, weightOptimum, preworkMusscletech, preOptimum, creatineMuscletech, creatineOptimum } = useSupplementContext();

  useEffect(() => {
    if (categoryFilter === 'amino') {
      setFilteredSupplements(aminoMusscletech);
    } else if (categoryFilter === 'weight') {
      setFilteredSupplements(weightMusscletech);
    } else if (categoryFilter === 'prework') {
      setFilteredSupplements(preworkMusscletech);
    } else if (categoryFilter === 'creatine') {
      setFilteredSupplements(creatineMuscletech);
    } else if (categoryFilter === 'protein') {
      setFilteredSupplements(aminoOptimum);
    } else if (categoryFilter === 'weightloss') {
      setFilteredSupplements(weightOptimum);
    } else {
      setFilteredSupplements(supplements);
    }
  }, [categoryFilter]); // Dependency on categoryFilter

  return (
    <div>
      {filteredSupplements.map((supplement, index) => (
        <div key={index} className="supplement-item">
          <h2>{supplement.name}</h2>
          <p>{supplement.description}</p>
          <img src={supplement.images} alt={supplement.name} />
          <p>Price: {supplement.price}</p>
          <p>Shipping: {supplement.shipping}</p>
        </div>
      ))}
    </div>
  );
};

export default Supplement;
