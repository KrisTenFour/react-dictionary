import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <h3>{props.results.word}</h3>
                {props.results.meanings.map(function (meanings, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meanings} />
                        </div>
                    )
                })}
            </div>)
    } else { return null; }

}
