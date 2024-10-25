import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data);
    }

    function search() {
        let apiKey = "t9b7bfca5o9e8e14b53384f350a6b50f";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search()
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">
                <h2 className="sub-head">Which word are you looking for?</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Search..." onChange={handleKeywordChange} autoFocus={true} className="form-control" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
                <Results results={results} />
            </div>)
    } else {
        load();
        return "Loading...";
    }
}
