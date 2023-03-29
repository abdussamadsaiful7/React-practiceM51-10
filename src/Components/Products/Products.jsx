import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
        .then(res => res.json())
        .then(data =>setMeals(data.meals))
    },[])
    return (
        <div>
            {
                meals.map(meal=> <Product meal={meal}></Product>)
            }
        </div>
    );
};

export default Products;