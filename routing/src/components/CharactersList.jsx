const baseUrl = 'https://swapi.dev/api';

import { useEffect, useState } from "react";
import CharactersListItem from "./CharacterListItem";
import styles from './CharactersList.module.css';

const CharactersList = () =>
{
    const [characters, setCharacters] = useState([]);

    useEffect(() =>
    {
        const abortController = new AbortController();

        fetch(`${baseUrl}/people`, { signal: abortController.signal })
            .then(response => response.json())
            .then(data => setCharacters(data.results));

        return (() =>
        {
            abortController.abort();
        });
    }, []);
    return (
        <div className={styles.characterList}>
            {characters.map((character, index) => <CharactersListItem key={index} id={index + 1} {...character} />)}
        </div >
    );
};

export default CharactersList;