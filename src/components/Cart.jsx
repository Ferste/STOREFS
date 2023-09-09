
import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/client";

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
    
            console.log("Compra enviada con éxito. ID del documento:", docRef.id);
        } catch (error) {
            console.error("Error al enviar la compra:", error);
        }
    };
    return (
        <div>
            {cartList.length === 0 ? (
                <div>
                    <h3>Aún no has agregado nada al carrito</h3>
                    <Link to="/">Volver a Inicio</Link>
                </div>
            ) : (
                <div>
                    {cartList.map((item) => (
                        <div key={item.id}>
                            <h4>{item.nombre}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <button onClick={() => handleIncrement(item.id)}>+</button>
                            <button onClick={() => handleDecrement(item.id)}>-</button>
                            <p>Precio: ${item.precio * item.cantidad}</p>
                            <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <div>
                        <h3>Total: ${getTotalPrice()}</h3>
                        <button onClick={handleConfirmPurchase}>Confirmar Compra</button>
                    </div>
                    {isFormVisible && (
                        <form onSubmit={handleSubmit}>
                            <h3>Completa tus datos</h3>
                            <div>
    <label htmlFor="name">Nombre:</label>
    <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value, phone: formData.phone, email: formData.email })}
        required
    />
</div>
                            <div>
                                <label htmlFor="phone">Teléfono:</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Correo Electrónico:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <button type="submit">Enviar Compra</button>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
}

export default Cart;