import React from "react";
import "./Example.css";

export default function Example(props) {
    if (props.example) {
        return (
            <div className="Example">
                <p className="example-title">Example: </p>
                <p>{props.example}</p>
            </div>)
    } else {
        return null;
    }
}
