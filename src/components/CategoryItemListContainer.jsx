import React, { useEffect, useState } from "react";
import ItemsList from "./ItemsList";
import Loader from "./Loader";
import { getItemsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";

function CategoryItemListContainer() {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getItemsByCategory(id)
            .then(response => {
                console.log(response);
                setItems(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

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

export default CategoryItemListContainer;