import { Link } from "react-router-dom";
import { convertDate } from "./utils";

const ArticleCard = ({ article }) => {
    return (
        <div className="card" key={article.article_id}>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt={article.title} />
            <p>Posted by {article.author} on {convertDate(article.created_at)}</p>
            <p>{article.comment_count} comments, {article.votes} votes</p>
            <Link to={`/articles/${article.article_id}`}>
                <button>Read article</button>
            </Link>
        </div>
    );
};

export default ArticleCard;