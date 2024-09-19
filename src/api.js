import axios from 'axios';

const ncNews = axios.create({
    baseURL: 'https://nc-news-be-v00f.onrender.com/api'
})

export const getArticles = () => {
    return ncNews.get('/articles').then(({ data }) => {
        return data.articles
    })
}

export const getArticleById = (articleId) => {
    return ncNews.get(`/articles/${articleId}`).then(({data}) => {
        return data.article
    })
}

export const getComments = (articleId) => {
    return ncNews.get(`/articles/${articleId}/comments`).then(({data}) => {
        console.log(data.comments)
        return data.comments
    })
}

export const voteArticle = (articleId, vote) => {
    return ncNews.patch(`/articles/${articleId}`, vote).then(({data}) => {
        return data.article
        console.log(data.article.votes)
    })
}