import React from 'react'
import './App.css';
import Content from './content.js'
import Header from './header.js'
import Footer from './footer.js'
function App(){
  return (
    <div className="container">
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default App;