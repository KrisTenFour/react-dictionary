import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <h3>{props.results.word}</h3>
                <Phonetic phonetic={props.results.phonetic} />
                {props.results.meanings.map(function (meanings, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meanings} />
                        </div>
                    );
                })}
            </div>)
    } else { return null; }

}
