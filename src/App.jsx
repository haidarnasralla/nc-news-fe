import { Routes, Route } from "react-router-dom";
import Header from './Header'
import CardContainer from './CardContainer'
import TopicCardContainer from "./TopicCardContainer";
import Article from "./Article";
import { UserProvider } from "./LoggedInUser";
import './styles.css'
import SearchBar from "./SearchBar";

const App = () => {

    return (
        <>
        <UserProvider>
        <Header />
        <SearchBar />
        <Routes>
            <Route path='/' element={<CardContainer />} />
            <Route path='/articles/:article_id' element={<Article />} />
            <Route path='/:topic' element={<TopicCardContainer />} />
        </Routes>
        </UserProvider>
        </>
    )
  
}

export default App