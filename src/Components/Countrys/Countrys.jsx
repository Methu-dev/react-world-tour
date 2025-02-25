import React, { useEffect, useState } from 'react'
import Country from '../Country/Country';
import './Countrys.css'


const Countrys = () => {
    const [countrys, setCountry]=useState([]);

       const [visitedCountries, setVisitedCountries] = useState([]);

       const [visitedFlgs, setVisitedFlags] = useState([]);

    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountry(data)
        );
    },[])

      const handleVisitedContries = contry =>{
       
        const newVisitedContries =[...visitedCountries,contry];
        setVisitedCountries(newVisitedContries)
        
      }

      const handleVisitedFlags =flag=>{
        const newVisitedFlags = [...visitedFlgs,flag];
        setVisitedFlags(newVisitedFlags)
      }

  return (
    <div>
      <h1>Country:{countrys.length}</h1>
      <div>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul>
        {
          visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li>)
        }
        </ul>
      </div>
       
     <div className='flag-container'>
      {
        visitedFlgs.map((flag, idx) => <img key={idx} src={flag}></img>)
      }
     </div>

     <div className='contry-container'>
       {
         countrys.map(country =><Country key={country.cca3} country={country} handleVisitedContries={handleVisitedContries} handleVisitedFlags={handleVisitedFlags}></Country>)
      }
     </div>
    </div>
  )
}

export default Countrys
