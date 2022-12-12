import React, { useState, useEffect } from 'react';
import getNames from './data/names';

const Names = () => {
    const [names, setNames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNames().then(result => {
            setNames(result);
            setLoading(false);
        })
    }, []);

    if(loading) return <p>Trwa ładowanie informacji...</p>

    return <ul className='list-group'>
        {
            names.map((name, index) => (
                <li key={index} className='list-group-item'>
                    {name}
                </li>
            ))
        }
    </ul>
}

export { Names }
