import React from "react";
import Synonym from "./Synonym"
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div>
            <h2>{props.meaning.partOfSpeech}</h2>
            <p>{props.meaning.definition}</p>
            <Synonym synonym={props.meaning.synonyms} />
        </div>
    );

}
