import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import './fonts/fonts.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Works from './pages/works';
import Contact from './pages/contact'; 
import NotFound from './pages/404';

import Navbar from './templates/Navbar/navbar';

import { theme } from './utils/theme/theme';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    transition: 0.5s;
  }
    #root {margin: 0;padding: 0;}
    ::-webkit-scrollbar {width: 5px;} 
    ::-webkit-scrollbar-track {background-color: white;}
    ::-webkit-scrollbar-thumb {background-color: black;}
  body {
    box-sizing: border-box;
    margin: 0; padding: 0;
  }
`;
const AppWrapper = styled.div`
  background-color: gray;
  //background-image: ${theme.colors.bg_gradient};
  max-width: 1920px;
  height: 9999px;
  margin: 0 auto 0 auto;
  position: relative;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Router>
        <Navbar />
        
        <Container fluid>
        
        App.js - test <br />App.js - test <br />App.jsdfsds - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />
        App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />App.js - test <br />
        </Container>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/works" component={ Works } />
          <Route path="/contact" component={ Contact } />
          <Route path="*" component={ NotFound } />
        </Switch>
        </Router>
      </AppWrapper>
    </>
  );
}

export default App;
