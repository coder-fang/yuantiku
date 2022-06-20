import './App.css';
import React,{ Component } from 'react';
import Button from '@material-ui/core/Button'

export default class App extends Component {
  render(){
    return (
      <div className="App">
          <Button variant='contained' color='primary'>你好，世界</Button>
      </div>
    );
  }
}
