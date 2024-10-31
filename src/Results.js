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
                        <h3>{props.results[0].word}</h3>
                        <Phonetic phonetic={props.results[0].phonetic} />
                    </div>
                </section>
                <section>
                    <div className="definition row">
                        {props.results[0].meanings.map(function (meanings, index) {
                            return (
                                <div className="col-md-6" key={index}>
                                    <div>
                                        <Meaning meaning={meanings} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>)
    } else { return null; }

}
