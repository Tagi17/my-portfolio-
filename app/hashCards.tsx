'use client'

import './globals.css'

import React from 'react';

const HashCards: React.FC = () => {
    return (
    <>
    <div className="card-container">
        <div className="card" id="card1">
            <div className="card-content">
                <div className="card-textH">Data:</div>
                <div className="card-text">Welcome</div>
            </div>
        </div>
        <div className="card" id="card2">
            <div className="card-content">
                <div className="card-textH">Previous Hash:</div>
                <div className="card-text">To my creation</div>
            </div>
        </div>
        <div className="card" id="card3">
            <div className="card-content">
                <div className="card-textH">Hash:</div>
                <div className="card-text">Im Inz</div>
            </div>
        </div>
    </div>
    </>
    );
};
export default HashCards; 
