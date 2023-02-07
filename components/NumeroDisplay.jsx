export default function NumeroDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50",
            width: "50",
            borderRadius: "25",
            backgroundColor: "#fff",
            color: "#222",
            fontSize: "2rem",
            margin: "20px",
        }}>
            {props.numero}
        </div>
    )
}