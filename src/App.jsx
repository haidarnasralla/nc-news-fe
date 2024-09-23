import { Routes, Route } from "react-router-dom";
import Header from './Header'
import Home from './Home';
import Article from "./Article";
import { UserProvider } from "./LoggedInUser";
import './styles.css'

const App = () => {

    return (
        <>
        <UserProvider>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/articles/:article_id' element={<Article />} />
        </Routes>
        </UserProvider>
        </>
    )
  
}

export default App