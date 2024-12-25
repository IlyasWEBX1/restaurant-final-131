import React, { useState } from 'react';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Function to handle input changes
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);

        // Optionally, fetch results dynamically as user types (autocomplete)
        if (value.length > 0) {
            fetchResults(value);
        } else {
            setResults([]);
            setDropdownVisible(false);
        }
    };

    // Function to fetch results based on the search value
    const fetchResults = async (query) => {
        try {
            // Replace with your API endpoint
            const response = await fetch(`http://localhost:8000/api/search?query=${query}`);
            const data = await response.json();
            setResults(data);
            setDropdownVisible(true);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    // Function to handle form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim() !== '') {
            fetchResults(searchValue);
        }
    };

    return (
        <div id="banner-search-group" className="box-border relative w-full flex justify-center items-center">
            <form method="get" className="flex w-full" id="searchForm" role="search" onSubmit={handleSearchSubmit}>
                <div className="flex flex-nowrap h-10 w-64">
                    <div className="bg-white focus:border-blue-300 rounded border border-r-0 border-solid border-gray-400 box-border flex flex-nowrap items-center flex-auto text-sm leading-4 mb-0 focus:outline-none text-gray-800 align-middle w-48 transition ease-linear duration-200 lt:rounded-r-none">
                        <div className="awesomeplete">
                            <input
                                type="text"
                                name="searchval"
                                id="searchval"
                                value={searchValue}
                                onChange={handleInputChange}
                                autoComplete="off"
                                className="border-0 box-border text-base mb-0 focus:outline-none py-3 focus:placeholder-transparent w-64 h-full bg-transparent typeahead banner-search-input placeholder:text-gray-600 shadow-none max-h-[38px] pl-3 items-center"
                                placeholder="What are you looking for?"
                            />
                        </div>
                    </div>
                    <button
                        value="Search"
                        className="text-white rounded-r border-0 box-border text-sm py-2.5 px-4-1/2 lt:flex lt:items-center cursor-pointer bg-blue-700 lt:hover:bg-blue-800 tracking-[.02em]"
                        type="submit"
                    >
                        <span className="sr-only">Search</span>
                        <svg
                            aria-hidden="true"
                            className="fill-white"
                            width="40"
                            height="19"
                            viewBox="0 0 19 19"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M14.2745 13.1548L17.6652 16.5447L16.545 17.6649L13.155 14.2742C11.8937 15.2853 10.3248 15.8353 8.70825 15.833C4.77525 15.833 1.58325 12.641 1.58325 8.70801C1.58325 4.77501 4.77525 1.58301 8.70825 1.58301C12.6413 1.58301 15.8333 4.77501 15.8333 8.70801C15.8356 10.3246 15.2856 11.8935 14.2745 13.1548ZM12.6864 12.5674C13.6911 11.5342 14.2522 10.1492 14.2499 8.70801C14.2499 5.64584 11.7696 3.16634 8.70825 3.16634C5.64609 3.16634 3.16659 5.64584 3.16659 8.70801C3.16659 11.7694 5.64609 14.2497 8.70825 14.2497C10.1494 14.2519 11.5344 13.6908 12.5676 12.6861L12.6864 12.5674Z"></path>
                        </svg>
                    </button>
                </div>
            </form>
            {isDropdownVisible && results.length > 0 && (
                <div className="absolute bg-white border border-gray-300 mt-1 w-full z-10">
                    <ul>
                        {results.map((result, index) => (
                            <li key={index} className="p-2 hover:bg-gray-200">
                                <a href={result.url}>{result.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;