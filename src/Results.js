import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <section>
                    <div className="word">
                        <h3>{props.results.word}</h3>
                        <Phonetic phonetic={props.results.phonetic} />
                    </div>
                </section>
                <section>
                    <div className="definition">
                        {props.results.meanings.map(function (meanings, index) {
                            return (
                                <div key={index}>
                                    <Meaning meaning={meanings} />
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>)
    } else { return null; }

}
