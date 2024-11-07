import React from 'react';
import './styles/Style-home.css';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className='container'>
      <h1>Benvenuto nella Pizzeria San Gennaro</h1>
      <p>La nostra pizzeria è famosa per la qualità delle pizze e per l'atmosfera accogliente.</p>
      <p>Il nostro menù offre una vasta scelta di pizze, antipasti, primi e secondi piatti(solo pizze per ora).</p>
      <p>Per informazioni, contatta il nostro cuoco. Se ordinate la pizza con l'ananas si prevede un costo aggiuntivo e sanzione amministrativa.</p>
      <p>Mi raccomando prima di entrare devi lodare San Gennaro.</p>
      <p>Il nostro orario di apertura è dalle 18:00 alle 23:00</p>
      <Link to='/menu' className='btn btn-primary'>Sfoglia il nostro menu</Link>
      <div className="img_cuoco">
        <img src='/Enzo_Coccia_Copertina.webp' alt='cuoco' style={{width: "100%", height: "100%", objectFit:"cover", borderRadius: "10px"}}/>
      </div>
      <div className="contacts">
        <h2>Contatti</h2>
        <p>Telefono: 081 1234567</p>
        <p>Email: sanGennaro@gmail.com</p>
      </div>
    </div>
  )
}
