import React from 'react';

import './Ad.css';

const ad = (props) => (
    <article className="Ad" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
        <div>{props.id}</div>
    </article>
);

export default ad;
