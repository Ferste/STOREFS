import React from 'react';
import Items from './Items';
import { Link } from 'react-router-dom';

function ItemsList({ itemsList = [] }) {
    return (
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
            }}
        >
            {itemsList.map((item) => (
                <Link key={item.id} to= {`/item/${item.id}`}>
                    <Items
                    imagen={item.imagen}
                    nombre={item.nombre}
                    categoria={item.categoria}
                    precio={item.precio}
                />
                </Link>
                
            ))}
        </section>
    );
}

export default ItemsList;