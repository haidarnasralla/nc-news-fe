import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, voteArticle } from './api';
import { convertDate } from "./utils";
import CommentSection from './CommentSection';


const Article = () => {
    
    const { article_id } = useParams()
    const [article, setArticle] = useState()
    const [loading, setLoading] = useState(true)
    const [likeArticle, setLikeArticle] = useState(null)
    const [articleVotes, setArticleVotes] = useState(0)
    const [originalVotes, setOriginalVotes] = useState(0)

    useEffect(() => {
            setLoading(true)
            getArticleById(article_id)
                .then((data) => {
                    setArticle(data)
                    setArticleVotes(data.votes)
                    setOriginalVotes(data.votes)
                    setLoading(false)
                })
                .catch((err) => {
                    console.log('Error fetching article:', err.response)
                    setLoading(false)
                });
    }, [article_id]);

    if (loading) return <p>Loading article...</p>;
    if (!article) return <p>Article not found.</p>;

    const likeArticleHandler = (e) => {

        e.preventDefault()

        const upVote = { inc_votes : 1 }
        const downVote = { inc_votes : -1 }

        if (likeArticle === null){
            setArticleVotes(articleVotes + 1)
            voteArticle(article_id, upVote)
                .then(setLikeArticle(true))
                .catch(() => {alert('Error - vote not recorded'); setArticleVotes(originalVotes)})
            
        } else if (likeArticle === true){
            setArticleVotes(articleVotes - 1)
            voteArticle(article_id, downVote)
                .then(setLikeArticle(null))
                .catch(() => {alert('Error - vote not recorded'); setArticleVotes(originalVotes)})
            
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
                <p>{article.comment_count} comments, {articleVotes} votes</p>
            </div>
            <button onClick={(e) => likeArticleHandler(e)}>Like this article</button>
        </div>
        <CommentSection article_id={article_id}/>
        </>
    )
};

export default Article;