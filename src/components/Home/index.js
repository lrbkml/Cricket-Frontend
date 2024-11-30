import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'; // Import icons
import LogoPL from '../../assets/images/PL.webp';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = 'Welcome to'.split('');
  const jobArray = 'Indian Premier League Stats!'.split('');

  useEffect(() => { 
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <img src={LogoPL} alt="IPLZone" />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
          </h1>
          <h2>Home of all IPL players!</h2>
          <Link to="/teams" className="flat-button">
            GET STARTED
          </Link>

         
        </div>
      </div>

       {/* Developer Info */}
       <div className="developer-info">
            <h1>Developed by <strong>Laraib Kamal</strong></h1>
            
            <div className="icon-links">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" title="GitHub" />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" title="LinkedIn" />
              </a>
              <a href="https://johndoeportfolio.com" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="icon" title="Portfolio" />
              </a>
            </div>
        
          </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
