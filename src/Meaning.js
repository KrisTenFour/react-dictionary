import React from "react";
import Synonym from "./Synonym"
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <span className="part-of-speech"><em>{props.meaning.partOfSpeech}</em></span>
            <p className="definition"><em>{props.meaning.definitions[0].definition}</em></p>
            <Example example={props.meaning.definitions[0].example} />
            <Synonym synonym={props.meaning.synonyms} />
        </div >
    );
}
