import React from 'react';

const SearchBox = ({searchfield, onSearch}) => {
    return ( 
        <input onChange={onSearch} type="search" placeholder="Search movie..." className="search-box" />
     );
}
 
export default SearchBox;