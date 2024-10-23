import { Link } from "react-router-dom"
import { getArticlesByTopic } from "./api"

const Header = () => {

    let topic = null

    return(
        <>
        <Link to={'/'}>
        <h1>NC News</h1>
        </Link>
        <form>
            <input />
            <button>Search</button>
            <select>
                <option>Select a topic</option>
                <option>Coding</option>
                <option>Football</option>
                <option>Cooking</option>
            </select>
        </form>
        </>
    )

}

export default Header