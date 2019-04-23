import React, { Component } from 'react';
import './App.css';
import {Navbar} from './Navbar';
import {FeatureArticle} from './Feature-article';
import {SubArticles} from './Sub-Articles';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <FeatureArticle></FeatureArticle>
        <SubArticles title="Hello WatchKit" content="Last month Apple released the anticipated WatchKit Framework fro developers in the form of iOS 8.2 beta SDK release." comments="12 comments" likes="124 likes"></SubArticles>
        <SubArticles title="Introduction to Swift" content="Swift is a modern programming language developed by Apple to creat the next generation of iOS and OSX application." comments="15 comments" likes="45 likes"></SubArticles>
      </div>
    );
  }
}

export default App;
