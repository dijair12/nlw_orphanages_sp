import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory } from 'react-router-dom';
import L from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanage.css';

const happyMapIcon = L.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [8, -68],
})

export default function Orphanage() {
    const { goBack } = useHistory();

    return (
        <div className="page-orphanage">
            <aside>
                <img src={mapMarkerImg} alt="Happy" />

                <footer>
                  <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                  </button>
                </footer>

            </aside>

            <main>
              <div className="orphanage-details">
                <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar dos meninos"/>

                <div className="images">
                  <button className="active" type="button">
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar do meninos"/>
                  </button>
                  <button className="active" type="button">
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar do meninos"/>
                  </button>
                  <button className="active" type="button">
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar do meninos"/>
                  </button>
                  <button className="active" type="button">
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar do meninos"/>
                  </button>
                  <button className="active" type="button">
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar do meninos"/>
                  </button>
                  <button className="active" type="button">
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar do meninos"/>
                  </button>
                </div>

                <div className="orphanage-details-content">
                  <h1>Lar dos meninos</h1>
                  <p>Presta assitência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade</p>

                  <div className="map-container">
                    <Map
                      center={[-23.6228802,-46.7864727]}
                      zoom={16}
                      style={{ width: '100%', height: 200 }}
                      dragging={false}
                      touchZoom={false}
                      zoomControl={false}
                      scrollWheelZoom={false}
                      doubleClickZoom={false}
                    >
                      <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                      />
                      <Marker interactive={false} icon={happyMapIcon} position={[-23.6228802,-46.7864727]} />

                    </Map>


                    <footer>
                      <a href="">Ver rotas no Google Maps</a>
                    </footer>
                  </div>

                  <hr/>

                  <h2>Instruções para visita</h2>
                  <p>Veja como se sentir mais à vontade e traga muito amor para dar.</p>

                  <div className="open-details">
                    <div className="hour">
                      <FiClock size={32} color="#158606" />
                      Segunda à Sexta <br />
                      8h às 18h
                    </div>
                    <div className="open-on-weekends">
                      <FiInfo size={32} color="#39CC83"/>
                      Atendemos <br />
                      Fim de semana
                    </div>
                  </div>

                  <button type="button" className="contact-button">
                    <FaWhatsapp size={28} color="#FFF" />
                    Entrar em contato
                  </button>
                </div>
              </div>
            </main>
        </div>
    );
}