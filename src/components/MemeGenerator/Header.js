import './Header.css';

export default function Header() {
  return (
    <div className="generator--header">
        <nav className="generator--nav">
            <img src="./images/troll.png" alt="troll face" width="50" height="50"/>
            <h1 className="generator--title">Meme Generator</h1>
            <p>React Course - Project 3</p>
        </nav>
    </div>
  )
}