import Country from "./Country";

function CountryList({ countries }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {countries.map((country) => (
        <Country
          key={country.name.common}
          country={country}
        />
      ))}
    </div>
  );
}

export default CountryList;