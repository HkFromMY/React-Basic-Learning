import './MemeGenerator.css';
import Header from './Header';
import Meme from './Meme';

export default function MemeGenerator() {
  return (
    <div className="generator--page">
        <Header></Header>
        <div className="generator--content">
            <Meme></Meme>
        </div>
    </div>
  )
}