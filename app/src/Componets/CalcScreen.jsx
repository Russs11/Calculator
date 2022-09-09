import React from 'react';
import './calcScreen.scss'

const CalcScreen = ({ value }) => {

    return (
        <div className="calc-screen">
            {value}
        </div>
    );
};

export default CalcScreen;