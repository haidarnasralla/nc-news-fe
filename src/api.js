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