import React, {Component} from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Content from './Component/Content';

class App extends Component{
  constructor(props){
    super(props);
    this.state={pokemons : ""}
  }
  render() {
  return (
      <div className="App title container-fluid" class="App-bg" >
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
  
}
export default App;