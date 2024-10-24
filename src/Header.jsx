import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleTopicChange = (e) => {
        const selectedTopic = e.target.value;

        if (selectedTopic === "all") {
            navigate('/')
        } else {
            navigate(`/${selectedTopic}`)
        }
    }

    return (
        <>
            <Link to={'/'}>
                <h1>NC News</h1>
            </Link>
            <form>
                <input />
                <button>Search</button>
                <select onChange={handleTopicChange}>
                    <option value="all">All Topics</option>
                    <option value="coding">Coding</option>
                    <option value="football">Football</option>
                    <option value="cooking">Cooking</option>
                </select>
            </form>
        </>
    )
}

export default Header