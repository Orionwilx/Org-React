import './ListaOpciones.css';

const ListaOpciones = (props) => {
	//Metodo map para recorere el arreglo en estos casos para utilizarlo

	const manejarCambio = (e) => {
		console.log('Cambio', e.target.value);
		props.actualizarEquipo(e.target.value);
	};
	return (
		<div className='lista-opciones'>
			<label>Eqipos</label>
			<select value={props.valor} onChange={manejarCambio}>
				<option value='' disabled defaultValue='' hidden>
					Seleccionar equipo
				</option>
				{props.equipos.map((equipos, index) => {
					return (
						<option key={index} value={equipos}>
							{equipos}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default ListaOpciones;
