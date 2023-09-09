import React from 'react'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; 

function Items({ nombre, categoria, imagen }) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            
            <Button variant="primary">Detalle</Button>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{"categoria: "}{categoria}</ListGroup.Item>
        </ListGroup>
        </Card>
    );
}

export default Items;