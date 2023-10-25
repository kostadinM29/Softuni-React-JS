import Movie from './Movie.jsx'

export default function MovieList(props)
{
    return (
        <div className="movie-list">
            <h2>
                {props.headingText}
            </h2>
            <ul>
                {props.movies.map((movie, index) =>
                {
                    return (
                        <Movie data={movie} />
                    );
                })}
            </ul>
        </div>
    );
}