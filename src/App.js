import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// Component dan props(properties)
// function Biodata(props) {
//   return <span> umurnya {props.age} </span>
// }

// function Greeting(props) {
//   return <h1> Hello {props.name} - <Biodata age={props.age}/> </h1>
// }

// // Menggunakan Class
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Greeting name='Dimas' age='28'/>
//         <Greeting name='Nida' age='27'/>
//       </header>
//       </div>
//     );
//   }
// }



// STATE

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time : props.start
    }
  }
  
  // Lifecycle
  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }
 
  increase() {
    // update state time setiap detik
    this.setState((state, props) => ({
       time : parseInt(this.state.time) + 1
    }))
  }
  render() {
    return (
      <div>
        {this.state.time} detik
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer start='0'/>
        <Timer start='10'/>
        <Timer start='100'/>
      </header>
      </div>
    );
  }
}

export default App;
