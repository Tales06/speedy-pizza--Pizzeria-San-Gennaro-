/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/Style-cards.css";

const idPizza: string = 'pizza';
export function getElementPizza(): string[] {
    const elementPizza = document.querySelectorAll('#' + idPizza);//prelevo tutti gli elementi con l'id pizza

    const pizza: string[] = [];

    if (elementPizza) {
        elementPizza.forEach((child) => {
            pizza.push(child.textContent as string); //pusho tutti i valori element in pizza
        });
    }

    return pizza;

}

export function getElementCosto(): string[] {
    const elementCosto = document.querySelectorAll('.costo');//prelevo tutti gli elementi con l'id pizza

    const costo: string[] = [];

    if (elementCosto) {
        elementCosto.forEach((child) => {
            costo.push(child.textContent as string); //pusho tutti i valori element in pizza
        });
    }

    return costo;
}
export function putThePizzaInCart(pizza: string, costo: string) {
    alert(`Pizza ${pizza} aggiunta al carello con successo. Al costo di ${costo}`);
    //TODO: implementare la logica per aggiungere la pizza al carrello

}


export default function Cards() {

    const pizza = [
        {
            name: 'Margherita',
            description: 'La regina delle pizze con base rossa e mozzarella di bufala D.O.P e basilico',
            cost: '5.50€',
            image: '/pizza_margherita.jpg'
        },
        {
            name: 'Diavola',
            description: 'Pizza rossa con mozzarella di bufala D.O.P con salamino piccante.',
            cost: '6.00€',
            image: '/pizza_diavola.jpg'
        },
        {
            name: 'Salsiccia e friarelli',
            description: 'Base rossa con mozzarella di bufala D.O.P. con salsiccia e friarelli.',
            cost: '6.50€',
            image: '/pizza_salsiccia&friarelli.webp'
        },
        {
            name: 'Americana',
            description: 'Base bianca con mozzarella wurstel e patatine fritte.',
            cost: '7.00€',
            image: '/pizza-americana.jpg'
        },
        {
            name: 'Pizza con Ananas',
            description: 'Guai a te se la ordini avrai la sanzione amministrativa.',
            cost: '99.00€',
            image: '/pizza-con-ananas.jpg'
        },
        {
            name: '4 Stagioni',
            description: 'Rossa con mozzarella di bufala D.O.P. con carciofi, prosciutto, funghi e olive.',
            cost: '7.50€',
            image: '/4stagioni.jpg'
        }
    ];

    return (

        <div className='card-container row'>
            {pizza.map((pizza, index) => (
                <div className="card" style={{ width: "18rem" }} key={index}>
                    <img className="card-img-top" src={pizza.image} alt={`${pizza.name} image`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div className="card-body">
                        <h5 className="card-title" id={idPizza}>{pizza.name}</h5>
                        <p className="card-text">{pizza.description}</p>
                        <p className="card-text costo">Costo: {pizza.cost}</p>
                        <button className="btn btn-primary" onClick={() => putThePizzaInCart(pizza.name, pizza.cost)}>
                            <i className="bi bi-bag" style={{ color: "white", fontSize: "20px" }}></i>Aggiungi al carrello
                        </button>
                    </div>
                </div>
            ))}
        </div>


    )

}
