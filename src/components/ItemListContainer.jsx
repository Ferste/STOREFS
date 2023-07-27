export function  ItemListContainer  ({ greeting }) {
    const textStyles = {
        color: '#333',
        fontSize: '18px',
        fontWeight: 'bold',
        };
    return (
        <div className="item-list-container">
        <p style ={textStyles}>{greeting}</p>
        </div>
    );
};