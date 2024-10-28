import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const SearchBar = () => {
    const navigate = useNavigate();
    const [sortCriteria, setSortCriteria] = useState("date");
    const [sortOrder, setSortOrder] = useState("ascending");

    const handleTopicChange = (e) => {
        const selectedTopic = e.target.value;

        if (selectedTopic === "all") {
            navigate('/')
        } else {
            navigate(`/${selectedTopic}`)
        }
    }

    const handleSortCriteriaChange = (e) => {
        setSortCriteria(e.target.value);
        // Implement sorting based on selected criteria and order
        console.log(`Sorting by ${e.target.value} in ${sortOrder} order`);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
        // Implement sorting based on selected criteria and order
        console.log(`Sorting by ${sortCriteria} in ${e.target.value} order`);
    };

    return (
        <>
            <form>
                {/* <input />
                <button>Search</button> */}
                <label htmlFor="topic-select">Choose a topic:</label>
                <select id="topic-select" onChange={handleTopicChange}>
                    <option value="all">All Topics</option>
                    <option value="coding">Coding</option>
                    <option value="football">Football</option>
                    <option value="cooking">Cooking</option>
                </select>
                <div>
                    <label htmlFor="sort-criteria">Sort by:</label>
                    <select id="sort-criteria" value={sortCriteria} onChange={handleSortCriteriaChange}>
                        <option value="date">Date Published</option>
                        <option value="votes">Popularity (Votes)</option>
                        <option value="comments">Number of Comments</option>
                    </select>
                </div>
                <div>
                    <label>Order:</label>
                    <label>
                        <input
                            type="radio"
                            name="sortOrder"
                            value="ascending"
                            checked={sortOrder === "ascending"}
                            onChange={handleSortOrderChange}
                        />
                        Ascending
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="sortOrder"
                            value="descending"
                            checked={sortOrder === "descending"}
                            onChange={handleSortOrderChange}
                        />
                        Descending
                    </label>
                </div>
            </form>
        </>
    )
}

export default SearchBar