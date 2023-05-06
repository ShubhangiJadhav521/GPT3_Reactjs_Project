import './App.css';
import './index.css';
import { Article,Brand,CTA, Navbar } from './Component';
import { Blog,Features,Footer,Header,Possibility,WhatGPT3 } from './Container';

function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
