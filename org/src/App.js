import { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from './Componets/Header/Header';
import Formulario from './Componets/Formulario/Formulario';
import MiOrg from './Componets/MiOrg';
import Equipo from './Componets/Equipo';
import Footer from './Componets/Footer';

function App() {
	const [mostrarFormulario, actualiarMostrar] = useState(false);
	const [colaboradores, actualizarColaboradores] = useState([
		{
			id: uuid(),
			equipo: 'Fornt-End',
			foto: 'https://github.com/Orionwilx.png',
			nombre: 'Wilman Zuleta',
			puesto: 'Estudiante ',
			fav: true,
		},
		{
			id: uuid(),
			equipo: 'UX y Diseño',
			foto: 'https://github.com/Caro-ov.png',
			nombre: 'Adriana Olivares',
			puesto: 'Estudiante ',
			fav: true,
		},
	]);
	const [equipos, actualizarEquipos] = useState([
		{
			id: uuid(),
			titulo: 'Programacion',
			colorPrimario: '#57C278',
			colorSecundario: '#D9F7E9',
		},
		{
			id: uuid(),
			titulo: 'Fornt-End',
			colorPrimario: '#82CFFA',
			colorSecundario: '#E8F8FF',
		},
		{
			id: uuid(),
			titulo: 'Data Science',
			colorPrimario: '##A6D157',
			colorSecundario: '#F0F8E2',
		},
		{
			id: uuid(),
			titulo: 'DevOps',
			colorPrimario: '#E06B69',
			colorSecundario: '#FDE7E8',
		},
		{
			id: uuid(),
			titulo: 'UX y Diseño',
			colorPrimario: '#DB6EBF',
			colorSecundario: '#FAE9F5',
		},
		{
			id: uuid(),
			titulo: 'Movil',
			colorPrimario: '#FFBA05',
			colorSecundario: '#FFF5D9',
		},
		{
			id: uuid(),
			titulo: 'Innovacion y gestion',
			colorPrimario: '#FF8A29',
			colorSecundario: '#FFEEDF',
		},
	]);

	//Registrar colaborador
	const registrarColaborador = (colaborador) => {
		console.log(colaborador);
		//spread operator
		actualizarColaboradores([...colaboradores, colaborador]);
	};

	//Eliminar colaborador
	const eliminarColaborador = (id) => {
		// console.log('eliminar equipos', id);
		const nuevoColaborador = colaboradores.filter(
			(colaboradores) => colaboradores.id !== id
		);
		actualizarColaboradores(nuevoColaborador);
	};

	//actualizar color
	const actualizarColor = (color, id) => {
		// console.log('Actualizar', color, id);
		const equiposActualizados = equipos.map((equipo) => {
			if (equipo.id === id) {
				equipo.colorPrimario = color;
			}

			return equipo;
		});
		actualizarEquipos(equiposActualizados);
	};

	const cambiarMostrar = () => {
		actualiarMostrar(!mostrarFormulario);
	};

	//Crear equipo
	const crearEquipo = (nuevoEquipo) => {
		console.log(nuevoEquipo);
		actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
	};

	const like = (id) => {
		console.log('Like', id);
		const coloaboradoresActualizados = colaboradores.map((colaborador) => {
			if(colaborador.id === id){
				colaborador.fav = !colaborador.fav;
			}
			return colaborador;
		})	
	}

	return (
		//Ternario --> condicion ? semuestra : noSemuestra
		//Condicion && seMuestra
		<div>
			{<Header />}
			{
				mostrarFormulario && (
					<Formulario
						equipos={equipos.map((equipo) => equipo.titulo)}
						registrarColaborador={registrarColaborador}
						crearEquipo={crearEquipo}
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
					eliminarColaborador={eliminarColaborador}
					actualizarColor={actualizarColor}
					like={like}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
