import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import Spinner from './components/Spinner/Spinner';
import Info from './Info';

export default function Data(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches")
        .then(res => res.json())
        .then(
            result => {
                setIsLoaded(true)
                setItems(result)
            },
            error => {
                setIsLoaded(true)
                setError(error)
            }
        )
    }, [])

    const Loading = () => (
        <Spinner />
    )
        
    function showItem(item, index) {
        return (
            <LazyLoad height={200} offset={100} once={true} key={index} placeholder={<Loading />}>
                <Info item={item} />
            </LazyLoad>
        )
    }

    if(error){
        return <div>Error: {error}</div>
    } else if(!isLoaded){
        return <div>
            <Spinner />
        </div>
    } else {
        return(
            <div className="container">
                {items.map(showItem)}
            </div>
        )
    }

}
