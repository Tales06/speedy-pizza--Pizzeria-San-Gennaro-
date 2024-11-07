/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './styles/Style-ModalSearch.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { getElementCosto, getElementPizza, putThePizzaInCart } from './Cards';

interface ModalSearchProps {
    isVisible: boolean;
    onClose: () => void;
}

export default function ModalSearch({ isVisible, onClose }: ModalSearchProps) {

    const [isAnimatingOut, setIsAnimatingOut] = useState<boolean>(false);

    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [inputSearch, setInputSearch] = useState('');

    const [pizzaPrice, setPizzaPrice] = useState<string[]>([]);

    // Effettua una ricerca quando il valore di isVisible cambia
    useEffect(() => {
        setIsAnimatingOut(false); //reset animation
    }, [isVisible]);

    // Effettua una ricerca quando il valore di inputSearch cambia
    useEffect(() => {
        searchPizza();
    }, [inputSearch]);

    // Funzione per cercare le pizze in base all'input di ricerca
    function searchPizza() {
        // Se l'input di ricerca è vuoto, resetta i risultati di ricerca e i prezzi delle pizze
        if (inputSearch.trim() === '') {
            setSearchResults([]);
            setPizzaPrice([]);
            return;
        }

        // Ottieni gli elementi delle pizze e i loro costi
        const pizza = getElementPizza() || [];
        const pizzaCosto = getElementCosto() || [];

        // Converti l'input di ricerca in minuscolo per una ricerca case-insensitive
        const searchQuery = inputSearch.toLowerCase();

        // Riduci l'array delle pizze per trovare quelle che corrispondono alla query di ricerca
        const matchingPizza = pizza.reduce((acc, pizza, index) => {

            // Se il nome della pizza include la query di ricerca, aggiungila all'accumulatore
            if (pizza.toLowerCase().includes(searchQuery)) {
                acc.push({ name: pizza, price: pizzaCosto[index] });
            }

            return acc;
        }, [] as { name: string, price: string }[]);
        // Aggiorna i risultati di ricerca e i prezzi delle pizze

        setSearchResults(matchingPizza.map(pizza => pizza.name));
        setPizzaPrice(matchingPizza.map(pizza => pizza.price));
    }

    /**
     * Funzione per chiudere la finestra di ricerca
     * Chiama setIsAnimatingOut(true) per mostrare l'animazione di uscita
     * e poi chiama onClose() per chiudere la finestra di ricerca
     */
    function closeModalSearch() {
        setIsAnimatingOut(true);
        // Timer per eseguire l'animazione di uscita e poi chiudere la finestra
        setTimeout(() => {
            setIsAnimatingOut(false);
            onClose();
        }, 300);
    }

    return isVisible || isAnimatingOut ? (
        <div className={`modal-search ${isAnimatingOut ? 'slideOut' : 'slideIn'}`}>
            <i className="bi bi-x-circle" onClick={closeModalSearch}></i>
            <input
                type="text"
                className="form-control"
                placeholder="Search Pizza..."
                value={inputSearch}
                onChange={(e) => {
                    setInputSearch(e.target.value);
                }}
            />
            <div className="search-results">
                {searchResults.length > 0 ? (
                    searchResults.map((pizza, index) => (
                        <div className="card" style={{ height: "6rem", width: "29.5rem" }} key={pizza}>
                            <div className="card-body card-body-search" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <p className='card-pizza' key={pizza}>{pizza}</p>
                                <p className='card-price' key={index}>{pizzaPrice[index]}</p>
                                <button className="btn btn-primary" onClick={() => putThePizzaInCart(pizza, pizzaPrice[index])}><i className="bi bi-bag" style={{ color: "white", fontSize: "20px" }}></i>Aggiungi al carrello</button>
                            </div>
                        </div>

                    ))
                ) : (
                    <li>No results found</li>
                )}
            </div>
        </div>
    ) : null;
}
