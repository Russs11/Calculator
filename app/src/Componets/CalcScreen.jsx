import React from 'react';
import './calcScreen.scss'

const CalcScreen = ({children}) => {
    return (
        <div className="calc-screen">
            {children} 
        </div>
    );
};

export default CalcScreen;