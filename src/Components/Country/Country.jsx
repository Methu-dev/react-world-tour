import { useState } from 'react';
import './Country.css';
function Country({country, handleVisitedContries, handleVisitedFlags}) {  
    const {name, flags,population, area,cca3} = country
    
    const [visite, setVisite]= useState(false);
    const handlevisite = ()=>{
        setVisite(!visite);
    };
    
    
  return (
    <div className={`country ${visite ? 'visited': 'no-visited'}`}>
        <h2>Name: {name.common}</h2>
        <img src={flags.png} alt="" />
        <p>population: {population}</p>
        <p>area: {area}</p>
        <p>Code: {cca3}</p>
        <div>
          <button onClick={()=>handleVisitedContries(country)}>Mark visited</button>
          <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Flags</button>
        </div>
        <br />
        <button onClick={handlevisite}>{visite? "visited": 'going'}</button>
        {visite ? 'I have visited this country':'I want to visite'}
    </div>
  )
}

export default Country
