import React, { useState } from "react";


const SearchBar = () => {
    const [search, setSearch] = useState("ditto")

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onbuttonClickHandler = () => {
        console.log("pokemon:", search)
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-bnt">
                <button onClick={onbuttonClickHandler}>Buscar </button>
            </div>
        </div>
    )
}
export default SearchBar;
