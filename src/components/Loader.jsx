import Spinner from "react-bootstrap/Spinner";

function Loader() {
    return (
        <div
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                color: "white",
                gap: "1rem",
                zIndex: 9999, 
            }}
        >
            <Spinner animation="border" role="status" />
            <h2 style={{ fontSize: "55px" }}>Cargando...</h2>
        </div>
    );
}

export default Loader;