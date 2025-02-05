import React from 'react';
import './MainSection.css';

function MainSection() {
    return (
        <main>
            <div className="container mainSection">
                <div className="mainSectionContent">
                    <div className="mainSectionMainContent">
                        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p>
                            Browse through our diverse range of meticulously
                            crafted garments, designed to bring out your
                            individuality and cater to your sense of style.
                        </p>
                        <button>Shop Now</button>
                    </div>
                    <div className="milestoneContainer">
                        <div>
                            <h3>200+</h3>
                            <p>International Brands</p>
                        </div>
                        <div className="ruler verticalRuler"></div>
                        <div>
                            <h3>2,000+</h3>
                            <p>High-Quality Products</p>
                        </div>
                        <div className="ruler verticalRuler"></div>
                        <div>
                            <h3>30,000+</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainSection;
