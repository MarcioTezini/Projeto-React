import './style.css';
import React from 'react';

export const TextInput = ({ searchValue, handleChange }) =>{
    return (
        <input
            placeholder="Procure aqui!"
            className="inputSearchCards"
            type="search"
            onChange={handleChange}
            value={searchValue}
        />
    );
}

 