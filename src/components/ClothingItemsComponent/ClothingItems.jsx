import { useState, useEffect } from 'react';
import { default as axios } from 'axios';
import './ClothingItems.css';
import { p } from 'motion/react-client';
import ClothingItem from '../ClothingItemComponent/ClothingItem';

function ClothingItems() {
    const [responseData, setResponseData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const { data: response } = await axios.get(
                    'https://fakestoreapi.com/products?limit=10'
                );
                setResponseData(response);
            } catch (e) {
                console.log(e);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="clothingCardsContainer">
            {loading && <p>Loading</p>}
            {!loading && !error && (
                <>
                    {responseData.map((data) => (
                        <ClothingItem
                            key={data.id}
                            title={data.title}
                            price={data.price}
                            image={data.image}
                        />
                    ))}
                </>
            )}
            {!loading && error && <p>Error</p>}
        </div>
    );
}

export default ClothingItems;
