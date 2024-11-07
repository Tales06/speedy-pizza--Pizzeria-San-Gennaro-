import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/Style-login.css";
import { Link } from 'react-router-dom';

export default function RegisterForm() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Registrati</h3>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="name">Nome</label>
            <input type="text" className="form-control" id="name" placeholder="Inserisci il tuo nome" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Inserisci la tua email" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Crea una password" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="confirmPassword">Conferma Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Conferma la password" required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Registrati</button>
          <div className="text-center mt-3">
            <p>Hai già un account? <Link to="/login">Accedi</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}
