import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div>
            <h2>{props.meaning.partOfSpeech}</h2>
            <p>{props.meaning.definition}</p>
        </div>
    );

}
