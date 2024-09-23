import { useContext  } from 'react';
import { convertDate } from "./utils"
import { UserContext  } from './LoggedInUser';

const CommentCard = ({ comment_id, body, author, votes, created_at, deleteComment  }) => {

    const { user } = useContext(UserContext)
    const isUserComment = (author === user)

    const deleteCommentHandler = (e) => {
        e.preventDefault()
        deleteComment(comment_id)
    }

    return (
        <div className="comment-card" key={comment_id}>
            <p>{body}</p>
            <p>Posted by {author} on {convertDate(created_at)}</p>
            <p>{votes} votes</p>
            {isUserComment && (
                <button onClick={(e) => deleteCommentHandler(e)}>Delete comment</button>
            )}
        </div>
    )

}

export default CommentCard