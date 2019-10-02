import React, {Component} from 'react'

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
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
			<ul>
				{this.state.techs.map((tech, index) => <li key={index}>{tech}</li>)}
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
