
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { getItem } from "../../asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState();
    const { itemId } = useParams();

    useEffect(() => {
        getItem(Number(itemId))
            .then((response) => {
                console.log(response);
                setItem(response[0]);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [itemId]);

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
