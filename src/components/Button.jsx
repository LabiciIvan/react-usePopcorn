import { useState } from "react"


export default function Button({
    className = 'btn', 
    content = "Click",
    circle = false,
    hoverColor = "gray",
    bgColor = "#202022",
    onHandleClick = () => {console.log('Default click event.')}
}) {

    const [hover, setHover] = useState(false);

    const buttonStyles = {
        display: 'flex',
        height: (circle ? '35px' : ''),
        width: (circle ? '35px' : ''),
        borderRadius: (circle ? '50%' : '5px'),
        padding: '8px',
        border: 'none',
        backgroundColor: (hover ? hoverColor : bgColor),
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
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         style={buttonStyles}
        >
         {content}
        </button>
    )
}