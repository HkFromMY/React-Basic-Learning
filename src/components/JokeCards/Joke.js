import React from 'react';
import './Joke.css';

export default function Joke({ setup, punchline, isPun, upvotes, downvotes, comments }) {
    const [isShown, setShown] = React.useState(false);

    function toggleShow() {
        setShown((prevShown) => !prevShown);
    }

    return (
        <div className="joke">
            {
                setup &&
                <p className="joke--setup">
                    <strong>Setup:</strong>{ ' ' + setup }
                    <br />
                </p>
            }
            {
                isShown && <p className="joke--setup"><strong>Punchline:</strong>{ ' ' + punchline }</p>
            }

            <button className="joke--button" onClick={toggleShow}>Show punchline</button>
            <hr />
        </div>
    );
}