
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/client";

function CategoryItemDetailContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const productosRef = collection(db, 'Items');
        const consultaCategoria = query(productosRef, where('categoria', '==', id));

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
    }, [id]);

    if (isLoading) return <Loader />;

    return (
        <main style={{ padding: "1rem" }}>
            {items.map((item) => (
                <ItemDetail
                    key={item.id}
                    nombre={item.nombre}
                    imagen={item.imagen}
                    precio={item.precio}
                    categoria={item.categoria}
                />
            ))}
        </main>
    );
}

export default CategoryItemDetailContainer;