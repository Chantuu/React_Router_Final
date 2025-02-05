import React from 'react';
import './FashionLogoSection.css';

import Versace_Logo from '../../assets/brand_logos/versace_logo.png';
import Zara_Logo from '../../assets/brand_logos/zara_logo.png';
import Gucci_Logo from '../../assets/brand_logos/gucci_logo.png';
import Prada_Logo from '../../assets/brand_logos/prada_logo.png';
import Calvin_Klein_logo from '../../assets/brand_logos/calvin_klein_logo.png';

function FashionLogoSection() {
    return (
        <section className="container fashionLogoSection">
            <div>
                <img src={Versace_Logo} alt="Versace Logo" />
            </div>
            <div>
                <img src={Zara_Logo} alt="Zara Logo" />
            </div>
            <div>
                <img src={Gucci_Logo} alt="Gucci Logo" />
            </div>
            <div>
                <img src={Prada_Logo} alt="Prada Logo" />
            </div>
            <div>
                <img src={Calvin_Klein_logo} alt="Calvin Klein Logo" />
            </div>
        </section>
    );
}

export default FashionLogoSection;
