// import './App.css'; // this is for Main.js and Navbar.js
// import Main from './components/Main';
// import Navbar from './components/Navbar';
// import DigitalBusinessCard from './BusinessPage';
// import AirBNB from './AirBNB';
// import Contacts from './Contacts';
// import Jokes from './components/JokeCards/Jokes';
// import TravelJournal from "./components/TravelJournal/TravelJournal";
// import MemeGenerator from './components/MemeGenerator/MemeGenerator';
// import Counter from './components/Counter/Counter';
// import Form from './components/FormInputPractice/Form';
// import NotesApp from "./components/NotesApp/NotesApp";
// import Tenzies from "./components/Tenzies/Tenzies";
// import Quizzical from './components/Quizzical/Quizzical';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/ReactRouter/Home';
import About from './components/ReactRouter/About';
import Profile from './components/ReactRouter/Profile';
import Error404 from './components/ReactRouter/Error404';

function App() {
    let name = "Honkit";
    return (
        <div className="App">
            {/* <h1 style={{maxWidth: "750px", margin: "auto", textAlign: "center"}}>Contact Cards of Cats</h1>
            <Contacts /> */}
            {/* <Jokes /> */}
            {/* <AirBNB /> */}
            {/* <TravelJournal></TravelJournal> */}
            {/* <MemeGenerator></MemeGenerator> */}
            {/* <Counter></Counter> */}
            {/* <Form /> */}
            {/* <NotesApp /> */}
            {/* <Tenzies /> */}
            {/* <Quizzical /> */}
            <Router>
                {/* This will appear at every pages */}
                <nav>
                    <Link to="/">Home</Link> | {""}
                    <Link to="/about">About</Link> | {""}
                    <Link to={`/profile/${name}`}>Profile</Link>
                </nav>

                {/* Only the routes component will change */}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/profile/:username" element={<Profile />}></Route>
                    <Route path="/*" element={<Error404 />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
