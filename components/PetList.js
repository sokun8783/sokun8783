import React from 'react';

const PetList = (props) => {
    return (
        <div>
            <label htmlFor="search">Search</label>
            <input type="text" value={props.inputValue} onChange={props.petFilterOnChange}/>
        </div>
    );
}

export default PetList;
