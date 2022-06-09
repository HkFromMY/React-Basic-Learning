import Contact from './components/ContactCards/Contact';
import './Contacts.css';

export default function Contacts() {
  return (
    <div className="contacts">
        <Contact 
            img_path="./images/cat1.png"
            name="Mr. Whiskerson" 
            contact_no="{212} 555-1234" 
            email="mr.whiskaz@catnap.meow" 
        />
        
        <Contact 
            img_path="./images/cat2.jpg"
            name="Fluffykins" 
            contact_no="{212} 555-2345" 
            email="fluff@me.com" 
        />

        <Contact 
            img_path="./images/cat3.jpg" 
            name="Felix" 
            contact_no="{212} 555-4567" 
            email="thecat@hotmail.com" 
        />

        <Contact 
            img_path="./images/cat4.jpg" 
            name="Pumpkin" 
            contact_no="{0800} CAT KING" 
            email="pumpkin@scrimba.com" 
        />
    </div>
  )
}