import React from 'react';
import './ReviewsSection.css';

import Arrow_Left_Icon from '../../assets/icons/arrow-left.svg';
import Arrow_Right_Icon from '../../assets/icons/arrow-right.svg';
import Checkmark_Logo from '../../assets/icons/checkmark.svg';
import Star_Rating_Full from '../../assets/star_rating_full.svg';

function ReviewsSection() {
    return (
        <section className="container reviewsSection">
            <h2>Our happy Customers</h2>
            <div className="arrowsContainer">
                <img src={Arrow_Left_Icon} />
                <img src={Arrow_Right_Icon} alt="Right Arrow" />
            </div>
            <div className="reviewCardsContainer">
                <div className="reviewCard">
                    <div className="reviewCardStars">
                        <img src={Star_Rating_Full} />
                    </div>
                    <div className="reviewAuthor">
                        <span>Sarah M.</span>
                        <img src={Checkmark_Logo} alt="Checkmark Logo" />
                    </div>
                    <p>
                        "I'm blown away by the quality and style of the clothes
                        I received from Shop.co. From casual wear to elegant
                        dresses, every piece I've bought has exceeded my
                        expectations.”
                    </p>
                </div>
                <div className="reviewCard">
                    <div className="reviewCardStars">
                        <img src={Star_Rating_Full} />
                    </div>
                    <div className="reviewAuthor">
                        <span>Alex K.</span>
                        <img src={Checkmark_Logo} alt="Checkmark Logo" />
                    </div>
                    <p>
                        "Finding clothes that align with my personal style used
                        to be a challenge until I discovered Shop.co. The range
                        of options they offer is truly remarkable, catering to a
                        variety of tastes and occasions.”
                    </p>
                </div>
                <div className="reviewCard">
                    <div className="reviewCardStars">
                        <img src={Star_Rating_Full} />
                    </div>
                    <div className="reviewAuthor">
                        <span>James L.</span>
                        <img src={Checkmark_Logo} alt="Checkmark Logo" />
                    </div>
                    <p>
                        "As someone who's always on the lookout for unique
                        fashion pieces, I'm thrilled to have stumbled upon
                        Shop.co. The selection of clothes is not only diverse
                        but also on-point with the latest trends.”
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ReviewsSection;
