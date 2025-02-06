import React from 'react';
import ClothingItems from '../../components/ClothingItemsComponent/ClothingItems';
import './NewSalesPage.css';

function NewSalesPage() {
    return (
        <section className="container clothingSection">
            <h2>New Arrivals</h2>
            <ClothingItems />
        </section>
    );
}

export default NewSalesPage;
