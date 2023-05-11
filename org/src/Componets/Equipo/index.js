import './Equipo.css';
import Colaborador from '../Colaborador';
const Equipo = (props) => {
	//Destructurtaccion

	const { colorPrimario, colorSecundario, titulo } = props.datos;

	const obj = {
		backgroundColor: colorSecundario,
	};

	const estiloTitulo = { borderColor: colorPrimario };

	return (
		<section className='equipo' style={obj}>
			<h3 style={estiloTitulo}>{titulo}</h3>
			<div className='colaboradores'>
				<Colaborador />
			</div>
		</section>
	);
};

export default Equipo;
