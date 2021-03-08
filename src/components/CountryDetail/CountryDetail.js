import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    let {countryName} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCountry(data[0]);
        })
    },[]);

    const {area, flag} = country;
    const flagStyle = {
        width : '400px',
        height: '200px'
    };
    return (
        <div>
            <img src={flag} alt="" style={flagStyle}/>
            <h1>Country Details of :{countryName}</h1>
            <h1>Total area :{area}</h1>
        </div>
    );
};

export default CountryDetail;