import axios from 'axios';

const ncNews = axios.create({
    baseURL: 'https://nc-news-be-v00f.onrender.com/api'
})

export const getArticles = () => {
    return ncNews.get('/articles').then(({ data }) => {
        return data.articles
    })
    .catch((err) => console.log(err.response))
}

export const getArticleById = (articleId) => {
    return ncNews.get(`/articles/${articleId}`).then(({data}) => {
        return data.article
    })
    .catch((err) => console.log(err.response))
}

export const getComments = (articleId) => {
    return ncNews.get(`/articles/${articleId}/comments`).then(({data}) => {
        return data.comments
    })
    .catch((err) => console.log(err.response))
}

export const voteArticle = (articleId, vote) => {
    return ncNews.patch(`/articles/${articleId}`, vote).then(({data}) => {
        return data.article
    })
    .catch((err) => console.log(err.response))
}

export const postComment = (articleId, comment) => {
    return ncNews.post(`/articles/${articleId}/comments`, comment).then(({data}) => {
        return data.comment
    })
    .catch((err) => console.log(err.response))
}

export const deleteCommentById = (commentId) => {
    return ncNews.delete(`/comments/${commentId}`)
        .then(({ data }) => {
            return data
        })
        .catch((err) => {
            return err.response
        });
};