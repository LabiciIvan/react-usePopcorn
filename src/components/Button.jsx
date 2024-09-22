

export default function Button({
    className = 'btn', 
    content = "Click",
    circle = false,
    onHandleClick = () => {console.log('Default click event.')}
}) {

    const buttonStyles = {
        display: 'flex',
        height: '35px',
        width: '35px',
        borderRadius: (circle ? '50%' : '5px'),
        padding: '8px',
        border: 'none',
        backgroundColor: "#202022",
        color: "white",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        fontSize: '18px'
    }

    return (
        <button
         className={className}
         onClick={onHandleClick}
         style={buttonStyles}
        >
         {content}
        </button>
    )
}