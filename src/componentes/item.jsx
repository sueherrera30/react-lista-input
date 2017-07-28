import React from 'react';

export default class ListaItem extends React.Component {

	render() {
		return ( 
			<li>{
				this.props.item
			} </li>
		);

	}
}