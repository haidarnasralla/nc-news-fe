import { useEffect, useState } from 'react';
import { getComments } from "./api"
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

    if (isLoading) {
        return <p className='loading-or-no-comments'>Loading comments...</p>;
    } else if (!comments) {
        return <p className='loading-or-no-comments'>No comments</p>;
    }

    return (
        <>
        <CommentForm comments={comments} setComments={setComments} article_id={article_id}/>
        <CommentList comments={comments} setComments={setComments}/>
        </>
    )

}

export default CommentSection