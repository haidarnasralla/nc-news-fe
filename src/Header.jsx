import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Header = () => {
    return (
        <>
            <Link to={'/'}>
                <h1>NC News</h1>
            </Link>
            <h2><a href="https://www.linkedin.com/in/haidarnasralla/LinkedIn">LinkedIn</a></h2>
        </>
    )
}

export default Header