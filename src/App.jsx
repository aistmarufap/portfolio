import { useState, useEffect } from 'react';
import './App.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SpinLoader from './pages/Loaders/SpinLoader';
import loadingGif from '../public/bleach.gif';
import Navbar from './pages/shared/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faCodeBranch, faEnvelope, faFileAlt, faFolder } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ActiveIcon from './pages/shared/ActiveIcon';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showGif, setShowGif] = useState(false);

  const gifDuration = 10; // Duration to show GIF in milliseconds

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setShowGif(true);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (showGif) {
      const gifTimer = setTimeout(() => {
        setShowGif(false);
      }, gifDuration);

      return () => clearTimeout(gifTimer);
    }
  }, [showGif]);

  // if (isLoading) {
  //   return <SpinLoader />;
  // }
  const location = useLocation();
  // useEffect(() => {
  //   const audio = new Audio('/bankai.mp3'); // Load your audio file
  //   audio.volume = 0.08; // Set volume level (0.0 to 1.0)

  //   const handleClick = () => {
  //     // Pause the current audio if it's playing and reset to the start
  //     if (!audio.paused) {
  //       audio.pause();
  //       audio.currentTime = 0; // Reset audio to start
  //     }

  //     // Play the audio again from the beginning
  //     audio.play();
  //   };

  //   // Add event listener for clicks anywhere on the document
  //   document.addEventListener('click', handleClick);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //   };
  // }, []);
  useEffect(() => {
    const audio = new Audio('/bankai.mp3');
    audio.volume = 0.08;

    const handleClick = (event) => {
      // Use closest to make sure it checks the element or any parent element with the class
      const targetElement = event.target.closest('.play_bankai');
      if (targetElement) {
        if (!audio.paused) {
          audio.pause();
          audio.currentTime = 0;
        }
        audio.play().catch(error => {
          // Handle playback errors (e.g., if the browser blocks it)
          console.error('Audio playback failed:', error);
        });
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  console.log(location.pathname);

  return (
    <div>
      <div className='home_design'>
        <div class="background-image"></div>
        <div class="background-overlay"></div>
        <div class="content">
          <Navbar></Navbar>
          <div className="social_media">
            <a href="#" className='play_bankai' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='social_icon play_bankai' icon={faLinkedin} size="2x" color="#0077B5" />
            </a>
            <a href="#" className='play_bankai' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='social_icon play_bankai' icon={faGithub} size="2x" color="#333" />
            </a>
            <a href="#" className='play_bankai' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='social_icon play_bankai' icon={faFileAlt} size="2x" color="#4A4A4A" />
            </a>
            <a href="#" className='play_bankai' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='social_icon play_bankai' icon={faFacebook} size="2x" color="#4267B2" />
            </a>

            <a href="#" className='play_bankai' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='social_icon play_bankai' icon={faInstagram} size="2x" color="#E1306C" />
            </a>

            <a href="#" className='play_bankai' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='social_icon play_bankai' icon={faTwitter} size="2x" color="#1DA1F2" />
            </a>


          </div>
          <div className="manageweb">
            <ActiveIcon to="/managemsg" className='play_bankai' rel="noopener noreferrer">
              <FontAwesomeIcon className='social_icon play_bankai' icon={faEnvelope} size="2x" color="#4A4A4A" />
            </ActiveIcon>

            <ActiveIcon to="/manageposts" className='play_bankai' rel="noopener noreferrer">
              <FontAwesomeIcon className='social_icon play_bankai' icon={faBlog} size="2x" color="#4A4A4A" />
            </ActiveIcon>

            <ActiveIcon to="/manageportfolios" className='play_bankai' rel="noopener noreferrer">
              <FontAwesomeIcon className='social_icon play_bankai' icon={faFolder} size="2x" color="#4A4A4A" />
            </ActiveIcon>


          </div>
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={300}
            >
              <Outlet />
            </CSSTransition>
          </TransitionGroup>
        </div>

      </div>
    </div>
  );
  // return (
  //   <div>
  //     {showGif ? (
  //       <div>
  //         <img style={{ height: "100%" }} src={loadingGif} alt="Loading..." />
  //       </div>
  //     ) : (
  //       <div className='home_design'>

  //         <Navbar></Navbar>
  //         <div className="social_media">
  //           <a href="#" target="_blank" rel="noopener noreferrer">
  //             <FontAwesomeIcon className='social_icon' icon={faLinkedin} size="2x" color="#0077B5" />
  //           </a>
  //           <a href="#" target="_blank" rel="noopener noreferrer">
  //             <FontAwesomeIcon className='social_icon' icon={faGithub} size="2x" color="#333" />
  //           </a>
  //           <a href="#" target="_blank" rel="noopener noreferrer">
  //             <FontAwesomeIcon className='social_icon' icon={faFileAlt} size="2x" color="#4A4A4A" />
  //           </a>
  //           <a href="#" target="_blank" rel="noopener noreferrer">
  //             <FontAwesomeIcon className='social_icon' icon={faFacebook} size="2x" color="#4267B2" />
  //           </a>

  //           <a href="#" target="_blank" rel="noopener noreferrer">
  //             <FontAwesomeIcon className='social_icon' icon={faInstagram} size="2x" color="#E1306C" />
  //           </a>

  //           <a href="#" target="_blank" rel="noopener noreferrer">
  //             <FontAwesomeIcon className='social_icon' icon={faTwitter} size="2x" color="#1DA1F2" />
  //           </a>


  //         </div>
  //         <Outlet />
  //       </div>
  //     )}
  //   </div>
  // );
}

export default App;
