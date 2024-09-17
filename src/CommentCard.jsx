import { useEffect, useState } from 'react';
import { convertDate } from "./utils";
import { getComments } from "./api"

const CommentCard = ({article_id}) => {

    const [comments, setComments] = useState()

    useEffect(() => {
        getComments(article_id)
            .then((data) => {
                setComments(data)
            })
            .catch((err) => {
                console.error('Error fetching comments', err)
            })
    }, [article_id])

    if (!comments) {
        return <p>Loading comments...</p>;
      }

    return (
        <>
        {comments.map((comment) => {
            return (
                <div className='comment-card' key={comment.comment_id}>
                    <p>{comment.body}</p>
                    <p className='comment-author'>Posted by {comment.author} on {convertDate(comment.created_at)}</p>
                    <p className='comment-votes'>{comment.votes} votes</p>
                </div>
            )
        })}
        </>
    )

}

export default CommentCard