export default function Movie(props)
{
    return (
        <article>
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
            <hr />
        </article>
    );
}