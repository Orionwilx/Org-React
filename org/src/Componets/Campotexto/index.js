import './Campotexto.css';

const Campotexto = (props) => {
	const placeholderModificado = `${props.placeholder}...`;

	const manejarCambio = (e) => {
		props.actualizarValor(e.target.value);
	};
	return (
		<div className='campo-texto'>
			<label>{props.titulo}</label>
			<input
				placeholder={placeholderModificado}
				required={props.required}
				value={props.valor}
				onChange={manejarCambio}
			/>
		</div>
	);
};

export default Campotexto;
