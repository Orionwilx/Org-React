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

	const [titulo, setTitulo] = useState('');
	const [color, setColor] = useState('');

	const { registrarColaborador, crearEquipo } = props;

	const majearEnvio = (e) => {
		e.preventDefault();
		console.log('manejar envio');
		let datosEnviar = {
			nombre,
			puesto,
			foto,
			equipo,
		};
		registrarColaborador(datosEnviar);
	};

	const manejarNuevoEquipo = (e) => {
		e.preventDefault();
		crearEquipo({ titulo, colorPrimario: color });
	};

	return (
		<section className='formulario'>
			<form onSubmit={majearEnvio}>
				<h2>Rellena el formulario para crear el colaborador.</h2>
				<Campotexto
					titulo='Nombre'
					placeholder='Ingresar Nombre'
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
			<form onSubmit={manejarNuevoEquipo}>
				<h2>Rellena el formulario para crear equipo.</h2>
				<Campotexto
					titulo='Titulo'
					placeholder='Ingresar Titulo'
					required
					valor={titulo}
					actualizarValor={setTitulo}
				/>
				<Campotexto
					titulo='Color'
					placeholder='Ingresar el color en Hex'
					required
					valor={color}
					actualizarValor={setColor}
				/>
				<Boton>Registrar equipo</Boton>
			</form>
		</section>
	);
};

export default Formulario;
