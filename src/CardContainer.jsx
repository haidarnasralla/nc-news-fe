import { useEffect, useState } from 'react'
import { getArticles } from './api'
import ArticleCard from './ArticleCard'

const CardContainer = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
        .then((data) => {
            setArticles(data)
            console.log(data)
        })
        .catch((err) => console.log(err))
    }, [getArticles, setArticles])

    return (
        <div className="cardContainer">
            <ArticleCard articles={articles} />
        </div>
    )

}

export default CardContainer