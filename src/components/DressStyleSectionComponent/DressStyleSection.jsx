import React from 'react';
import './DressStyleSection.css';

function DressStyleSection() {
    return (
        <section className="dressStyleContainer">
            <h2>Browse By Dress Style</h2>
            <div className="styleCardContainer">
                <div className="styleCard">Casual</div>
                <div className="styleCard">Formal</div>
                <div className="styleCard">Party</div>
                <div className="styleCard">Gym</div>
            </div>
        </section>
    );
}

export default DressStyleSection;
