import {useState, useEffect} from 'react';
import './header.scss';


const Header = () => {
    const [phrase, setPhrase] = useState('api');
    const phrases = ['api', 'ecommerce', 'site'];
    let counter = 0;
    useEffect(() => {
      const interval = setInterval(() => {
        counter ++;
        if (counter >= phrases.length) counter=0;
        setPhrase(phrase => phrases[counter]);
      }, 1500);
      return () => clearInterval(interval);
    }, []);

    return (
        <div className="header__container">
            <div className="header__logo">
                <h1 className="header__logo">Invisible Objects</h1>
            </div>
            <div className="header__content">
            <p>We create your <span>{phrase}</span></p>
            </div>
        </div>
    )

};

export default Header;