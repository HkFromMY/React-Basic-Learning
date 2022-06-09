import React from 'react';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function ReactRouter() {
    let navigateTo = useNavigate();

    // this takes the URL parameters and store inside a variable
    let { username } = useParams();
    return (
        <div>
            This is profile page for { username }! {""}
            <button onClick={() => navigateTo("/about")}>Change to about page</button>
        </div>
    );
}
