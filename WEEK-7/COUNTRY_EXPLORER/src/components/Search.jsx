import { useEffect, useRef } from "react";

function Search({ onSearch }) {
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // Auto focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(e) {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      onSearch(e.target.value);
    }, 500); 
  }

  return (
    <input  className="p-3 align-center  mb-5 border rounded"
      ref={inputRef}
      type="text"
      placeholder=" search country"
      onChange={handleChange}

    />
  );
}

export default Search;