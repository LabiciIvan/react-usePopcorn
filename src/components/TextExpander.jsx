import { useState } from "react";

export default function TextExpander({
    text, 
    buttonName='Show more',
    buttonColor= 'blue',
    maxWordsDisplay = 10, 
    bgColor = 'white', 
    textColor = 'black',
    padding = '5',
    borderRadius= '5'
}) {

    const styleTextExpander = {
        display: 'flex',
        backgroundColor: bgColor,
        color: textColor,
        padding: `${padding}px`,
        borderRadius: `${borderRadius}px`
    }

    const styleButton = {
        color: buttonColor,
        border: 'none',
        marginLeft: '5px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
    }

    const [expand, setExpand] = useState(false);

    const fullText = text;

    const textArray = text.split(" ");

    const displayOnly = textArray.length <= maxWordsDisplay ? fullText : textArray.splice(0, maxWordsDisplay).join(" ");

    return (
        <div style={styleTextExpander}>
            <p>{expand ? fullText : displayOnly}</p>
            <button
             style={styleButton}
             onClick={(() => setExpand(prev => !prev))}
             >
                {buttonName}
            </button>
        </div>
    )
}