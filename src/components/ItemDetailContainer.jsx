
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/client";


function ItemDetailContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState();
    const { itemId } = useParams();
    const Params = useParams();
    

useEffect(() => {

    const docRef = doc(db, "Items", itemId);
    getDoc(docRef).then((resp) => {
        setItem(
            {...resp.data(), id: resp.id}
        );
    })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
}, []);


    if (isLoading) return <Loader />;
    return (
        <main
            style={{
                padding: '1rem',
            }}
        >
            {item && (
                <ItemDetail
                    nombre={item.nombre}
                    imagen={item.imagen}
                    precio={item.precio}
                    categoria={item.categoria}
                />
            )}
        </main>
    );
}

export default ItemDetailContainer;
