import React from 'react'
import './comp.css';

const CartItem = (props) => {
    console.log(props.product.name);

    return (

        <div className='CartItem'>
            <img className='CartImage' src={props.product.image}></img>
            <div className='CartDescription'>
                <h3>{props.product.name}</h3>
                <div>{props.product.description}</div>
                <div>{props.product.inCartQuantity}</div>
                <div>Price : <strong>$ {props.product.price}</strong></div>

            </div>

        </div>

    )
}
export default CartItem
