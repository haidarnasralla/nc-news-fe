import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from './api';
import { convertDate } from "./utils";

const Article = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (article_id) {
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
        }
    }, []);

    if (loading) {
        return <p>Loading article...</p>;
    }

    if (!article) {
        return <p>Article not found.</p>;
    }

    return (
        <div className="article">
            <h1>{article.title}</h1>
            <img src={article.article_img_url} alt={article.title} />
            <div className="article-meta">
                <p>Posted by {article.author} on {convertDate(article.created_at)}</p>
            </div>
            <p>{article.body}</p>
            <div className="comments-votes">
                <p>{article.comment_count} comments, {article.votes} votes</p>
            </div>
        </div>
    )
};

export default Article;