import { useEffect, useState } from 'react';
import { getComments, deleteCommentById } from "./api"
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentSection = ({article_id}) => {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getComments(article_id)
            .then((data) => {
                setComments(data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.error('Error fetching comments', err)
                setIsLoading(false)
            })
    }, [article_id, setIsLoading, setComments])

    const deleteComment = (comment_id) => {

        const commentIndex = comments.findIndex((comment) => comment.comment_id === comment_id)
        const commentToBeDeleted = comments[commentIndex]

        setComments((prevComments) =>
            prevComments.filter((comment) => comment.comment_id !== comment_id)
        )
    
        deleteCommentById(comment_id)
            .then(() => {
                alert("Comment deleted!")
            })
            .catch((err) => {
                alert("Failed to delete comment")
                console.log(err)
    
                setComments((prevComments) => {
                    const updatedComments = [...prevComments]
                    updatedComments.splice(commentIndex, 0, commentToBeDeleted)
                    return updatedComments
                })
            })
    }
    

    if (isLoading) {
        return <p className='loading-or-no-comments'>Loading comments...</p>;
    } else if (!comments) {
        return <p className='loading-or-no-comments'>No comments</p>;
    }

    return (
        <>
        <CommentForm comments={comments} setComments={setComments} article_id={article_id}/>
        <CommentList comments={comments} deleteComment={deleteComment}/>
        </>
    )

}

export default CommentSection