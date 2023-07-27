export function CarWidget ({items}){
    const itemContador = 4; 
    return (
    <div className="carrito">
        <img src="./src/assets/img/carrito.png" alt="carrito" />
        <span className="contador">{itemContador}</span>
    </div>
    );
}