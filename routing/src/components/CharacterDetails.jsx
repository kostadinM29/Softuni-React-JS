const baseUrl = 'https://swapi.dev/api/people/';

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CharacterDetails = () =>
{
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() =>
    {
        fetch(`${baseUrl}${id}`)
            .then(response =>
            {
                if (!response.ok)
                {
                    throw new Error('Not Found');
                }

                return response.json();
            })
            .then(data => setCharacter(data))
            .catch((error) =>
            {
                navigate('/characters');
            });
    }, [id]);
    return (
        <>
            <h1>{character.name}</h1>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, vitae.</p>
        </>
    );
};

export default CharacterDetails;