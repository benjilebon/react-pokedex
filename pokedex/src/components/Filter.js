import React from 'react';

const Filter = (p) => (
    <>
        <form onSubmit={p.filter} autoComplete="off">
            <div className="input-field">
                <input
                    id="filter"
                    name="filter"
                    type="text"
                    onChange={val => p.dynamicFilter(val)}
                    value={p.value}
                />
                <label htmlFor="filter">Entrez un nom de pokémon</label>
            </div>
            <button className="btn waves-effect" type="submit" name="action">Filtrer
            </button>
        </form>
    </>
)

export default Filter;