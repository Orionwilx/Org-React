import './MiOrg.css';

const MiOrg = (props) => {
	// const manejarClick = () => {
	// 	console.log('Mostrar elemento', !mostrar)
	// 	actualizarMostrar(!mostrar)

	// };

	return (
		<section className='orgSection'>
			<h3 className='title'>Mi Organizacion</h3>
			<img src='/img/Add.png' alt='Add' onClick={props.cambiarMostrar} />
		</section>
	);
};

export default MiOrg;
