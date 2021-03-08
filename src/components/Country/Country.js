import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    console.log(props);
    console.log(props.country);
    const {name, capital, area } = props.country;
    const countryStyle = {
        border: '1px solid gray',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style={countryStyle}>
            <h1>Country : {name}</h1>
            <h1>Country : {capital}</h1>
            <h1>Country : {area}</h1>
            <Link to={`/country/${name}`}><button>See Details of: {name}</button></Link>
        </div>
    );
};

export default Country;