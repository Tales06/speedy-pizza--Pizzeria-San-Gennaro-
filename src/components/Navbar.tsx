/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles/Style-navbar.css";
import { Link } from 'react-router-dom';
import ModalSearch from './ModalSearch';


export default function Navbar() {


    const [theme, setTheme] = useState('bi-brightness-high');
    /* Definisce uno stato chiamato "navbar" per memorizzare un riferimento a un elemento HTML 
     (di tipo HTMLElement) o null, e una funzione "setNavbar" per aggiornare questo stato.
     Inizialmente, "navbar" è impostato a null.*/
    const [navbar, setNavbar] = useState<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    

    
    
    useEffect(() => {
        // Imposta l'elemento navbar nello stato
        setNavbar(document.getElementById('navbar'));
        
        // Ottieni l'elemento di ricerca
        const searchElement = document.getElementById('search');
        
        // Se l'elemento di ricerca esiste, aggiorna il suo stile del cursore
        if (searchElement) {
            // Imposta il cursore su 'auto' se isVisible è true, altrimenti su 'pointer'
            searchElement.style.cursor = isVisible ? 'auto' : 'pointer';
        }
        
    }, [isVisible]); // Esegui questo effetto ogni volta che isVisible cambia


    function closeModal(){
        setIsVisible(false);
    }

    /**
     * Funzione che cambia il tema della barra di navigazione e del body
     * tra chiaro e scuro.
     * Se il tema attuale è chiaro, lo cambia in scuro e viceversa.
     */
    function toogleTheme() {
        if (theme === 'bi-brightness-high') {
            setTheme("bi-moon-stars");
            // Se il tema attuale è chiaro, aggiunge la classe "dark" alla barra di navigazione e al body
            if (navbar) {
                navbar.classList.add("nav-dark");
                document.body.classList.add("dark");
            }
        } else {
            setTheme("bi-brightness-high");
            // Se il tema attuale è scuro, rimuove la classe "dark" dalla barra di navigazione e dal body
            if (navbar) {
                navbar.classList.remove("nav-dark");
                document.body.classList.remove("dark");
            }
        }
    }

    
    
    
    return (
        <nav className="navbar bg-body-tertiary" id='navbar'>
            <div className="container-fluid">
                <a className="navbar-brand">Pizzeria San Gennaro</a>
                <ul className='navbar-nav service'>
                    <li className='nav-item' id='links'>
                        <Link className='nav-link' aria-current="page"to="/" >Home</Link>
                    </li>
                    <li className='nav-item' id='links'>
                        <Link className='nav-link' to="/menu"  >Menu</Link>
                    </li>
                    <li className='nav-item' id='links'>
                        <a className='nav-link' style={{cursor: 'pointer', gap: '20px'}} onClick={() => alert("Funzione carello non disponibile")}><i className="bi bi-bag" style={{color: "black", fontSize: "20px"}}></i>Carrello</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <i className="bi bi-search" style={{cursor: 'pointer'}} title='Cerca una pizza' onClick={() => setIsVisible(true) }/>
              </form>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link className='nav-link active' aria-current="page" to={"/login"}>Login</Link>
                        <Link className='nav-link active' aria-current="page" to={"/register"}>Registrati</Link>
                        <a className='nav-link active' aria-current="page" href="#"><i className={["bi", theme].join(' ')} onClick={() => toogleTheme()}></i></a>
                    </li>

                </ul>
            </div>
            
            {isVisible && <div className="overlay" onClick={closeModal}></div>}

            {isVisible && (
                <ModalSearch isVisible={isVisible} onClose={closeModal}/>
            ) }

            
        </nav>
    )
}
