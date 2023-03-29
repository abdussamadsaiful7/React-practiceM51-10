import React from 'react';

const Product = (props) => {
    console.log(props.meal);
    const {strMealThumb, strMeal, idMeal, strCategory, strArea}= props.meal;
    return (

        <div>
           <img src={strMealThumb}/>
           <h3>Name: {strMeal}</h3>
           <p>ID: {idMeal}</p>
           <p>Category: {strCategory}</p>
           <p>Regional: {strArea}</p>
        </div>
    );
};

export default Product;