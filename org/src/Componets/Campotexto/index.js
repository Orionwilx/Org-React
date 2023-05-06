import './Campotexto.css';

const Campotexto = (props) => {
	console.log('Datos: ', props);
	return (
		<div className='campo-texto'>
			<label>{props.titulo}</label>
			<input placeholder={props.placeholder} required={props.required} />
		</div>
	);
};

export default Campotexto;
