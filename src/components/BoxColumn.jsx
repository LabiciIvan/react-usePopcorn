import { useState } from "react";

export default function BoxColumn({children}) {
    const [open, setOpen] = useState(true);

    return (
        <div className={`column ${open ? "expanded" : "collapsed"}`}>
            <div className="column-controller">
                <span onClick={() => setOpen(prev => !prev)}>{open ? '-' : '+'}</span>
            </div>
            { open && children }
        </div>
    )
}