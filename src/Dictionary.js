import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data.word);
    }

    function search(event) {
        event.preventDefault();

        let apiKey = "t9b7bfca5o9e8e14b53384f350a6b50f";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <h2>What word are you looking for?</h2>
            <form onSubmit={search}>
                <input type="search" placeholder="Search..." onChange={handleKeywordChange} autoFocus={true} />
                <input type="submit" value="Search" />
            </form>
            <Results results={results} />
        </div>)
}
