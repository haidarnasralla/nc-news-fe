import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticlesByTopic } from './api';
import ArticleCard from './ArticleCard';

const TopicCardContainer = () => {

    // Get the topic from the URL
    const { topic } = useParams();
    
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!topic) return;
        setLoading(true);
        getArticlesByTopic(topic)
            .then((data) => {
                setArticles(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching articles', err);
                setLoading(false);
            });
    }, [topic]);

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

}

export default TopicCardContainer