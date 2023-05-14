import { useState } from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Formulario from './Componets/Formulario/Formulario';
import MiOrg from './Componets/MiOrg';
import Equipo from './Componets/Equipo';
import Footer from './Componets/Footer';

function App() {
	//Ternario --> condicion ? semuestra : noSemuestra
	//Condicion && seMuestra

	const [mostrarFormulario, actualiarMostrar] = useState(true);
	const [colaboradores, actualizarColaboradores] = useState([
		{
			equipo: 'Fornt-End',
			foto: 'https://github.com/Orionwilx.png',
			nombre: 'Wilman Zuleta',
			puesto: 'Estudiante ',
		},
		{
			equipo: 'UX y Diseño',
			foto: 'https://github.com/Caro-ov.png',
			nombre: 'Adriana Olivares',
			puesto: 'Estudiante ',
		},
	]);

	//Registrar colaborador

	const registrarColaborador = (colaborador) => {
		console.log(colaborador);
		//spread operator
		actualizarColaboradores([...colaboradores, colaborador]);
	};

	//Lista equipos
	const equipos = [
		{
			titulo: 'Programacion',
			colorPrimario: '#57C278',
			colorSecundario: '#D9F7E9',
		},
		{
			titulo: 'Fornt-End',
			colorPrimario: '#82CFFA',
			colorSecundario: '#E8F8FF',
		},
		{
			titulo: 'Data Science',
			colorPrimario: '##A6D157',
			colorSecundario: '#F0F8E2',
		},
		{
			titulo: 'DevOps',
			colorPrimario: '#E06B69',
			colorSecundario: '#FDE7E8',
		},
		{
			titulo: 'UX y Diseño',
			colorPrimario: '#DB6EBF',
			colorSecundario: '#FAE9F5',
		},
		{
			titulo: 'Movil',
			colorPrimario: '#FFBA05',
			colorSecundario: '#FFF5D9',
		},
		{
			titulo: 'Innovacion y gestion',
			colorPrimario: '#FF8A29',
			colorSecundario: '#FFEEDF',
		},
	];

	const cambiarMostrar = () => {
		actualiarMostrar(!mostrarFormulario);
	};

	return (
		<div>
			{<Header />}
			{
				mostrarFormulario && (
					<Formulario
						equipos={equipos.map((equipo) => equipo.titulo)}
						registrarColaborador={registrarColaborador}
					/>
				) /*  Forma elegante de ponerlo */
			}
			<MiOrg cambiarMostrar={cambiarMostrar} />
			{equipos.map((equipo) => (
				<Equipo
					datos={equipo}
					key={equipo.titulo}
					colaboradores={colaboradores.filter(
						(colaborador) => colaborador.equipo === equipo.titulo
					)}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
