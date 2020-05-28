import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const running = true;
    const name = "Zubair";
    const showName = true;
    return (
      <div className='App'>
        {running ? (
          <h1>Hello from React {showName && name}</h1>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
