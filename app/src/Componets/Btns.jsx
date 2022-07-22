import React from 'react';
import "./btns.scss"

const btns = () => {
    return (
        <div className="btns">
            <div className="btn ac bg-grey">AC</div>
            <div className="btn plus-minus bg-grey">+/-</div>
            <div className="btn percent bg-grey">%</div>
            <div className="btn devide">/</div>

            <div className="btn seven ">7</div>
            <div className="btn eight">8</div>
            <div className="btn nine">9</div>
            <div className="btn multiply bg-orange">X</div>

            <div className="btn four">4</div>
            <div className="btn five">5</div>
            <div className="btn six">6</div>
            <div className="btn minus bg-orange">-</div>

            <div className="btn one">1</div>
            <div className="btn two">2</div>
            <div className="btn three">3</div>
            <div className="btn plus bg-orange">+</div>

            <div className="btn zero">0</div>
            <div className="btn dot">.</div>
            <div className="btn equal bg-orange">=</div>
        </div>
    );
};

export default btns;