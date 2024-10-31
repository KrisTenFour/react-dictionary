import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handlePhotoResponse(response) {
        setPhotos(response.data.photos);
    }

    function handleDictionaryResponse(response) {
        console.log(response);
        setResults(response.data);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        axios.get(apiUrl).then(handleDictionaryResponse);

        let apiKeyPhoto = "t9b7bfca5o9e8e14b53384f350a6b50f";
        let apiUrlPhoto = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKeyPhoto}`;

        axios.get(apiUrlPhoto).then(handlePhotoResponse);
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
                    <div >
                        <input type="search" placeholder="Search..." defaultValue={props.defaultKeyword} onChange={handleKeywordChange} autoFocus={true} className="form-control" />
                        <label className="form-text">e.g. dog, cat, cucumber...</label>
                    </div>
                </form>
                <Results results={results} />
                <Photos photos={photos} />
            </div>)
    } else {
        load();
        return "Loading...";
    }
}
