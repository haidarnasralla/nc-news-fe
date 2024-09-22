import { convertDate } from "./utils"

const CommentCard = ({ comment_id, body, author, votes, created_at }) => {

    return (
        <div className="comment-card" key={comment_id}>
            <p>{body}</p>
            <p>Posted by {author} on {convertDate(created_at)}</p>
            <p>{votes} votes</p>
        </div>
    )

}

export default CommentCard