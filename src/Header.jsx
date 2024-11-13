import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Header = () => {
    return (
        <>
            <Link to={'/'}>
                <h1>NC News</h1>
            </Link>
        </>
    )
}

export default Header