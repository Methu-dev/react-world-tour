import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';


const Countrys = () => {
    const [countrys, setCountry]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountry(data)
        );
    },[])
  return (
    <div>
      <h1>Country:{countrys.length}</h1>
      {
         countrys.map(country =><Country key={country.cca3} country={country}></Country>)
      }
    </div>
  )
}

export default Countrys
