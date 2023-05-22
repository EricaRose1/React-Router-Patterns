import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link, useParams } from 'react-router-dom';

const DogList = (props) => {
    return (
        <div className='DogList'>
            <h1>Dog Finder</h1>
            <ul>
                {props.dogs.map(dog => (
                    <li key={uuid()}>
                        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DogList;