import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { BrowserRouter, Route } from  'react-router-dom';

import Home from './pages/home';
import Header from './layout/header';
import MenuLateral from './layout/menu-lateral';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {

  return (
    <div className="App" >

      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header></Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="container">
          <Grid.Column width={3}>
            <MenuLateral></MenuLateral>
          </Grid.Column>
          <Grid.Column width={13}>

            <BrowserRouter>
              <Route path="/" component={Home}/> 
            </BrowserRouter>

            <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
          </Grid.Column>
          
        </Grid.Row>
      </Grid>

    </div>
  );
}

export default App;
