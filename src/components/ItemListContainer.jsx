
import { useEffect, useState } from "react";
import ItemsList from "./ItemsList";
import Loader from "./Loader";
import { getItems } from "../../asyncMock";

function ItemListContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems()
        .then(response=> {
            console.log(response),
            setItems(response)
        })
        .catch(error => {console.error(error)})
        .finally(()=>{setIsLoading(false)})
    }, []);

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
