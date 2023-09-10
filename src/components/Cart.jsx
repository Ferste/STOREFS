import './Cart.css';
import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/client";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Border } from 'react-bootstrap-icons';

function Cart() {
    const { cartList, updateCartItemQuantity, removeCartList } = useContext(CartContext);
    const [isFormVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const getTotalPrice = () => {
        let total = 0;
        for (const item of cartList) {
            total += item.precio * item.cantidad;
        }
        return total;
    };

    const handleIncrement = (nombre) => {
        updateCartItemQuantity(nombre, 1);
    };

    const handleDecrement = (nombre) => {
        updateCartItemQuantity(nombre, -1);
    };
    const handleRemoveItem = (nombre) => {
        removeCartList(nombre);
    };
    const handleConfirmPurchase = () => {
        setFormVisible(true);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const buyerData = {
            nombre: formData.name,
            telefono: formData.phone,
            email: formData.email,
        };
        const compraData = {
            buyer: buyerData,
            items: cartList,
            total: getTotalPrice(),
            fecha: new Date().toISOString(),
        };
        try {
            const comprasRef = collection(db, "Orders");
            const docRef = await addDoc(comprasRef, compraData);
            cartList.forEach((item) => {
                removeCartList(item.id);
            });
            Swal.fire({
                icon: "success",
                title: "Compra enviada con éxito",
                showConfirmButton: false,
                timer: 3000,
            });
            console.log("Compra realizada con éxito.", docRef.id);
        } catch (error) {
            console.error("Error al enviar la compra:", error);
            Swal.fire({
                icon: "error",
                title: "Error al enviar la compra",
                showConfirmButton: false,
                timer: 3000,
            });
        }
    };

    return (
        <div>
            {cartList.length === 0 ? (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh', 
                    color: 'white',
                    fontWeight: 'bolder'
                }}>
                    <h3>Aún no has agregado nada al carrito</h3>
                    <Link style={{
                    color:'white',
                    fontWeight: 'bolder',
                    border: '2px solid white',
                    fontSize: '20px',
                    margin: '50px 0px',
                    padding:'4px'
                    
                }} to="/">Volver a Inicio</Link>
                </div>
            ) : (
                <div>
                    {cartList.map((item) => (
                        <div key={item.id}
                            style={{
                                color:'white',
                                fontWeight: 'bolder'
                            }}>
                            <h2>{item.nombre}</h2>
                            <p>Cantidad: {item.cantidad}</p>
                            <button onClick={() => handleIncrement(item.id)}>+</button>
                            <button onClick={() => handleDecrement(item.id)}>-</button>
                            <p>Precio: ${item.precio * item.cantidad}</p>
                            <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <div style={{
                                color:'white',
                                fontSize: '15px', 
                                fontWeight: 'bold'
                            }}>
                        <h3>Total: ${getTotalPrice()}</h3>
                        <button onClick={handleConfirmPurchase}>Confirmar Compra</button>
                    </div>
                    {isFormVisible && (
                        
                        <Form onSubmit={handleSubmit} style={{
                            color:'white',
                            fontWeight: 'bolder'
                        }}>
                            <h3>Completa tus datos</h3>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value, phone: formData.phone, email: formData.email })
                                    }
                                    style={{ width: '450px' }} 
                                    required
                                    className="mx-auto" 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Teléfono:</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    style={{ width: '450px' }}
                                    required
                                    className="mx-auto"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{ width: '450px' }}
                                    required
                                    className="mx-auto"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Enviar Compra
                            </Button>
                        </Form>
                    )}
                </div>
            )}
        </div>
    );
}

export default Cart;