import { useEffect, useState } from 'react';
import { convertDate } from "./utils";
import { getComments } from "./api"

const CommentCard = ({article_id}) => {

    const [comments, setComments] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getComments(article_id)
            .then((data) => {
                setComments(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error('Error fetching comments', err)
                setLoading(false)
            })
    }, [article_id, setLoading])

    if (loading) {
        return <p className='loading-or-no-comments'>Loading comments...</p>;
    }

    if (!comments) {
        return <p className='loading-or-no-comments'>No comments</p>;
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