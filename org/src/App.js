import { useState } from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Formulario from './Componets/Formulario/Formulario';
import MiOrg from './Componets/MiOrg';
import Equipo from './Componets/Equipo';

function App() {
	//Ternario --> condicion ? semuestra : noSemuestra
	//Condicion && seMuestra

	const [mostrarFormulario, actualiarMostrar] = useState(false);

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
					<Formulario equipos={equipos.map((equipo) => equipo.titulo)} />
				) /*  Forma elegante de ponerlo */
			}
			<MiOrg cambiarMostrar={cambiarMostrar} />
			{equipos.map((equipo) => (
				<Equipo datos={equipo} key={equipo.titulo} />
			))}
		</div>
	);
}

export default App;
