import { useState, useContext  } from 'react';
import { postComment } from "./api"
import { UserContext  } from './LoggedInUser';

const CommentForm = ({article_id, comments, setComments}) => {

    const [commentBody, setCommentBody] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { user } = useContext(UserContext)

    const handleInputChange = (e) => {
        setCommentBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const date = new Date()
        const newComment = { author: `${user}`, body: `${commentBody}`, created_at: date }
        const adjustedComment = {
            votes: 0,
            comment_id: comments.length + 1,
            ...newComment
        }
        setComments([adjustedComment, ...comments]) 
        setIsSubmitting(true)
        setCommentBody("")
        postComment(article_id, newComment)
        .then(() => {
            setIsSubmitting(false);
            alert('Comment posted!')
        })
        .catch((err) => {
            alert('Error - comment not posted');
            console.log(err);
        });
    }

    return (
    <form onSubmit={(e) => handleSubmit(e)} className='post-comment'>
        
        {isSubmitting ? (
            <p>Posting comment...</p>
        ) : (
            <>
            <label>Post comment</label>
            <textarea
            onChange={(e) => handleInputChange(e)}
            value={commentBody}
            placeholder="Write your comment here..." />
            <button disabled={isSubmitting} type="submit">Submit</button>
            </>
        )
    }
    </form>
    )

}

export default CommentForm