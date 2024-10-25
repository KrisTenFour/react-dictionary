import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <span>{props.phonetic}</span>
        </div>
    )
}
