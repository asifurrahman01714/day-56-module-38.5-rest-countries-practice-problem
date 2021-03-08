import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
      const url = `https://restcountries.eu/rest/v2/all`;
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCountries(data)
      })
    },[]);

    return (
        <div>
            <h1>Number Of Countries: {countries.length}</h1>
                {
                    countries.map(country => <Country country ={country} key={country.alpha3Code}></Country>)
                }
        </div>
    );
};

export default Home;