import React from 'react';
import './calcScreen.scss'

const CalcScreen = ({ value }) => {

    return (
        <div className="calc-screen">
            {value}
        </div>
    );
    // if (operand1 && !operator && !operand2 && !percent) {
    //     return (
    //         <div className="calc-screen">
    //             {operand1}
    //         </div>
    //     );
    // }
    // if (operand1 && operator && !operand2 && !percent) {
    //     return (
    //         <div className="calc-screen">
    //             {operator}
    //         </div>
    //     );
    // }
    

    // if (operand1 && operand2 && operator && !percent) {
    //     return (
    //         <div className="calc-screen">
    //             {operand2}
    //         </div>
    //     );
    // }

    // if (operand1 && operand2 && operator && percent) {
    //     return (
    //         <div className="calc-screen">
    //             {operand2 + percent}
    //         </div>
    //     );
    // }

};

export default CalcScreen;