import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map , TileLayer, Marker, Popup} from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css'; // styles of leaflet

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';


const mapIcon = Leaflet.icon({
	iconUrl: mapMarkerImg,
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2],
});

export default function OrphanagesMap() {
	return (
		<div id="page-map">
			<aside>
				<header>
					<img src={mapMarkerImg} alt="Happy" />

					<h2>Escolha um orfanato no mapa</h2>
					<p>Muitas crianças estão esperando a sua visita :)</p>

				</header>

				<footer>
					<strong>João Pessoa</strong>
					<span>Paraíba</span>
				</footer>
			</aside>


			{/*
				center= latitude, longitude 
				z: zoom, x: eixo x, y: eixo y 
			*/}
			<Map
				center={[-7.1824122,-34.9175803]}
				zoom={15}
				style={{ width: '100%', height: '100%'}}
			>
				{/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */} 
				<TileLayer 
					url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
				/>

				<Marker
					icon={mapIcon}
					position={[-7.1824122,-34.9175803]}
				>
					<Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
						Lar das meninas
						<Link to="/orphanages/1" className="">
							<FiArrowRight size={20} color="#fff"/>
						</Link>
					</Popup>
				</Marker>
			</Map>

			<Link to="/orphanages/create" className="create-orphanage">
				<FiPlus size={32} color="#fff"/>
			</Link>

		</div>
	);
}