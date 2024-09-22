import { useEffect, useState } from 'react';
import { getArticles } from './api';
import ArticleCard from './ArticleCard';

const CardContainer = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getArticles()
            .then((data) => {
                setArticles(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching articles', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading articles...</p>;
    }

    return (
        <div className="cardContainer">
            {articles.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
            ))}
        </div>
    );
};

export default CardContainer;