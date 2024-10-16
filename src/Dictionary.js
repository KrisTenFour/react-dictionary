import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
    return (<div className="Dictionary">
        <h2>What word are you looking for?</h2>
        <form>
            <input type="search" placeholder="Search..." autofocus />
            <input type="submit" value="Search" />
        </form>
    </div>)
}
