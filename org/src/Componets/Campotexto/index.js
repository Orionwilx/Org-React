import './Campotexto.css';

const Campotexto = (props) => {
	const placeholderModificado = `${props.placeholder}...`;

	const { type } = props;

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
				type={type}
			/>
		</div>
	);
};

export default Campotexto;
