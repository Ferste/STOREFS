import { useContext } from "react";
import {  useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { CartFill } from 'react-bootstrap-icons';

export function CarWidget ({items}){
    const {cartQuantity} = useCartContext();
    return (
    <Link to = "/cart">
    <div className="carrito">
        <CartFill size={44} /> 
        <span className="contador">{cartQuantity}</span>
    </div>
    </Link>
    );
}