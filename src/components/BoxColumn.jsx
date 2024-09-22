import { useState } from "react";
import Button from "./Button";

export default function BoxColumn({children}) {
    const [open, setOpen] = useState(true);

    return (
        <div className={`column ${open ? "expanded" : "collapsed"}`}>
            <div className="column-controller">
                <Button
                 circle={true}
                 content={open ? '-' : '+'}
                 onHandleClick={() => setOpen(prev => !prev)}
                />
            </div>
            { open && children }
        </div>
    )
}