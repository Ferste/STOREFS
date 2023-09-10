

import React from 'react';
import Items from './Items';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function ItemsList({ itemsList = [] }) {
    
    const groupedItems = [];
    for (let i = 0; i < itemsList.length; i += 4) {
        groupedItems.push(itemsList.slice(i, i + 4));
    }

    return (
        <section>
            {groupedItems.map((group, groupIndex) => (
                <Row key={groupIndex}>
                    {group.map((item) => (
                        <Col key={item.id} xs={12} sm={6} md={3}>
                            <Link to={`/item/${item.id}`}>
                                <Items
                                    imagen={item.imagen}
                                    nombre={item.nombre}
                                    categoria={item.categoria}
                                    precio={item.precio}
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            ))}
        </section>
    );
}

export default ItemsList;




