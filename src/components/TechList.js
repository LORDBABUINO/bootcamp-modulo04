import React, {Component} from 'react'

import TechItem from './TechItem'

class TechList extends Component {
	state = {
		newTech: '',
		techs: [
			'Node.js',
			'ReactJS',
			'React Native',
		]
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
