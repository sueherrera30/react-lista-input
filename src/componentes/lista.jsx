
import React from 'react';
import ListaItem from './item.jsx';

export default class Lista extends React.Component{
		
	render(){
		let arregloLista = this.props.elementosLista.map((textoDeElemento, indice) =>{ 
			return <ListaItem key={indice} item={textoDeElemento}/>
		});
		 let estilos = {
			 color:this.props.colorLetra,
			 backgroundColor:this.props.colorFondo
		 }
		 
		return(
			<div>			
			    <h1 style={estilos}>{this.props.titulo}</h1>
				<ul style={estilos}>{arregloLista}</ul>
			</div>			
		);
	}
}