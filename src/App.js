import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/index';


import ReactDOM from 'react-dom';

//COMPONENTS
import { Header } from './view/header/Header';
import { Footer } from './view/footer/Footer';
// import { BlogPage } from './view/BlogPage';
// import { PostPage } from './view/PostPage';
// import { Authors } from './view/Authors';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />


        <Footer />

      </div>
    )
  }
}




export default App;
