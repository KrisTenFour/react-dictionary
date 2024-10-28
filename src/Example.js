import React from "react";

export default function Example(props) {
    if (props.example) {
        return (
            <div>
                <p className="example">Example: </p>
                <p>{props.example}</p>
            </div>)
    } else {
        return null;
    }
}
