import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props.meal);
    const { strMealThumb, strMeal, idMeal, strCategory, strArea } = props.meal;
    return (

        <div className='shadow rounded w-40 p-2'>
            <div className='p-4'>
                <img className='img-thumbnail w-full rounded' src={strMealThumb} />
                <h4>Name: {strMeal}</h4>
                <p>ID: {idMeal}</p>
                <p>Category: {strCategory}</p>
                <p>Regional: {strArea}</p>
                <div className='d-flex justify-items-between'>
                    <button type="button" class="btn btn-sm btn-success me-5 ms-4">Add Cart  <FontAwesomeIcon icon={ faCartPlus} /> </button>
                    <button type="button" class="btn btn-sm btn-danger">Delete  <FontAwesomeIcon icon={faTrashCan} shake /> </button>
                </div>
            </div>
        </div>
    );
};

export default Product;