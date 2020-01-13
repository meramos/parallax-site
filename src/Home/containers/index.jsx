import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import './index.css'

class Home extends PureComponent{
  render(){
      return (
        <div className="App">
          <header className="App-header">
            <h1>Happy New Year!</h1>
            <p style={{textAlign: 'center'}}>New year, new you! Let's help you keep track of your resolutions!</p>
            <Button variant="contained" size="large" color="secondary" href="/content">Get Started</Button>
          </header>
        </div>
      );
      }
}

export default Home;
