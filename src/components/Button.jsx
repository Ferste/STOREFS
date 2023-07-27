import "./Button.css"

export function Button({texto}){
    const handleClick = () => {
        console.log('click');// agregar funcionalidad

    };
    return <button className="button" onClick={handleClick} >{texto}</button>
    
}