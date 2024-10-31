import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
    if (props.synonym.length === 0) {
        return null;
    }
    else {
        return (
            <div className="Synonym">
                <p className="synonym-title">Synonym(s):</p>
                <ul>
                    {props.synonym.map(function (synonym, index) {
                        return <li key={index}>{synonym}</li>;
                    })}
                </ul>
            </div>)
    }
}
