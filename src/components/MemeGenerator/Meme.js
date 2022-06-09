import React from 'react';
import './Meme.css';

function Meme() {
    const [allMemes, setAllMemes] = React.useState([]);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomMeme: {
            box_count: 2,
            height: 1200,
            id: "181913649",
            name: "Drake Hotline Bling",
            url: "https://i.imgflip.com/30b1gx.jpg",
            width: 1200
        }
    });

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                setAllMemes(data.data.memes)
            });
    }, []);

    const getMemeImage = (e) => {
        e.preventDefault(); // prevent page from reloading
        let random_index = Math.floor(Math.random() * allMemes.length);
        setMeme(() => {
            return {
                topText: "",
                bottomText: "",
                randomMeme: allMemes[random_index]
            }
        });
    };

    function handleChange(event) {
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        });
    }

    return ( 
        <div className="generator--form">
            <form action="" className="generator--forms-control">
                <div className="generator--forms-input">
                    <input 
                        type="text" 
                        placeholder="Top Text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />

                    <input 
                        type="text" 
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage} className="generator--form-button">
                    Get a new meme image
                </button>
            </form>
            <div className="generator--meme">
                <img src={meme.randomMeme.url} alt="meme" />
                <h2 className="meme--text top">{ meme.topText }</h2>
                <h2 className="meme--text bottom">{ meme.bottomText }</h2>
            </div>
        </div>
    );
}

// class Meme extends React.Component{

//     constructor(props) {
//         super(props);
//          // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this); // enable access to this.state which is an instance variable
//         this.state = {
//             memes: memeData.data.memes,
//             random_meme: memeData.data.memes[0]
//         };
//     }

//     handleClick(e) {
//         e.preventDefault();
//         if (memeData.success) {
//             let random_index = Math.floor(Math.random() * this.state.memes.length);
//             this.setState({random_meme: this.state.memes[random_index]});

//         } else
//             alert('Request was not success!');
//     };

//     render() {
//         return (
//             <div className="generator--form">
//                 <form action="" className="generator--forms-control">
//                     <div className="generator--forms-input">
//                         <input type="text" placeholder="Top Text" />
//                         <input type="text" placeholder="Bottom Text" />
//                     </div>
//                     <button onClick={this.handleClick} className="generator--form-button">
//                         Get a new meme image
//                     </button>
//                 </form>
//                 <div className="generator--meme">
//                     <img src={this.state.random_meme.url} alt="meme" />
//                 </div>
//             </div>
//         );
//     }
// }

export default Meme;