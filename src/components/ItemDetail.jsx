
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../context/cartContext';

function ItemDetail({ nombre, precio, categoria, imagen }) {
    const cartContext = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleAddToCart = () => {
        cartContext.addCartList({
            id: Date.now(),
            nombre,
            precio,
            categoria,
            imagen,
            cantidad,
        });
    };

    const incrementCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const decrementCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{"$"}{precio}</Card.Text>

                
                <div className="d-flex justify-content-center align-items-center mb-3">
        <Button variant="primary" className="me-2 px-3 py-2 rounded-0" onClick={decrementCantidad}>
            -
        </Button>
        <p className="mb-0 mx-2">{cantidad}</p>
        <Button variant="primary" className="px-3 py-2 rounded-0" onClick={incrementCantidad}>
            +
        </Button>
    </div>

                <Button onClick={handleAddToCart} variant="primary">Agregar al Carrito</Button>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{"categoria: "}{categoria}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default ItemDetail;
