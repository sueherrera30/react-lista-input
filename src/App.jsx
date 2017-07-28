import React, { Component } from 'react';
import './App.css';
import Lista from './componentes/lista.jsx';

class App extends Component {
  constructor(){
	  super();
	  this.state = {nuevoItemTextoSuper:"",
				   arregloTextoSuper:[],
				   nuevoItemTextoInstrumentos:"",
				   arregloTextoInstrumentos:[],
				  }
	  this.agregarListaSuper = this.agregarListaSuper.bind(this);
	  this.manejarCambioSuper = this.manejarCambioSuper.bind(this);
	  this.agregarListaInstrumentos = this.agregarListaInstrumentos.bind(this);
	  this.manejarCambioInstrumentos = this.manejarCambioInstrumentos.bind(this);
	  
	  
  }  
	  manejarCambioSuper(event){
		  let inputValue = event.target.value;
		  this.setState({nuevoItemTextoSuper:inputValue})
	   }
	manejarCambioInstrumentos(event){
		  let inputValue = event.target.value;
		console.log(inputValue);
		  this.setState({nuevoItemTextoInstrumentos:inputValue})
		
	   }
	
	  agregarListaSuper(){
		  let arregloSuper = this.state.arregloTextoSuper;
		  
		  arregloSuper.push(this.state.nuevoItemTextoSuper)
		  console.log(this.state.nuevoItemTextoSuper)
		  this.setState({arregloTextoSuper:arregloSuper})
	  }
	
	agregarListaInstrumentos(){
		let arregloInstrumentos = this.state.arregloTextoInstrumentos;
		arregloInstrumentos.push(this.state.nuevoItemTextoInstrumentos)
		/*actilizar el estado*/
		 this.setState({arregloTextoInstrumentos:arregloInstrumentos})
		
		/* this.state.arregloTextoInstrumentos.push(this.state.nuevoItemTextoInstrumentos);
		 this.setState({nuevoItemTextoIstrumentos:""})*/
	}

  render() {
    return (
      <div className="App">
      <div>
       <input type="text" onChange={this.manejarCambioSuper}/>
       <button onClick={this.agregarListaSuper}>Enviar</button>
       
	
       <Lista colorFondo="#762d79" colorLetra="#fff" titulo="super" elementosLista={this.state.arregloTextoSuper}/>
        <Lista colorFondo="#762d79"colorLetra="#fff"  titulo="instrumentos" elementosLista={this.state.arregloTextoInstrumentos}/>
        
        <input type="text" onChange={this.manejarCambioInstrumentos}/>
       <button onClick={this.agregarListaInstrumentos}>Enviar</button>
      
      </div>
     </div> 
    );
  }
}
export default App;