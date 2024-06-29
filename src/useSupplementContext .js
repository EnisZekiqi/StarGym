// src/context/SupplementContext.js
import React, { createContext, useContext, useState } from 'react';

const SupplementContext = createContext();

export const useSupplementContext = () => {
    return useContext(SupplementContext);
};

export const SupplementProvider = ({ children }) => {
    const [amino, setAmino] = useState(false);
    const [weight, setWeight] = useState(false);
    const [prework, setPrework] = useState(false);
    const [vitamins, setVitamins] = useState(false);
    const [creatine, setCreatine] = useState(false);
    const [protein, setProtein] = useState(false);
    const [weightloss, setWeightloss] = useState(false);

    const toggleAmino = () => {
        setAmino(!amino);
        setWeight(false)
        setPrework(false)
        setVitamins(false)
        setCreatine(false)
        setProtein(false)
        setWeightloss(false)
    };

    const toggleWeight = () => {
        setWeight(!weight);
        setAmino(false)
        setPrework(false)
        setVitamins(false)
        setCreatine(false)
        setProtein(false)
        setWeightloss(false)
    };

    const togglePrework = () => {
        setPrework(!prework);
        setAmino(false)
        setWeight(false)
        setVitamins(false)
        setCreatine(false)
        setProtein(false)
        setWeightloss(false)
    };

    const toggleVitamins = () => {
        setVitamins(!vitamins);
        setAmino(false)
        setWeight(false)
        setCreatine(false)
        setPrework(false)
        setProtein(false)
        setWeightloss(false)
    };

    const toggleCreatine = () => {
        setCreatine(!creatine);
        setAmino(false)
        setWeight(false)
        setVitamins(false)
        setWeightloss(false)
        setPrework(false)
        setProtein(false)
    };

    const toggleProtein = () => {
        setProtein(!protein);
        setAmino(false)
        setWeight(false)
        setWeightloss(false)
        setCreatine(false)
        setVitamins(false)
        setPrework(false)
    };

    const toggleWeightLoss = () => {
        setWeightloss(!weightloss);
        setAmino(false)
        setWeight(false)
        setPrework(false)
        setProtein(false)
        setCreatine(false)
        setVitamins(false)
    };

    const state = {
        amino, setAmino,
        weight, setWeight,
        prework, setPrework,
        vitamins, setVitamins,
        creatine, setCreatine,
        protein, setProtein,
        weightloss, setWeightloss,
        toggleAmino,
        toggleWeight,
        togglePrework,
        toggleVitamins,
        toggleCreatine,
        toggleProtein,
        toggleWeightLoss,
    };

    return (
        <SupplementContext.Provider value={state}>
            {children}
        </SupplementContext.Provider>
    );
};
