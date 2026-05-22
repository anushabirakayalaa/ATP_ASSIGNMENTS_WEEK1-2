import react from "react"
function Country({ country }) {
  return (
    <div className="border rounded p-4 text-center bg-yellow-200">
      <img className="mx-auto mb-3"
        src={country.flags.png}
        alt={country.name.common}
        width="150"
      />
      <h3 className="font-bold">{country.name.common}</h3>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
    </div>
  );
}

export default Country;