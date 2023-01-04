import React from 'react'
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import CartItem from './CartItem';
import CartLength from '../recoils/CartLength';
import CartState from '../recoils/CartState';
import './comp.css';


export default function Cart() {

    const [state, setstate] = useState(false);
    const length = useRecoilValue(CartLength);
    const itemsInCart = useRecoilValue(CartState);
    const toggleState = () => {
        setstate(!state);
    }

    return (
        <>
            <div className='cart'><button onClick={toggleState}>Cart{length}</button></div>
            {state && length > 0 && (
                <div className='CartList'>
                    {itemsInCart.map((product) => {
                        return <CartItem key={product.id} product={product} />
                    })}

                </div>
            )}
        </>


    )
}
