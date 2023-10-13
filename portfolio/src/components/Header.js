import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrolling(true); // Scrolling down
      } else {
        setScrolling(false); // Scrolling up
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  const headerStyle = {
    position: 'fixed',
    top: scrolling ? '-100px' : '0',
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black with 70% opacity
    transition: 'top 0.3s ease-in-out',
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto', // Pushes the links to the left
  };

  const buttonStyle = {
    color: 'inherit',
    marginRight: '20px', // Adjust the margin between buttons
  };

  const resumeButtonStyle = {
    ...buttonStyle,
    paddingLeft: '82px', // No margin for the Resume button
  };

  return (
    <AppBar style={headerStyle}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Samuel Senior
        </Typography>
        <div style={navLinksStyle}>
          <Link to="about" smooth={true} duration={500}>
            <Button style={buttonStyle}>About</Button>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <Button style={buttonStyle}>Skills</Button>
          </Link>
          <Link to="techSkills" smooth={true} duration={500}>
            <Button style={buttonStyle}>Technical Skills</Button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <Button style={buttonStyle}>Projects</Button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <Button style={buttonStyle}>Contact</Button>
          </Link>
          <Button style={resumeButtonStyle}>Resume</Button> {/* Add the Resume button */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
