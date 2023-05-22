import React, {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import { Link, useParams} from 'react-router-dom';

const DogDetails = (params) => {
    const { name } = useParams();
    const [dog, setDog] = useState(null);

    useEffect(() => {
        const dogClicked = () => {
            params.dogs.map(dog => {
                if(dog.name === name) {
                    setDog(dog)
                }
            })
        }
        dogClicked()
    }, [name]);

    return (
        <div className='DogDetails'>
            {dog ?
                <div>
                    <h1>This is {dog.name}</h1>
                    <img className="dogDetails-img" src={dog.src}/>
                    <h2>Facts about {dog.name}</h2>
                    <ul>
                        <li>Age: {dog.age}</li>
                        {dog.facts.map(fact => (
                            <li key={uuid()}>{fact}</li>
                        ))}
                    </ul>
                    <Link to='/dogs'>Go Back</Link>
                </div>

                : null}
        </div>
    )
};

export default DogDetails;
