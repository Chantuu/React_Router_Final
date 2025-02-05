import React from 'react';
import MainSection from '../../components/MainSection/MainSection';
import FashionLogoSection from '../../components/FashionLogoSection/FashionLogoSection';
import DressStyleSection from '../../components/DressStyleSectionComponent/DressStyleSection';
import ReviewsSection from '../../components/ReviewsSectionComponent/ReviewsSection';

function HomePage() {
    return (
        <>
            <MainSection />
            <FashionLogoSection />
            <DressStyleSection />
            <ReviewsSection />
        </>
    );
}

export default HomePage;
