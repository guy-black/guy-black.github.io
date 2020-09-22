import React from 'react';
import logo from './logo.svg';
import './App.css'
import { Container } from '@material-ui/core';
import Projects from './projects/Projects';
import DraftsRoundedIcon from '@material-ui/icons/DraftsRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function App() {
  return (
    <div className="app">
      <>
        <img src={logo} alt="logo" id="logo"/>
      </>
      <Projects />
      <Container id="contact" component='footer' disableGutters={true} maxWidth={false}>
          <a href="mailto:guyb2602@gmail.com"><DraftsRoundedIcon className="contacts" fontSize= "large"/></a>
          <a target="_blank" rel='noopener noreferrer' href="https://github.com/guy-black"><GitHubIcon className="contacts" fontSize= "large"/></a>
          <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/guy-black-8408351b7/"><LinkedInIcon className="contacts" fontSize= "large"/></a>
      </Container>
    </div>
  );
}

export default App;
