import './Formulario.css';
import Campotexto from '../Campotexto';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = () => {
	const majearEnvio = (evento) => {
		evento.preventDefault();
		console.log('manejar envio', evento);
	};

	return (
		<section className='formulario'>
			<form onSubmit={majearEnvio}>
				<h2>Rellena el formulario para crear el colaborador.</h2>
				<Campotexto titulo='Nombre' placeholder='Ingresar Nombre...' required />
				<Campotexto titulo='Puesto' placeholder='Ingresar Puesto' required />
				<Campotexto titulo='Foto' placeholder='Ingresar Foto' required />
				<ListaOpciones />
				<Boton>Crear</Boton>
			</form>
		</section>
	);
};

export default Formulario;
