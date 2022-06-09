import Joke from './Joke';
import './Jokes.css';

export default function Jokes() {
    const jokes = [
        {
            setup: "I got my daughter a fridge for her birthday.",
            punchline: "I can't wait to see her face light up when she opens it.",
            isPun: true,
            upvotes: 10,
            downvotes: 2,
            comments: [{author: "random people", comment: "this jokes so funny"}]
        },
        {
            setup: "How did the hacker escape the police?",
            punchline: "He just ransomware!",
            isPun: true,
            upvotes: 13,
            downvotes: 4,
            comments: [{author: "random people 2", comment: "this jokes so funny"}]
        },
        {
            setup: "Why don't pirates travel on mountain roads?",
            punchline: "Scurvy.",
            isPun: true,
            upvotes: 10,
            downvotes: 2,
            comments: [{author: "random people", comment: "this jokes so funny"}]
        },
        {
            setup: "Why do bees stay in the hive in the winter?",
            punchline: "Swarm.",
            isPun: true,
            upvotes: 10,
            downvotes: 2,
            comments: [{author: "random people", comment: "this jokes so funny"}]
        },
        {
            setup: "What's the best thing about Switzerland?",
            punchline: "I don't know, but the flag is a big plus!",
            isPun: true,
            upvotes: 10,
            downvotes: 2,
            comments: [{author: "random people", comment: "this jokes so funny"}]
        },
    ];

    return (
        <div className="jokes">
            {
                jokes.map((joke) => {
                    return (
                        <Joke 
                        setup={joke.setup}
                        punchline={joke.punchline}
                        isPun={joke.isPun}
                        upvotes={joke.upvotes}
                        downvotes={joke.downvotes}
                        comments={joke.comments}
                        />
                    );
                })
            }
        </div>
    );
}

// passing different datat type into a JSX element
    // <Joke 
    //     setup="What's the best thing about Switzerland?" 
    //     punchline="I don't know, but the flag is a big plus!"
    //     isPun={true}
    //     upvotes={10}
    //     downvotes={2}
    //     comments={[{author: "random people", comment: "this jokes so funny"}]}
    // />