import { useParams } from "react-router-dom";
import * as gameService from "../../../../services/gameService";
import * as commentsService from "../../../../services/commentsService";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../contexts/authContext";

const Details = () =>
{
    const { email } = useContext(AuthContext);
    const { id } = useParams();
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() =>
    {
        gameService.getOne(id)
            .then(setGame);

        commentsService.getAll(id)
            .then(setComments);
    }, [id]);

    const addCommentHandler = async (e) =>
    {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newComment = await commentsService.create(
            id,
            formData.get('comment'),
        );
        setComments(oldState => [...oldState, { ...newComment, owner: { email } }]);
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, owner, text }) => (
                            <li key={_id} className="comment">
                                <p>{owner.email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.lengt === 0 &&
                        <p className="no-comment">No comments.</p>}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>

    );
};

export default Details;