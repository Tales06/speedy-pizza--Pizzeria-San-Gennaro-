/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/Style-cards.css";

const idPizza: string = 'pizza';
export function getElementPizza(): string[]{
    const elementPizza = document.querySelectorAll('#'+idPizza);//prelevo tutti gli elementi con l'id pizza

    const pizza: string[] = [];

    if (elementPizza){
        elementPizza.forEach((child) => {
            pizza.push(child.textContent as string); //pusho tutti i valori element in pizza
        });
    }

    return pizza;

}

export function getElementCosto(): string[]{
    const elementCosto = document.querySelectorAll('.costo');//prelevo tutti gli elementi con l'id pizza

    const costo: string[] = [];

    if (elementCosto){
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
    return (
        <div className='card-container row'>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="/pizza_margherita.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title" id={idPizza}>Margherita</h5>
                    <p className="card-text">La regina delle pizze con base rossa e mozzarella di bufala D.O.P e basilico</p>
                    <p className="card-text costo"  >Costo: 5.50€</p>
                    <button className="btn btn-primary" onClick={() => putThePizzaInCart('Margherita', '5.50€')}><i className="bi bi-bag" style={{color: "white", fontSize: "20px"}}></i>Aggiungi al carrello</button>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top image" src="/pizza_diavola.jpg" alt="Card image cap" style={{width: "100%", height: "100%", objectFit:"cover"}}/>
                <div className="card-body">
                    <h5 className="card-title" id={idPizza}>Diavola</h5>
                    <p className="card-text">Pizza rossa con mozzarella di bufala D.O.P con salamino piccante. Costo: 6.00€</p>
                    <p className="card-text costo"  >Costo: 6.00€</p>
                    <button className="btn btn-primary" onClick={() => putThePizzaInCart('Diavola', '6.00€')}><i className="bi bi-bag" style={{color: "white", fontSize: "20px"}}></i>Aggiungi al carrello</button>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="/pizza_salsiccia&friarelli.webp" alt="Card image cap" style={{width: "100%", height: "100%", objectFit:"cover"}}/>
                <div className="card-body">
                    <h5 className="card-title" id={idPizza}>Salsiccia e friarelli</h5>
                    <p className="card-text">Base rossa con mozzarella di bufala D.O.P. con salsiccia e friarelli.  </p>
                    <p className="card-text costo"  >Costo: 6.50€</p>
                    <button className="btn btn-primary" onClick={() => putThePizzaInCart('Salsiccia e friarelli', '6.50€')}><i className="bi bi-bag" style={{color: "white", fontSize: "20px"}}></i>Aggiungi al carrello</button>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src="/pizza-americana.jpg" alt="Card image cap" style={{width: "100%", height: "100%", objectFit:"cover"}}/>
                <div className="card-body">
                    <h5 className="card-title" id={idPizza}>Americana</h5>
                    <p className="card-text">Base bianca con mozzarella wurstel e patatine fritte.</p>
                    <p className="card-text costo" >Costo: 7.00€</p>
                    <button className="btn btn-primary" onClick={() => putThePizzaInCart('Americana', '7.00€')}><i className="bi bi-bag" style={{color: "white", fontSize: "20px"}}></i>Aggiungi al carrello</button>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="/pizza-con-ananas.jpg" alt="Card image cap" style={{width: "100%", height: "100%", objectFit:"cover"}}/>
                <div className="card-body">
                    <h5 className="card-title" id={idPizza}>Pizza con Ananas</h5>
                    <p className="card-text">Guai a te se la ordini avrai la sanzione amministrativa.</p>
                    <p className="card-text costo" >Costo: 99.00€</p>
                    <button className="btn btn-primary" onClick={() => putThePizzaInCart('Pizza con Ananas', '99.00€')}><i className="bi bi-bag" style={{color: "white", fontSize: "20px"}}></i>Aggiungi al carrello</button>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="/4stagioni.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title" id={idPizza}>4 Stagioni</h5>
                    <p className="card-text">Rossa con mozzarella di bufala D.O.P. con carciofi, prosciutto, funghi e olive.</p>
                    <p className="card-text costo" >Costo: 7.50€</p>
                    <button className="btn btn-primary" onClick={() => putThePizzaInCart('4 Stagioni', '7.50€')}><i className="bi bi-bag" style={{color: "white", fontSize: "20px"}}></i>Aggiungi al carrello</button>
                    
                </div>
            </div>
            
            
        </div>
        
    )

}
