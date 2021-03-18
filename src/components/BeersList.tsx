import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { selectBeers, updateBeersList } from "../redux/beersSlice"

function BeerList() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers")
            .then(res => res.json())
            .then(
                (result: any) => {
                    setIsLoaded(true);
                    const beersNames = result.map((r: any) => r.name)
                    dispatch(updateBeersList(beersNames));
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [dispatch])

    const beersList = useAppSelector(selectBeers)

    return (
        <div className="App">
            <header className="App-header">
                {isLoaded ? JSON.stringify(beersList) : "...Loading"}
                {error}
            </header>
        </div>
    );
}

export default BeerList;
