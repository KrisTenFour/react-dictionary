import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (
            <div className="Photos">
                <div className="row">
                    {props.photos.map(function (photos, index) {
                        return (
                            <div className="col-md-4" key={index}>
                                <img src={photos.src.landscape} className="img-fluid" alt={photos.alt} />
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    } else {
        return null;
    }

}
