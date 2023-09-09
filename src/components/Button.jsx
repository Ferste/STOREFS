import "./Button.css"

export function Button({texto}){
    const handleClick = () => {

    };
    return <button className="button" onClick={handleClick} >{texto}</button>
    
}