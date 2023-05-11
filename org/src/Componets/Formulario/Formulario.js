import { useState } from 'react';
import './Formulario.css';
import Campotexto from '../Campotexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = (props) => {
	const [nombre, setNombre] = useState('');
	const [puesto, setPuesto] = useState('');
	const [foto, setFoto] = useState('');
	const [equipo, setEquipo] = useState('');

	const majearEnvio = (e) => {
		e.preventDefault();
		console.log('manejar envio');
		let datosEnviar = {
			nombre,
			puesto,
			foto,
			equipo,
		};
		console.log(datosEnviar);
	};

	return (
		<section className='formulario'>
			<form onSubmit={majearEnvio}>
				<h2>Rellena el formulario para crear el colaborador.</h2>
				<Campotexto
					titulo='Nombre'
					placeholder='Ingresar Nombre...'
					required
					valor={nombre}
					actualizarValor={setNombre}
				/>
				<Campotexto
					titulo='Puesto'
					placeholder='Ingresar Puesto'
					required
					valor={puesto}
					actualizarValor={setPuesto}
				/>
				<Campotexto
					titulo='Foto'
					placeholder='Ingresar Foto'
					required
					valor={foto}
					actualizarValor={setFoto}
				/>
				<ListaOpciones
					valor={equipo}
					actualizarEquipo={setEquipo}
					equipos={props.equipos}
				/>
				<Boton>Crear</Boton>
			</form>
		</section>
	);
};

export default Formulario;
