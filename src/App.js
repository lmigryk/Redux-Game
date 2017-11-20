import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import ItemList from './components/ItemList';
import Inventary from './components/Inventary';
import './App.css';
import { Navbar,NavItem} from 'react-materialize'

        
class App extends Component {
  render() {
    return (
      <div>  
        <Navbar brand={<img className='element_style' src='imagen.png' alt='Contact Person' />} right>
          <NavItem >LOG OUT </NavItem>
          <NavItem >Components</NavItem>
        </Navbar>
          <Row>
            <Col s={7}> 
              <ItemList /> 
            </Col>
            
            <Col s={5}> 
              <Inventary /> 
            </Col>
          </Row>
      </div>

    );
  }
}


export default App;
