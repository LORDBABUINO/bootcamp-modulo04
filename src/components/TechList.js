import React, {Component} from 'react'

import TechItem from './TechItem'

class TechList extends Component {
	state = {
		newTech: '',
		techs: []
	}
	//Executado assim que o componente aparece em tela
	componentDidMount() {
		const techs = localStorage.getItem('techs')
		techs && this.setState({techs: JSON.parse(techs)})
	}

	//Executado sempre que houver alterações nas props ou estado
	componentDidUpdate(_, prevState) {
		const {techs} = this.state
		prevState.techs !== techs && localStorage.setItem('techs', JSON.stringify(techs))
	}
	
	//Executado quando o componente deixa de existir
	componentWillUnmount() {

	}
	
	handleInputChange = e => {
		const newTech = e.target.value
		this.setState({newTech})
	}
	handleSubmit = e => {
		e.preventDefault()
		const {techs, newTech} = this.state
		this.setState({
			techs: [...techs, newTech],
			newTech: ''
		})
	}
	handleDelete = tech => () => {
		const {techs} = this.state
		this.setState({techs: techs.filter((aTech) => tech !== aTech)})
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<ul>
				{this.state.techs.map((tech, index) => (
					<TechItem key={index} tech={tech} onDelete={this.handleDelete(tech)}/>)
				)}
			</ul>
			<input
				type="text"
				value={this.state.newTech}
				onChange={this.handleInputChange}
			/>
					<button type="submit">Enviar</button>
			</form>
		)
	}
}

export default TechList
