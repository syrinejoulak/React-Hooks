import React from 'react';
import SearchBox from "./SearchBox"
import FilterRate from "./FilterRate"

const Navbar = (props) => {
    return ( 
        <div className="navbar">
<h1 className="title">MovieTime</h1>
<SearchBox {...props}/>
<FilterRate {...props}/>
</div>
     );
}
 
export default Navbar;