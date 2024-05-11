import  { useState, ChangeEvent } from 'react';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    console.log("Valor de búsqueda:", searchValue);
  };

  return (
    <div>
      <div className="input-search flex gap-1">
        <input
          type="text"
          placeholder="Buscar"
          className="input-search rounded-md w-2/3 p-4"
          id="search-book"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className="btn-search font-white w-1/4" onClick={handleSearch}>Buscar</button>
      </div>
    </div>
  );
}

export default Search;
