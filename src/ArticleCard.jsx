const ArticleCard = ({ articles }) => {

    const convertDate = (date) => {
        
        const dateObject = new Date(date)

        const formattedDate = dateObject.toLocaleString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })

        return formattedDate.replace(',', ', at')
    }

    return (
        <>
        {articles.map((article) => {
            return (
                <div className="card" key={article.article_id}>
                    <h3>{article.title}</h3>
                    <img src={article.article_img_url}/>
                    <p>Posted by {article.author} on {convertDate(article.created_at)}</p>
                    <p>{article.comment_count} comments, {article.votes} votes</p>
                    <button>Read article</button>
                </div>
            )
        })}
        </>
    )


}

export default ArticleCard