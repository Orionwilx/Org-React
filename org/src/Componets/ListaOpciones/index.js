import './ListaOpciones.css';

const ListaOpciones = () => {
	//Metodo map para recorere el arreglo en estos casos para utilizarlo
	const equipos = [
		'Programacion',
		'Fornt-End',
		'Data Science',
		'DevOps',
		'UX y Didesño',
		'Movil',
		'Innovacion y gestion',
	];

	return (
		<div className='lista-opciones'>
			<label>Eqipos</label>
			<select>
				{equipos.map((equipos, index) => {
					return <option key={index}>{equipos}</option>;
				})}
			</select>
		</div>
	);
};

export default ListaOpciones;
