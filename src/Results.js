import React from "react";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return <div><h3>Hey from {props.results}</h3></div>
    } else { return null; }

}
