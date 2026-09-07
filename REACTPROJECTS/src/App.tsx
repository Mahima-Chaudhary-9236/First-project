 import react, { Component } from 'react';
//import logo from' ./logo.svg' ;
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import './App.css';
import {BrowserRouter , Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from "./footer.tsx";
// import UpvotesSection from './Components/UpvotesSection.tsx';
// Here we have to call HomePage Component

class App extends Component {
  render(){
    return(
      <div className='App'>
    
       <BrowserRouter>
          <Navbar/>
          <div id="page-body">
              <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/AboutPage" Component={AboutPage}/>
                    <Route path="/ArticleList" Component={ArticleList}/>
                    <Route path="/ArticlePage" Component={ArticlePage}/>
                    <Route path="/Article/:name" Component={ArticlePage}/ >
              </Routes>
          </div>
          <Footer/>
      </BrowserRouter> 
      </div>
    

    );
  }

 }



export default App;