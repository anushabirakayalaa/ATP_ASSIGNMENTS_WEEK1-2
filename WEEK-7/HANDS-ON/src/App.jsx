// Import React hooks for state and effects 
import { useState,useEffect } from "react"
// imp componets
import Search from "./components/Search";
import CountryList from "./components/CountryList";

function App() {

  //create state to store all countries data
  const [countries, setCountries] = useState([]);
  //stores filtered countries based on search
  const [filtered, setFiltered] = useState([]);
  //show loading message while fetching data
  const [loading, setLoading] = useState(true);
  //error message 
  const [error, setError] = useState("");

  // Use effect to fetch data when component first loads
  useEffect(() => {
    // Fetch country data from the API
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")

      // Convert response to JSON
      .then((res) => res.json())

      // When data arrives, update states
      .then((data) => {
        // Set the full countries list
        setCountries(data);
        // Set filtered to same as full list initially
        setFiltered(data);
        // Stop showing loading
        setLoading(false);
      })

      // If fetch fails, show error
      .catch(() => {
        // Set error message
        setError("Failed to fetch data");
        // Stop showing loading
        setLoading(false);
      });

  // Empty array means run only once on mount
  }, []);

  // Function to handle search input
  function handleSearch(query) {

    // Filter countries where name includes the search query (case insensitive)
    const result = countries.filter((c) =>
      c.name.common.toLowerCase().includes(query.toLowerCase())
    );

    // Update filtered state with search results
    setFiltered(result);
  }

  // Return the JSX to render
  return (

    // Main container div with pink background and padding
    <div className="bg-pink-200  p-6">

      {/* Title heading */}
      <h1 className="text-center font-bold  text-3xl">Country Explorer</h1>

      {/* Search component, pass handleSearch function */}
      <Search onSearch={handleSearch} />

      {/* Show loading message if loading is true */}
      {loading && <p>Loading...</p>}

      {/* Show error message if there's an error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show country list if not loading and no error */}
      {!loading && !error && <CountryList countries={filtered} />}

    </div>
  );
}

// Export the App component as default
export default App;