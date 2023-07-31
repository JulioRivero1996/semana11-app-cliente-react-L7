const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

/*
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {instrumentos: []};
	}
	componentDidMount() {
		client({method: 'GET', path: '/api/instrumentos'}).done(response => {
			this.setState({instrumentos: response.entity._embedded.instrumentos});
		});
	}
	render() {
		return (
			<InstrumentoList instrumentos={this.state.instrumentos}/>
		)
	}
}

class InstrumentoList extends React.Component{
	render() {
		const instrumentos = this.props.instrumentos.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoria</th>
						<th>Descripcion</th>
					</tr>
					{instrumentos}
				</tbody>
			</table>
		)
	}
}

class Instrumento extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>{this.props.instrumento.categoria}</td>
				<td>{this.props.instrumento.descripcion}</td>
			</tr>
		)
	}
}
*/

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {estudiantes: [],instrumentos: []};
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/estudiantes' }).done((response) => {
			this.setState({ estudiantes: response.entity._embedded.estudiantes });
		});
	  
		client({ method: 'GET', path: '/api/instrumentos' }).done((response) => {
			this.setState({ instrumentos: response.entity._embedded.instrumentos });
		});
	}
	render() {
		return (
			<div>
				<EstudianteList estudiantes={this.state.estudiantes}/>
				<InstrumentoList instrumentos={this.state.instrumentos}/>
			</div>
		)
	}
}

class EstudianteList extends React.Component{
	render() {
		const estudiantes = this.props.estudiantes.map(estudiante =>
			<Estudiante key={estudiante._links.self.href} estudiante={estudiante}/>
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Edad</th>
						<th>Imagen</th>
					</tr>
					{estudiantes}
				</tbody>
			</table>
		)
	}
}

class Estudiante extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.estudiante.nombre}</td>
				<td>{this.props.estudiante.edad}</td>
				<td><img src={this.props.estudiante.dni} className="img-estudiante"/></td>
			</tr>
		)
	}
}

class InstrumentoList extends React.Component{
	render() {
		const instrumentos = this.props.instrumentos.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento}/>
		);
		return (
			
			<div>
				<h1>Lista de Instrumentos</h1>
				<table border="1">
					<tbody>
						<tr>
							<th>Nombre</th>
							<th>Categoria</th>
							<th>Descripcion</th>
						</tr>
						{instrumentos}
					</tbody>
				</table>
			</div>
		)
	}
}

class Instrumento extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>{this.props.instrumento.categoria}</td>
				<td>{this.props.instrumento.descripcion}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)