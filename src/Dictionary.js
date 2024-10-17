import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}...`);
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
        </div>)
}
