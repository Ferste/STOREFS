const items = [
    {id: 1 , nombre : 'Remera Negra' , categoria : 'Remera' , precio : 15000 , imagen : ''},
    {id: 2 , nombre : 'Remera Blanca' , categoria : 'Remera' , precio : 15000 , imagen : ''},
    {id: 3 , nombre : 'Campera Negra' , categoria : 'Campera' , precio : 25000 , imagen : ''},
    {id: 4 , nombre : 'Campera Blanca' , categoria : 'Campera' , precio : 25000 , imagen : ''},
    {id: 5 , nombre : 'Buzo Negro' , categoria : 'Buzo' , precio : 20000 , imagen : ''},
    {id: 6 , nombre : 'Buzo Blanco' , categoria : 'Buzo' , precio : 20000 , imagen : ''},
    {id: 7 , nombre : 'Pantalon Negro' , categoria : 'Pantalon' , precio : 20000 , imagen : ''},
    {id: 8 , nombre : 'Pantalon Blanco' , categoria : 'Pantalon' , precio : 20000 , imagen : ''},
]

export const getItems = () => {
    return new Promise ((resolve , refect) =>{
        setTimeout(() => {
            resolve(items);
        }, 2000);
    });
};

export const getItem = (itemId) => {
    return new Promise ((resolve , refect) =>{
        setTimeout(() => {
            const newItem= items.filter((item) => item.id === itemId);
            if (newItem){
                resolve(newItem);
            } else {
                refect("No se encontro ningun item con ese ID")
            }
            
        }, 2000);
    });
};


export const getItemsByCategory = (category) => {
    return new Promise ((resolve , reject) =>{
        setTimeout(() => {
            const filteredItems = items.filter((item) => item.categoria === category);
            resolve(filteredItems);
        }, 2000);
    });
};