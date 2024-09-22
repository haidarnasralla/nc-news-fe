import CommentCard from './CommentCard';

const CommentList = ({comments, setComments}) => {

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
                />
            )
        })}
        </div>
    )

}

export default CommentList