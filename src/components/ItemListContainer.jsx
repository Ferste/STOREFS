
import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";
import Loader from "./Loader";

import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/client';

function ItemListContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        const productosRef = collection(db, 'Items');

        const consultaCategoria = category
            ? query(productosRef, where('Categorias', '==', category))
            : productosRef;

        getDocs(consultaCategoria)
            .then((resp) => {
                setItems(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id };
                    })
                );
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    }, [category]);

    if (isLoading) return <Loader />;
    return (
        <main
            style={{
                padding: "1rem",
            }}
        >
            <ItemsList itemsList={items} />
        </main>
    );
}

export default ItemListContainer;
