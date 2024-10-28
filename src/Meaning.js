import React from "react";
import Synonym from "./Synonym"
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
    if (props.meaning) {
        return (
            <div className="Meaning">
                <h5>{props.meaning.partOfSpeech}</h5>
                <p className="definition"><em>{props.meaning.definition}</em></p>
                <Example example={props.meaning.example} />
                <Synonym synonym={props.meaning.synonyms} />
            </div >
        );
    } else {
        return (
            <div className="not-found">
                <p>Oops I stopped loading! Try another word!</p>
            </div>
        )
    }


}
