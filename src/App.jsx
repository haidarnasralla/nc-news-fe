import { Routes, Route } from "react-router-dom";
import Header from './Header'
import Home from './Home';
import Article from "./Article";
import './styles.css'

const App = () => {

    return (
        <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articles/:article_id' element={<Article />} />
        </Routes>
        </>
    )
  
}

export default App