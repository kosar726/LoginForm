import React from 'react'
import './style.css';
import image from './image/1.jpg'
import SignIn from './components/signIn';
import SignUp from './components/signUp'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* A block consisting of photos and forms */}
        <div className="container">
        {/* Photo next to the form */}
          <div id="image">
            <img src={image} />
          </div>
          {/*form*/}
          < SignIn />
        </div>
      </div>
    );
  }
};


export default App;
