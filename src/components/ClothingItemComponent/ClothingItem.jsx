import React from 'react';
import Star_Rating from '../../assets/star_rating.svg';
import './ClothingItem.css';

function ClothingItem({ title, price, image }) {
    return (
        <div className="clothingCard">
            <div className="cardPhoto">
                <img src={image} alt="Product Photo" />
            </div>
            <div className="cardContent">
                <span className="cardTitle">{title}</span>
                <div className="reviewContainer">
                    <img src={Star_Rating} />
                    <span>
                        4.5/<span>5</span>
                    </span>
                </div>
                <span className="cardPrice">{price} &#36;</span>
            </div>
        </div>
    );
}

export default ClothingItem;
