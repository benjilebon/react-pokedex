import React from 'react';
import Loader from './Loader';

const PokedexLoader = (p) => (
    <div className={p.load ? "pokedex-loader pokedex-loading" : "pokedex-loader"}>
        <Loader />
    </div>
    
)

export default PokedexLoader;