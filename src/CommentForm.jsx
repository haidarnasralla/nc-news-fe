import { useState } from 'react';
import { postComment } from "./api"

const CommentForm = ({article_id, comments, setComments}) => {

    const [commentBody, setCommentBody] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e) => {
        setCommentBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const date = new Date()
        const newComment = { author: 'cooljmessy', body: `${commentBody}`, created_at: date }
        const adjustedComment = {
            votes: 0,
            comment_id: comments.length + 1,
            ...newComment
        }
        setComments([adjustedComment, ...comments]) 
        setIsSubmitting(true)
        setCommentBody("")
        postComment(article_id, newComment)
            .then(setIsSubmitting(false))
            .catch((err) => console.log(err))
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)} className='post-comment'>
        <label>Post comment</label>
        {isSubmitting ? (
            <p>Posting comment...</p>
        ) : (
            <textarea
            onChange={(e) => handleInputChange(e)}
            value={commentBody}
            placeholder="Write your comment here..." />
        )
    }
        <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
    )

}

export default CommentForm