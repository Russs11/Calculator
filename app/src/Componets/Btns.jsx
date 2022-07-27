import React from 'react';
import "./btns.scss"

const btns = ({ btnNumClickHandler, allClear, operatorClickHandler, equallyClickHandler, btnDotClickHandler }) => {
    return (
        <div className="btns">
            <div className="btn ac bg-grey" onClick={allClear}>AC</div>
            <div className="btn plus-minus bg-grey">+/-</div>
            <div className="btn percent bg-grey">%</div>
            <div className="btn devide" onClick={() => { operatorClickHandler("/") }}>/</div>

            <div className="btn seven " onClick={() => { btnNumClickHandler(7) }}>7</div>
            <div className="btn eight" onClick={() => { btnNumClickHandler(8) }}>8</div>
            <div className="btn nine" onClick={() => { btnNumClickHandler(9) }}>9</div>
            <div className="btn multiply bg-orange" onClick={() => { operatorClickHandler("x") }}>x</div>

            <div className="btn four" onClick={() => { btnNumClickHandler(4) }}>4</div>
            <div className="btn five" onClick={() => { btnNumClickHandler(5) }}>5</div>
            <div className="btn six" onClick={() => { btnNumClickHandler(6) }}>6</div>
            <div className="btn minus bg-orange" onClick={() => { operatorClickHandler("-") }}>-</div>

            <div className="btn one" onClick={() => {btnNumClickHandler(1)}}>1</div>
            <div className="btn two" onClick={() => { btnNumClickHandler(2) }}>2</div>
            <div className="btn three" onClick={() => { btnNumClickHandler(3) }}>3</div>
            <div className="btn plus bg-orange" onClick={() => { operatorClickHandler ("+")}}>+</div>

            <div className="btn zero" onClick={() => { btnNumClickHandler(0) }}>0</div>
            <div className="btn dot" onClick={() => { btnDotClickHandler(".") }}>.</div>
            <div className="btn equal bg-orange" onClick={equallyClickHandler}>=</div>
        </div>
    );
};

export default btns;