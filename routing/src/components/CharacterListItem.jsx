import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { normalizeName } from '../utils/characterUtils';

const CharactersListItem = (
    {
        id,
        name,
        hair_color,
        eye_color,
        birth_year,
        gender,
    }) =>
{
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Body>
                    <ul>
                        <li>
                            Hair color: {hair_color}
                        </li>
                        <li>
                            Eye color: {eye_color}
                        </li>
                        <li>
                            Birth year: {birth_year}
                        </li>
                        <li>
                            Gender: {gender}
                        </li>
                    </ul>
                </Card.Body>
                <Button as={Link} to={`/characters/${id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
};

export default CharactersListItem;