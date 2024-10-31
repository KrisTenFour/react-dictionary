import React from "react";
import Synonym from "./Synonym"
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props);
    return (
        <div className="Meaning">
            <h5>{props.meaning.partOfSpeech}</h5>
            <p className="definition"><em>{props.meaning.definitions[0].definition}</em></p>
            <Example example={props.meaning.definitions[0].example} />
            <Synonym synonym={props.meaning.synonyms} />
        </div >
    );
}
