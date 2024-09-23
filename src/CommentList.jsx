import CommentCard from './CommentCard';

const CommentList = ({comments, deleteComment }) => {

    return (
        <div>
            {comments.map(({ comment_id, body, author, votes, created_at }) => {
            return (
                <CommentCard 
                    key={comment_id}
                    comment_id={comment_id}
                    body={body}
                    author={author}
                    votes={votes}
                    created_at={created_at}
                    deleteComment={deleteComment}
                />
            )
        })}
        </div>
    )

}

export default CommentList