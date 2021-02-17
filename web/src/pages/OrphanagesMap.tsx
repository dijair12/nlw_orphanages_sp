import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import MapIcon from '../utils/mapIcon';
import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import api from '../services/api';


interface Orphanages {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanages[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);

        })
    }, []);

    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Taboão da Serra</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-23.6228802,-46.7864727]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />

                {orphanages.map(orphanage =>{
                    return (
                        <Marker
                            key={orphanage.id}
                            icon = {MapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                        >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={28} color="#FFF">

                            </FiArrowRight>
                            </Link>
                        </Popup> 
                        </Marker>
                    )
                })}

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;