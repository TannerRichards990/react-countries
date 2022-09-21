import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import Countries from '../Countries/Countries';
import Filter from '../Filter/Filter';
import './Main.css';

export default function Main() {
  const { filterCountries, type, setType } = useCountries();

  return (
    <div className="main">
      <Filter type={type} setType={setType} />
      <div className="countries">
        {filterCountries().map((country) => (
          <Countries
            key={country.name}
            name={country.name}
            iso2={country.iso2}
          />
        ))}
      </div>
    </div>);
}