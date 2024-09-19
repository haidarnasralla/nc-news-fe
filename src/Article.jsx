import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, voteArticle } from './api';
import { convertDate } from "./utils";
import CommentCard from './CommentCard';

const Article = () => {
    
    const { article_id } = useParams()
    const [article, setArticle] = useState()
    const [loading, setLoading] = useState(true)
    const [hasVotedUp, setHasVotedUp] = useState(false)
    const [hasVotedDown, setHasVotedDown] = useState(false)

    useEffect(() => {
            setLoading(true)
            getArticleById(article_id)
                .then((data) => {
                    setArticle(data)
                    setLoading(false)
                })
                .catch((err) => {
                    console.error('Error fetching article:', err)
                    setLoading(false)
                });
    }, [article_id, setArticle]);

    if (loading) return <p>Loading article...</p>;

    if (!article) return <p>Article not found.</p>;

    const handle = {
        upVote: (e) => {
            if (hasVotedUp){
                return
            } else
            e.preventDefault()
            const upVote = { inc_votes : 1 }
            article.votes++
            voteArticle(article_id, upVote).catch(() => {alert('Error - vote not recorded'); article.votes--})
            setHasVotedUp(true)
            setHasVotedDown(false)
        },
        downVote: (e) => {
            if (hasVotedDown){
                return
            } else
            e.preventDefault()
            const downVote = { inc_votes : -1 }
            article.votes--
            voteArticle(article_id, downVote).catch(() => {alert('Error - vote not recorded'); article.votes++})
            setHasVotedDown(true)
            setHasVotedUp(false)
        }
    }

    return (
        <>
        <div className="article">
            <h1>{article.title}</h1>
            <img src={article.article_img_url} alt={article.title} />
            <div className="article-meta">
                <p>Posted by {article.author} on {convertDate(article.created_at)}</p>
            </div>
            <p>{article.body}</p>
            <div className="article-comments-votes">
                <p>{article.comment_count} comments, {article.votes} votes</p>
            </div>
            <button onClick={(e) => handle.upVote(e)}>Upvote</button>
            <button onClick={(e) => handle.downVote(e)}>Downvote</button>
        </div>
        <CommentCard article_id={article_id}/>
        </>
    )
};

export default Article;