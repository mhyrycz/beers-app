import React from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { selectBeers, updateBeersList } from "../redux/beersSlice"

function BeerList() {
    const dispatch = useAppDispatch()

    const onClickUpdateBeers = () => dispatch(updateBeersList(["ale", "pale", "dark"]))
    return (
        <div className="App">
            <header className="App-header">
                <button type="button" onClick={onClickUpdateBeers}>
                    pour Beers
                </button>
                {JSON.stringify(useAppSelector(selectBeers))}
            </header>
        </div>
    );
}

export default BeerList;
