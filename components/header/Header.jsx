import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade'
import LogoHeader from '../logoHeader/LogoHeader'
import './header.scss';


const Header = () => {
  const [phrase, setPhrase] = useState('api');
  const phrases = ['api', 'ecommerce', 'site'];
  let counter = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      counter++;
      if (counter >= phrases.length) counter = 0;
      setPhrase(phrase => phrases[counter]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header__container">
        <div className="header__logo">
          <LogoHeader />
        </div>
        <div className="header__content">
          <p><span className="wewe">We create your </span><span className="changingWord">{phrase}</span></p>
        </div>
    </div>
  )

};

export default Header;