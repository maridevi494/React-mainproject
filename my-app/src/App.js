// import React from 'react';
// import './App.css';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import Movie from './Movie/Movies';
// //import Checkseats from './CheckSeats/Seats'
// function App() {
//   return (
//     <>
//     <Header />

//     <Footer />
//      {/* <Booking /> */}
//     <Movie /> 
//     {/* <Seats /> */}
//     </>
//   );
// }

// export default App;


import React,{useEffect} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
// import { json } from 'react-router-dom';

function App() {

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;