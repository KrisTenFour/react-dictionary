import React from "react";
import Synonym from "./Synonym"
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h5>{props.meaning.partOfSpeech}</h5>
            <p className="definition">{props.meaning.definition}</p>
            <Synonym synonym={props.meaning.synonyms} />
        </div>
    );

}
