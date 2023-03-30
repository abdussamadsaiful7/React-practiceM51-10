import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div className='d-flex gap-5 container text-center'>
            <div className='row row-cols-3 g-2'>
                {
                    meals.map(meal => <Product meal={meal}></Product>)
                }
            </div>
            <div>
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Products;